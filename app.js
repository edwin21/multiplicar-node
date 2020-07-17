// Requireds

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

const argv = require('./config/yargs').argv;

const colors = require('colors');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite).
        then(archivo => console.log(`Archivo creado ${colors.green(archivo)}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comnado no reconocido');


}


//console.log(argv);


//console.log(process.argv);

// let argv2 = process.argv;

// console.log('Limite', argv.limite);

// let parametro = argv[2];

// let base = parametro.split('=')[1];
// //console.log(base);