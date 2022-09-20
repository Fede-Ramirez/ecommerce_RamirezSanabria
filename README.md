# Filolearning shop (Proyecto de React JS de Coderhouse)

## Acerca del proyecto

Filolearning shop es un proyecto que simula un ecommerce con temática de librería, orientado principalmente a estudiantes de primaria, secundaria y universidad. En este proyecto el usuario podrá simular compras de artículos de librería accediendo a un catálogo principal, encontrando allí todos los productos disponibles, y luego podrá navegar por categorías en caso de que el usuario busque algo en particular. Cada producto podrá ser visto en detalle presionando los botones correspondientes. Una vez se agreguen uno o varios productos al carrito, el usuario podrá acceder al mismo a través del icono del carrito en la barra de navegación o presionando el botón de ir al carrito al adquirir un producto. 
Al acceder al carrito, podrá ver todos los productos en lista con la cantidad, precios y precio final de compra correspondientes. El usuario podrá eliminar productos del carrito si así lo desea, o vaciarlo completamente a través del botón. Por otra parte, si procede a realizar la compra, se lo redirigirá a un formulario que deberá completar con sus datos. Al confirmar la compra, se le agradecerá, se le brindará el ID de su compra y se le dejará un slider que simula una valoración de la app. Por último, podrá volver al catálogo principal mediante el botón de "ir al inicio", vaciandose a la vez el carrito adquirido.

## Instalación e inicialización de la app

Para instalar e inicializar la app en tu equipo se recomienda seguir los siguientes pasos:

1. Parado en la url del repositorio presionar el botón verde code y copiar la url que se brinda para clonar el proyecto.
2. Crea una carpeta en tu computadora para guardar el proyecto. En ella, deberás inicializar la terminal de tu sistema operativo o la terminal de git y ejecutar el comando `git clone` seguido de la url que copiaste. Es importante tener instalado git, ya que sino no funcionará (visitar [https://git-scm.com/] para instalar)
3. Podrás observar que dentro de esa carpeta se crea otra que contendrá la copia local del repositorio con todos sus archivos.
4. Para iniciar la aplicación es fundamental que tengas instalado también Node JS, ya que sino los comandos npm no te funcionarán. Visita el siguiente link [https://nodejs.org/es/] en caso de que no lo tengas instalado.
5. Nuevamente en una terminal, ya sea en la de tu sistema operativo, en la de git o en terminales como las que ofrece visual studio code, ejecuta el comando `npm install` para instalar todas las librerías y frameworks de la que depende el proyecto. En este caso depende de la librería React JS y de frameworks como Chakra UI.
6. Como este proyecto fue creado con create-react-app deberás ejecutar el comando `npm start` para finalmente inicializar la app y poder visualizarla o empezar a trabajar en ella si así lo deseas.

## Tecnologías utilizadas

El proyecto se ha realizado a partir de las siguientes tecnologías:

1. React JS: librería de Javascript utilizada para crear la interfaz de usuario de la app en "una sola página"
2. JSX: forma de sintaxis del lenguaje javascript, que combinado con React, permite estructurar en código el uso de los distintos componentes de la librería.
3. Chakra UI: framework CSS para estilos y maquetado de la aplicación.
4. Chakra Icons: para agregar iconos que logren un impacto amigable e intuitivo al visualizar la app.
5. React Icons: para agregar principalmente el icono del cart widget, puesto que no se encontraba en los iconos de Chakra.
6. Firebase: base de datos utilizada para traer los productos y guardar las ordenes de compra de los usuarios.
7. Create-react-app: utilizado para crear el entorno necesario para el uso de la librería react JS.
8. React-router-dom: utilizado para crear las rutas necesarias para la navegabilidad de la app.
9. React-toastify: utilizado para notificar al usuario sobre algunas cuestiones de la app, como errores, notificaciones informativas, productos agregados correctamente, etc.
10. CSS: Utilizada para dar algunos estilos en particular. 