# Clase 9 - Introducción a HTML

### Introducción

HTML, o lenguaje de marcado de hipertexto, 
es el "esqueleto" de la web. 
Si CSS 'viste' su HTML y JavaScript le da vida, 
HTML es el cuerpo de su aplicación web. 
La sintaxis de HTML incluso refleja esa idea, 
ya que incluye etiquetas de "encabezado", "cuerpo" y 
"pie de página".              

En esta lección, vamos a utilizar HTML para diseñar el "esqueleto" de la interfaz de nuestro terrario virtual. Tendrá un título y tres columnas  una columna derecha y otra izquierda donde viven las plantas que se pueden arrastrar, y un área central que será el terrario con 
apariencia de vidrio. Al final de esta lección, podrá ver las plantas en las columnas, 
pero la interfaz se verá un poco extraña; no se preocupe, en la siguiente sección agregará estilos CSS a la interfaz para que se vea mejor. 

## Las etiquetas DocType y html

La primera línea de un archivo HTML es su tipo de documento. Es un poco sorprendente que necesite tener esta línea en la parte superior del archivo, pero les dice a los navegadores más antiguos que el navegador debe mostrar la página en un modo estándar, siguiendo la especificación html actual.

Sugerencia: en VS Code, puede pasar el cursor sobre una etiqueta y obtener información sobre su uso en las guías de referencia de MDN.

La segunda línea debería ser la <html>etiqueta de apertura de la etiqueta, seguida ahora por su etiqueta de cierre </html>. Estas etiquetas son los elementos raíz de su interfaz.

## La 'cabeza' del documento

El área de "encabezado" del documento HTML incluye información crucial sobre su página web, también conocida como metadatos . En nuestro caso, le decimos al servidor web al que se enviará esta página para que renderice, estas cuatro cosas:

- el titulo de la página
- metadatos de la página que incluyen:
    - el 'conjunto de caracteres', que indica qué codificación de caracteres se usa en la página
    - información del navegador, incluida `x-ua-compatible`
        
        la que indica que el navegador IE=edge es compatible
        
    - información sobre cómo debe comportarse la ventana gráfica cuando se carga. Configurar la ventana gráfica para que tenga una escala inicial de 1, Además controla el nivel de zoom cuando la página se carga por primera vez.

## Los documentos `body`

### Etiquetas HTML

En HTML, agrega etiquetas a su archivo html para crear elementos de una página web. Cada etiqueta suele tener una etiqueta de apertura y una de cierre, así: `<p>hello</p>` para indicar un párrafo. 

🪄 Cree el cuerpo de su interfaz agregando un conjunto de etiquetas `<body>` dentro del par de etiquetas `<html>`.

### Imágenes

Una etiqueta html que no necesita una etiqueta de cierre es la `<img>` etiqueta, porque tiene un `src` elemento que contiene toda la información que la página necesita para mostrar el elemento.

## Marcado semántico

En general, es preferible utilizar una 'semántica' significativa al escribir HTML. ¿Qué significa eso? Significa que utiliza etiquetas HTML para representar el tipo de datos o interacción para el que fueron diseñadas. Por ejemplo, el texto del título principal de una página debe usar una `<h1>` etiqueta.

El uso de marcas semánticas, como encabezados `<h1>` y listas desordenadas, `<ul>`  ayuda a los lectores de pantalla a navegar por una página. En general, los botones deben escribirse como ` <button>` y las listas deben ser `<li>`. Si bien es posible usar `<span>` elementos de estilo especial con controladores de clic para simular botones, es mejor que los usuarios discapacitados usen tecnologías para determinar en qué parte de una página reside un botón e interactuar con él, si el elemento aparece como un botón. Por esta razón, intente usar el marcado semántico tanto como sea posible.




# Clase 10 - Introducción a CSS ✨✨

## Introducción

CSS, u hojas de estilo en cascada, resuelven un problema importante del desarrollo web: cómo hacer que su sitio web se vea bien. Diseñar sus aplicaciones las hace más útiles y atractivas; también puede usar CSS para crear un diseño web receptivo (RWD), lo que permite que sus aplicaciones se vean bien sin importar en qué tamaño de pantalla se muestren.

CSS no se trata solo de hacer que su aplicación se vea bien; su especificación incluye animaciones y transformaciones que pueden permitir interacciones sofisticadas para sus aplicaciones.

Tenga en cuenta que CSS es un lenguaje que evoluciona, como todo en la web, y no todos los navegadores admiten partes más nuevas de la especificación. Comprueba siempre tus implementaciones consultando CanIUse.com

## la cascada

Las hojas de estilo en cascada incorporan la idea de que los estilos "están en cascada" de modo que la aplicación de un estilo se guíe por su prioridad. Los estilos establecidos por el autor de un sitio web tienen prioridad sobre los establecidos por un navegador. Los estilos establecidos 'en línea' tienen prioridad sobre los establecidos en una hoja de estilo externa.


## Herencia

Los estilos se heredan de un estilo antecesor a un descendiente, de modo que los elementos anidados heredan los estilos de sus padres.

📚 Tarea
Establezca la fuente del cuerpo en una fuente determinada y verifique la fuente de un elemento anidado:

```
body {
	font-family: helvetica, arial, sans-serif;
}
```

## Selectores de CSS

### Etiquetas
Hasta ahora, su archivo `style.css` tiene solo unas pocas etiquetas diseñadas y la aplicación se ve bastante extraña:

```
body {
	font-family: helvetica, arial, sans-serif;
}

h1 {
	color: #3a241d;
	text-align: center;
}
```

Esta forma de diseñar una etiqueta le brinda control sobre elementos únicos, pero necesita controlar los estilos de muchas plantas en su terrario. Para hacerlo, debe aprovechar los selectores de CSS.

## Identificaciones

Agregue algo de estilo al diseño de los contenedores izquierdo y derecho. Dado que solo hay un contenedor izquierdo y solo un contenedor derecho, se les asignan identificadores en el marcado. Para darles estilo, usa `#`

```
#left-container {
	background-color: #eee;
	width: 15%;
	left: 0px;
	top: 0px;
	position: absolute;
	height: 100%;
	padding: 10px;
}

#right-container {
	background-color: #eee;
	width: 15%;
	right: 0px;
	top: 0px;
	position: absolute;
	height: 100%;
	padding: 10px;
}
```

Aquí, ha colocado estos contenedores con posicionamiento absoluto en el extremo izquierdo y derecho de la pantalla, y ha utilizado porcentajes para su ancho para que puedan escalarse para pantallas móviles pequeñas.

## Clases

En el ejemplo anterior, diseñó dos elementos únicos en la pantalla. Si desea que los estilos se apliquen a muchos elementos en la pantalla, puede usar clases CSS. Haga esto para distribuir las plantas en los contenedores izquierdo y derecho.

Observe que cada planta en HTML tiene una combinación de identificadores y clases. Los identificadores aquí son utilizados por el JavaScript que agregará más adelante para manipular la ubicación de las plantas del terrario. Las clases, sin embargo, dan a todas las plantas un estilo determinado.

```
<div class="plant-holder">
	<img class="plant" alt="plant" id="plant1" src="./images/plant1.png" />
</div>
```

Agregue lo siguiente a su archivo style.css:

```
.plant-holder {
	position: relative;
	height: 13%;
	left: -10px;
}

.plant {
	position: absolute;
	max-width: 150%;
	max-height: 150%;
	z-index: 2;
}
```

Lo notable en este fragmento es la combinación de posicionamiento relativo y absoluto, que cubriremos en la siguiente sección. Podemos dar un vistazo a la forma en que se manejan las alturas mediante porcentajes:

Establece la altura del plant holder en 13%, un buen número para garantizar que todas las plantas se muestren en cada contenedor vertical sin necesidad de desplazarse.

Configura el plant holder para que se mueva hacia la izquierda para permitir que las plantas estén más centradas dentro de su contenedor. Las imágenes tienen una gran cantidad de fondo transparente para que se puedan arrastrar más, por lo que es necesario empujarlas hacia la izquierda para que quepan mejor en la pantalla.

Luego, a la planta se le da un ancho máximo del 150%. Esto le permite reducirse a medida que se reduce el navegador. Intente cambiar el tamaño de su navegador; las plantas permanecen en sus contenedores pero se reducen para caber.

También es notable el uso del índice z, que controla la altitud relativa de un elemento (para que las plantas se asienten en la parte superior del contenedor y parezcan estar dentro del terrario).

## Posicionamiento CSS

Mezclar propiedades de posición (hay posiciones estáticas, relativas, fijas, absolutas) puede ser un poco complicado, pero cuando se hace correctamente, le brinda un buen control sobre los elementos de sus páginas.

Los elementos con posición absoluta se colocan en relación con sus ancestros más cercanos y, si no hay ninguno, se colocan de acuerdo con el cuerpo del documento.

Los elementos posicionados relativos se posicionan en función de las direcciones del CSS para ajustar su ubicación lejos de su posición inicial.

En nuestra muestra, el `plant-holder` es un elemento de posición relativa que se coloca dentro de un contenedor de posición absoluta. El comportamiento resultante es que los contenedores de la barra lateral están fijados a la izquierda y a la derecha, y el portaplantas está anidado, ajustándose dentro de las barras laterales, dando espacio para que las plantas se coloquen en una fila vertical.

## Diseños CSS

Ahora usará lo que aprendió para construir el propio terrario, ¡todo usando CSS!

```
.jar-walls {
	height: 80%;
	width: 60%;
	background: #d1e1df;
	border-radius: 1rem;
	position: absolute;
	bottom: 0.5%;
	left: 20%;
	opacity: 0.5;
	z-index: 1;
}

.jar-top {
	width: 50%;
	height: 5%;
	background: #d1e1df;
	position: absolute;
	bottom: 80.5%;
	left: 25%;
	opacity: 0.7;
	z-index: 1;
}

.jar-bottom {
	width: 50%;
	height: 1%;
	background: #d1e1df;
	position: absolute;
	bottom: 0%;
	left: 25%;
	opacity: 0.7;
}

.dirt {
	width: 60%;
	height: 5%;
	background: #3a241d;
	position: absolute;
	border-radius: 0 0 1rem 1rem;
	bottom: 1%;
	left: 20%;
	opacity: 0.7;
	z-index: -1;
}
```

Tenga en cuenta el uso de porcentajes aquí. Si reduce la escala de su navegador, podrá ver cómo se escala el frasco también. Observe también los porcentajes de ancho y alto de los elementos del frasco y cómo cada elemento está absolutamente posicionado en el centro, fijado en la parte inferior de la ventana gráfica.

También utilizamos `rem` para el radio del borde una longitud relativa a la fuente. Lea más sobre este tipo de medición relativa en la `especificación CSS`.


📚 Tarea: Prueba a cambiar los colores y la opacidad del frasco versus los de la tierra. ¿Lo que sucede? ¿Por qué?

# Clase 11 - Introducción a DOM y Closures

### Introducción

La manipulación del DOM, o el "Modelo de objeto del documento", es un aspecto clave del desarrollo web. Según [MDN](https://developer.mozilla.org/docs/Web/API/Document_Object_Model/Introduction) , "El modelo de objetos de documento (DOM) es la representación de datos de los objetos que componen la estructura y el contenido de un documento en la web". Los desafíos en torno a la manipulación de DOM en la web a menudo han sido el impulso detrás del uso de marcos de JavaScript en lugar de JavaScript estándar para administrar el DOM, ¡pero lo manejaremos por nuestra cuenta!

Piense en el DOM como un árbol, que representa todas las formas en que se puede manipular un documento de página web. Se han escrito varias API (interfaces de programas de aplicaciones) para que los programadores, utilizando el lenguaje de programación de su elección, puedan acceder al DOM y editarlo, cambiarlo, reorganizarlo y administrarlo.

![DOM Tree](../Terrarium/DOM-tree.png)


Además, esta lección presentará la idea de los closures en JavaScript , que puede considerarse como una función encerrada por otra función para que la función interna tenga acceso al alcance de la función externa.

`Los cierres o closures` en JavaScript son un tema amplio y complejo. Esta lección aborda la idea más básica de que en el código de este terrario encontrará un cierre: una función interna y una función externa construidas de manera que permitan a la función interna acceder al alcance de la función externa. Usaremos un cierre para manipular el DOM.

En esta lección, completaremos nuestro proyecto de terrario interactivo creando el JavaScript que permitirá al usuario manipular las plantas en la página.

## Requisito previo
Deberías tener construido el HTML y CSS para tu terrario. Al final de esta lección podrás mover las plantas dentro y fuera del terrario arrastrándolas.

📢 Tarea
En la carpeta de su terrario, cree un nuevo archivo llamado script.js. Importa ese archivo en la <head> sección:

```html
	<script src="./script.js" defer></script>
```


> Nota: utilíce `defer` importar un archivo JavaScript externo al archivo html para permitir que JavaScript se ejecute solo después de que el archivo HTML se haya cargado por completo. También puede usar el asyncatributo, que permite que el script se ejecute mientras se analiza el archivo HTML, pero en nuestro caso, es importante tener los elementos HTML completamente disponibles para arrastrar antes de permitir que se ejecute el script de arrastre.
---

## Los elementos DOM

Lo primero que debe hacer es crear referencias a los elementos que desea manipular en el DOM. En nuestro caso, son las 14 plantas que actualmente esperan en las barras laterales.

📢 Tarea

```html
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
```
¿Que está pasando aqui? Está haciendo referencia al documento y revisando su DOM para encontrar un elemento con una identificación particular. ¿Recuerda que en la primera lección sobre HTML le dio ID individuales a cada imagen de planta ( `id="plant1"`)? Ahora harás uso de ese esfuerzo. Después de identificar cada elemento, pasa ese elemento a una función llamada `dragElement` que creará en un minuto. Por lo tanto, el elemento en el HTML ahora se puede arrastrar, o lo estará en breve.

## Closure 

Ahora está listo para crear el cierre dragElement, que es una función externa que encierra una función o funciones internas (en nuestro caso, tendremos tres).

Los cierres son útiles cuando una o más funciones necesitan acceder al alcance de una función externa. He aquí un ejemplo:

```javascript
function displayCandy(){
	let candy = ['jellybeans'];
	function addCandy(candyType) {
		candy.push(candyType)
	}
	addCandy('gumdrops');
}
displayCandy();
console.log(candy)
```

En este ejemplo, la función `displayCandy` rodea una función que inserta un nuevo tipo de caramelo en un array que ya existe en la función. Si ejecutara este código, la candymatriz no estaría definida, ya que es una variable local (local al cierre).

✅ ¿Cómo puedes hacer que la candymatriz sea accesible? Intente moverlo fuera del cierre. De esta manera, la matriz se vuelve global, en lugar de permanecer únicamente disponible para el ámbito local del cierre.

📢 Tarea
Debajo de las declaraciones de elementos en script.js, cree una función:


```javascript
function dragElement(terrariumElement) {
	//establecer 4 posiciones para el posicionamiento en la pantalla
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	terrariumElement.onpointerdown = pointerDrag;
}
```
`dragElement` obtiene su objeto de las declaraciones en la parte superior del script`terrariumElement`. Luego, establece algunas posiciones locales en 0 para el objeto pasado a la función. Estas son las variables locales que se manipularán para cada elemento a medida que agregue la funcionalidad de arrastrar y soltar dentro del cierre de cada elemento. El terrario estará poblado por estos elementos arrastrados, por lo que la aplicación debe realizar un seguimiento de dónde se colocan.

Además, al `terrariumElement` que se pasa a esta función se le asigna un evento `pointerdown`, que forma parte de las [web APIs](https://developer.mozilla.org/docs/Web/API) diseñadas para ayudar con la administración de DOM. `onpointerdown` Se activa cuando se presiona un botón o, en nuestro caso, se toca un elemento que se puede arrastrar. Este controlador de eventos funciona tanto en  [navegadores web como móviles](https://caniuse.com/?search=onpointerdown), con algunas excepciones.

✅ El [controlador de eventos `onclick`](https://developer.mozilla.org/docs/Web/API/GlobalEventHandlers/onclick) tiene mucho más soporte para varios navegadores; ¿Por qué no lo usarías aquí? Piense en el tipo exacto de interacción de pantalla que está intentando crear aquí.

## La función de arrastre del puntero
Está listo `terrariumElement` para ser arrastrado; cuando se activa el evento, se invoca la función `onpointerdown`. Agregue esta función `pointerDrag` justo debajo de esta línea terrariumElement.onpointerdown = pointerDrag;

📢 Tarea
```javascript
function pointerDrag(e) {
	e.preventDefault();
	console.log(e);
	pos3 = e.clientX;
	pos4 = e.clientY;
}
```

Suceden varias cosas. En primer lugar, evita que se produzcan los eventos predeterminados que normalmente ocurren al apuntar hacia abajo usando `e.preventDefault();`. De esta manera tienes más control sobre el comportamiento de la interfaz.

En segundo lugar, abra `index.html` en una ventana del navegador e inspeccione la interfaz. Cuando haces clic en una planta, puedes ver cómo se captura el evento 'e'. ¡Profundice en el evento para ver cuánta información se recopila con un evento con el puntero hacia abajo!

A continuación, observe cómo las variables locales `pos3` y `pos4` están configuradas en `e.clientX`. Puede encontrar los evalores en el panel de inspección. Estos valores capturan las coordenadas `x` e `y` de la planta en el momento en que haces clic en ella o la tocas. Necesitará un control detallado sobre el comportamiento de las plantas a medida que hace clic en ellas y las arrastra, para poder realizar un seguimiento de sus coordenadas.

✅ ¿Está cada vez más claro por qué toda esta aplicación se construye con un gran cierre? Si no fuera así, ¿cómo mantendría el alcance para cada una de las 14 plantas arrastrables?

Complete la función inicial agregando dos manipulaciones de eventos de puntero más en `pos4 = e.clientY`:

```html
document.onpointermove = elementDrag;
document.onpointerup = stopElementDrag;
```

Ahora estás indicando que quieres que la planta sea arrastrada junto con el puntero a medida que la mueves, y que el gesto de arrastre se detenga cuando deselecciones la planta. `onpointermove` y `onpointerup` son todas partes de la misma API que `onpointerdown`. La interfaz arrojará errores ahora ya que aún no ha definido las funciones `elementDrag` y `stopElementDrag`, así que constrúyalas a continuación.

## Las funciones elementDrag y stopElementDrag

Completarás tu cierre agregando dos funciones internas más que manejarán lo que sucede cuando arrastras una planta y dejas de arrastrarla. El comportamiento que desea es que pueda arrastrar cualquier planta en cualquier momento y colocarla en cualquier lugar de la pantalla. Esta interfaz es bastante sencilla (no hay zona de caída, por ejemplo) para permitirle diseñar su terrario exactamente como desee agregando, eliminando y reposicionando plantas.

📢 Tarea
Agregue la función `elementDrag` justo después de la llave de cierre de `pointerDrag`:

```javascript
function elementDrag(e) {
	pos1 = pos3 - e.clientX;
	pos2 = pos4 - e.clientY;
	pos3 = e.clientX;
	pos4 = e.clientY;
	console.log(pos1, pos2, pos3, pos4);
	terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
	terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
}
```

En esta función, editas mucho las posiciones iniciales 1-4 que configuras como variables locales en la función externa. ¿Que está pasando aqui?

A medida que arrastra, reasigna `pos1` haciéndolo igual a `pos3` (que configuró anteriormente como ) menos el valor actual `e.clientX`. Realizarás una operación similar con `e.clientX` a `pos2`. Luego, restablece `pos3`y `pos4` a las nuevas coordenadas X e Y del elemento. Puedes ver estos cambios en la consola mientras arrastras. Luego, manipula el estilo CSS de la planta para establecer su nueva posición en función de las nuevas posiciones de `pos1`y `pos2`, calculando las coordenadas X e Y superior e izquierda de la planta en función de la comparación de su desplazamiento con estas nuevas posiciones.

> `offsetTop` y `offsetLeft`son propiedades CSS que establecen la posición de un elemento en función de la de su padre; su padre puede ser cualquier elemento que no esté posicionado como static. 

Todo este recálculo de posicionamiento permite afinar el comportamiento del terrario y sus plantas.

📢Tarea
La tarea final para completar la interfaz es agregar la función `stopElementDrag` después de la llave de cierre de `elementDrag`:

```javascript
function stopElementDrag() {
	document.onpointerup = null;
	document.onpointermove = null;
}
```

Esta pequeña función restablece los eventos `onpointerup` y `onpointermove` para que puedas reiniciar el progreso de tu planta comenzando a arrastrarla nuevamente o comenzar a arrastrar una nueva planta.

¡Ahora has completado tu proyecto!

## 🥇¡Felicidades! Has terminado tu hermoso terrario.