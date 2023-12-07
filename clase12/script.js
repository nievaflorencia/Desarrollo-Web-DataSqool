const quotes = [
	'Hazlo o no lo hagas. Pero no lo intentes.',
    'El mejor profesor, el fracaso es.',
    'Paciencia debes tener, mi joven padawan.',
    'El miedo es el camino hacia el lado oscuro, el miedo lleva a la ira, la ira lleva al odio, el odio lleva al sufrimiento, el sufrimiento al lado oscuro.',
    'Transmite siempre lo que has aprendido.',
    'Difícil de ver es. Siempre en movimiento el futuro está.',
    'Imposible nada es. Difícil, muchas cosas son.',
];

// array para almacenar las palabras del desafío actual
let words = [];
// almacena el índice de la palabra que el jugador está escribiendo 
let wordIndex = 0;
// valor predeterminado para startTime (se establecerá al inicio)
let startTime = Date.now();

// agarrar elementos de  UI (interfaz de usuario)
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message')
const typedValueElement = document.getElementById('typed-value');

document.getElementById('start').addEventListener('click', function () {
	// conseguir una quote(cita)
	const quoteIndex = Math.floor(Math.random() * quotes.length);
	const quote = quotes[quoteIndex];
	// Ponga la cita en un array de palabras
	words = quote.split(' ');
	// restablecer el índice de palabras para el seguimiento
	wordIndex = 0;

    // UI updates (actualización)
	// Cree un array de elementos de intervalo para que podamos establecer una clase
	const spanWords = words.map(function(word) { return `<span>${word} </span>`});
	// Convertir en string y establecer como innerHTML en la visualización de citas
	quoteElement.innerHTML = spanWords.join('');
	// Resalta la primer palabra
	quoteElement.childNodes[0].className = 'highlight';
	// Borra cualquier mensaje anterior
	messageElement.innerText = '';

	// Configurar el cuadro de texto (textbox)
	// Limpiar el textbox
	typedValueElement.value = '';
	// enfocar 
	typedValueElement.focus();
	// establecer el controlador de eventos

	// Iniciar el temporizador 
	startTime = new Date().getTime();
});

typedValueElement.addEventListener('input', (e) => {
	// Obtener la palabra actual
	const currentWord = words[wordIndex];
	// Obtener el valor actual
	const typedValue = typedValueElement.value;

	if (typedValue === currentWord && wordIndex === words.length - 1) {
		// Fin de cita
		// Mostrar éxito
		const elapsedTime = new Date().getTime() - startTime;
		const message = `¡FELICIDADES! terminaste en ${elapsedTime / 1000} seconds.`;
		messageElement.innerText = message;
	} else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
		// Fn de palabra
		// Borra el typedValueElement para la nueva palabra
		typedValueElement.value = '';
		// Pasar a la siguiente palabra
		wordIndex++;
		// Restablecer el nombre de la clase para todos los elementos entre comillas
		for (const wordElement of quoteElement.childNodes) {
			wordElement.className = '';
        }
		// Resaltar la nueva palabra
		quoteElement.childNodes[wordIndex].className = 'highlight';
	} else if (currentWord.startsWith(typedValue)) {
		// actualmente correcto
		// resaltar la siguiente palabra
		typedValueElement.className = '';
	} else {
		// estado de error
		typedValueElement.className = 'error';
	}
});