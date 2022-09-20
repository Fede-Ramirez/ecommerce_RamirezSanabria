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

*React JS: librería de Javascript utilizada para crear la interfaz de usuario de la app en "una sola página"
*JSX: forma de sintaxis del lenguaje javascript, que combinado con React, permite estructurar en código el uso de los distintos componentes de la librería.
*Chakra UI: framework CSS para estilos y maquetado de la aplicación.
*Chakra Icons: para agregar iconos que logren un impacto amigable e intuitivo al visualizar la app.
*React Icons: para agregar principalmente el icono del cart widget, puesto que no se encontraba en los iconos de Chakra.
*Firebase: base de datos utilizada para traer los productos y guardar las ordenes de compra de los usuarios.
*Create-react-app: utilizado para crear el entorno necesario para el uso de la librería react JS.
*React-router-dom: utilizado para crear las rutas necesarias para la navegabilidad de la app.
*React-toastify: utilizado para notificar al usuario sobre algunas cuestiones de la app, como errores, notificaciones informativas, productos agregados correctamente, etc.
*CSS: Utilizada para dar algunos estilos en particular. 


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
