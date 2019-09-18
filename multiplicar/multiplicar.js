const fs = require('fs');

listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('No es un número');
            return;
        }

        if (!Number(limite)) {
            reject('Limite debe ser numero');
            return;
        }

        let data = '';
        for (let i = 1; i < limite; i++) {
            let suma = base * i;
            data += `${base} * ${i} = ${suma}\n`;
        }
        console.log(data);
    });
}

crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un número');
            return;
        }

        let data = '';
        for (let i = 1; i < limite; i++) {
            let suma = base * i;
            data += `${base} * ${i} = ${suma}\n`;
        }

        fs.writeFile(`../03-bases-node/tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                throw reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}