function generadorCvs(usuarios) {
    let encabezados = Object.keys(usuarios[0]).join(",");
    let filas = [];
    for(let usuario of usuarios){
        filas.push(Object.values(usuario).join(","));
    }
    return encabezados + "\n" + filas.join("\n");
}
module.exports = generadorCvs;
