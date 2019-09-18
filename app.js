// Requieres
const argv = require('./config/yargs').argv;

const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado con exito ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Pase un comando');
}