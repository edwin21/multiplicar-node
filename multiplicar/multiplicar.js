// requireds

const fs = require('fs');
const colors = require('colors');

// const fs= requiere('express');
// const fs = requiere ('./demo');

let listarTabla = (base, limite = 10) => {

    console.log('===================='.red);
    console.log(`==table de ${base}==`.green);
    console.log('===================='.red);
    for (let i = 1; i <= limite; i++) {

        console.log(`${base} * ${i} = ${base*i}`.green);
    }
};


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            let resp = base * i;
            data += `${base} * ${i} = ${resp} \n`;
        }


        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);

        });

    });

};



module.exports = {
    crearArchivo,
    listarTabla
};