let tablas = parseInt(prompt("Ingrese la tabla a repasar"));

for (let intento = 1; intento <= 5; intento++) {
    let numero = intento;
    let resultado = tablas * numero;

    let respuesta = parseInt(prompt(`Intento ${intento}: ¿Cuánto es ${tablas} x ${numero}?`));

    if (respuesta === resultado) {
        alert("¡Correcto!");
    } else {
        alert("Incorrecto. El resultado era " + resultado);
        break
    }
}
alert("Fin del repaso de la tabla del " + tablas);