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