dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));


function dragElement(terrariumElement) {
	//establecer 4 posiciones para el posicionamiento en la pantalla
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	terrariumElement.onpointerdown = pointerDrag;

    function pointerDrag(e) {
		e.preventDefault();
		console.log(e);
		//obtener la posición inicial del cursor del mouse para pos3 y pos4
		pos3 = e.clientX;
		pos4 = e.clientY;
		// cuando el mouse se mueve, comience a arrastrar
		document.onpointermove = elementDrag;
		// cuando se levanta el mouse, detener el arrastre
		document.onpointerup = stopElementDrag;
	}

	function elementDrag(e) {
		// calcular la nueva posición del cursor
		// pos1 = donde ESTABA el Xmouse - donde ESTÁ
		pos1 = pos3 - e.clientX;
		// pos2 = donde ESTABA el Ymouse - donde está
		pos2 = pos4 - e.clientY;
		//restablecer pos3 a la ubicación actual de Xmouse
		pos3 = e.clientX;
		//restablecer pos4 a la ubicación actual de Ymouse
		pos4 = e.clientY;
		console.log(pos1, pos2, pos3, pos4);
		// establecer la nueva posición del elemento:
		terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
		terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
	}

	function stopElementDrag() {
		// dejar de calcular cuando se suelta el mouse
		document.onpointerup = null;
		document.onpointermove = null;
	}
}