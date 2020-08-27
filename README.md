Creado con [Create React App](https://github.com/facebook/create-react-app).
Live demo: https://eberamp.com

## Paginas disponibles:

1. Landing page
2. Pagina de bienvenida
3. Portal
4. Favoritos

## Modos de acceso:

#### Codigos de acceso

1. e71n0gArd
2. eNuc1us

#### Enlaces de invitacion

1. /pokeportal/invite/e71n0gArd
2. /pokeportal/invite/eNuc1us


## Sesiones:

La "sesion" deberia persistir hasta que se ejecuta refresh o se retrocede en el history fuera del alcance de las rutas principales.

## Bugs:

Debido a falta de implementeacion logica, es posible agregar el mismo pokemon a favoritos mas de una vez. Esto ocaciona que al renderizar los componentes persista el renderizado anterior de un mismo componente, duplicando los objetos que se tenian, pues se pasa la misma key, en este caso el id del pokemon para mas de un componente.


