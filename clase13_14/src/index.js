import axios from './node_modules/axios';

// Campo del formulario
const form = document.querySelector('.form-data');
const region = document.querySelector('.region-name');
const apiKey = document.querySelector('.api-key');

// resultados
const errors = document.querySelector('.errors');
const loading = document.querySelector('.loading');
const results = document.querySelector('.result-container');
const usage = document.querySelector('.carbon-usage');
const fossilfuel = document.querySelector('.fossil-fuel');
const myregion = document.querySelector('.my-region');
const clearBtn = document.querySelector('.clear-btn');

calculateColor = async (value) => {
	let co2Scale = [0, 150, 600, 750, 800];
	let colors = ['#2AA364', '#F5EB4D', '#9E4229', '#381D02', '#381D02'];

	let closestNum = co2Scale.sort((a, b) => {
		return Math.abs(a - value) - Math.abs(b - value);
	})[0];
	console.log(value + ' is closest to ' + closestNum);
	let num = (element) => element > closestNum;
	let scaleIndex = co2Scale.findIndex(num);

	let closestColor = colors[scaleIndex];
	console.log(scaleIndex, closestColor);

	chrome.runtime.sendMessage({ action: 'updateIcon', value: { color: closestColor } });
};

const displayCarbonUsage = async (apiKey, region) => {
	try {
		await axios
			.get('https://api.co2signal.com/v1/latest', {
				params: {
					countryCode: region,
				},
				headers: {
					//obtega su token desde CO2Signal https://www.co2signal.com/
					'auth-token': apiKey,
				},
			})
			.then((response) => {
				let CO2 = Math.floor(response.data.data.carbonIntensity);

				calculateColor(CO2);

				loading.style.display = 'none';
				form.style.display = 'none';
				myregion.textContent = region;
				usage.textContent =
					Math.round(response.data.data.carbonIntensity) + ' grams (grams C02 emitted per kilowatt hour)';
				fossilfuel.textContent =
					response.data.data.fossilFuelPercentage.toFixed(2) +
					'% (percentage of fossil fuels used to generate electricity)';
				results.style.display = 'block';
			});
	} catch (error) {
		console.log(error);
		loading.style.display = 'none';
		results.style.display = 'none';
		errors.textContent = 'Sorry, we have no data for the region you have requested.';
	}
};

// configurar la clave API y la región
const setUpUser = async (apiKey, region) => {
	localStorage.setItem('apiKey', apiKey);
	localStorage.setItem('region', region);
	loading.style.display = 'block';
	errors.textContent = '';
	clearBtn.style.display = 'block';
	//Hacer la llamada inicial
	displayCarbonUsage(apiKey, region);
};

// manejar el envío del formulario
const handleSubmit = async (e) => {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
};

//controles iniciales
const init = async () => {
	//Si hay algo en el almacenamiento local, tómalo.
	const storedApiKey = localStorage.getItem('apiKey');
	const storedRegion = localStorage.getItem('region');

	//configurar el icono para que sea verde genérico
	chrome.runtime.sendMessage({
		action: 'updateIcon',
		value: {
			color: 'green',
		},
	});

	if (storedApiKey === null || storedRegion === null) {
		//si no tenemos la key mostrar el formulario
		form.style.display = 'block';
		results.style.display = 'none';
		loading.style.display = 'none';
		clearBtn.style.display = 'none';
		errors.textContent = '';
	} else {
		//Si hemos guardado claves/regiones en localStorage, mostraremos los resultados cuando se carguen.
		results.style.display = 'none';
		form.style.display = 'none';
		displayCarbonUsage(storedApiKey, storedRegion);
		clearBtn.style.display = 'block';
	}
};

const reset = async (e) => {
	e.preventDefault();
	//borrar el almacenamiento local solo para la región
	localStorage.removeItem('region');
	init();
};

form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));

//iniciar app
init();