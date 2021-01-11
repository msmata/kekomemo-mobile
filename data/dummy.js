const { default: Comida } = require("../modelo/Comida");

const COMIDAS = [];

COMIDAS.push(new Comida(1, 'Guiso de lentejas', 'https://www.moulinex.com.ar/wp-content/uploads/2017/06/Guiso-lentejas-1024x1024.jpg'));
COMIDAS.push(new Comida(2, 'Hamburguesas', 'https://i.pinimg.com/originals/1a/e6/bd/1ae6bdd3616eb2c6fd7e181a8615fc06.jpg'));
COMIDAS.push(new Comida(3, 'Arroz con pollo y azafran', 'https://caserissimo.com/wp-content/uploads/2019/06/arcopoaz0001-1024x666.jpg'));
COMIDAS.push(new Comida(4, 'Ravioles', 'https://www.saboresdemihuerto.com/wp-content/uploads/2018/05/ravioles-de-queso-ricotta-1.jpg'));
COMIDAS.push(new Comida(5, 'Asado', 'https://www.agrolatam.com/files/image/26/26120/5b22b188b4811.jpg'));

export {COMIDAS};