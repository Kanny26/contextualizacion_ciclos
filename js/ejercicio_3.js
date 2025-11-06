
let niño = 1;

for (niño = 1; niño <= 10; niño++) {
    let tiene_dulce = prompt("Niño " + niño + ": ¿Tienes un dulce? (si/no)").toLowerCase();
    if(tiene_dulce === "si") {
        alert("¡Puedes pasar!");
        continue;
    }
    console.log("se entregará un dulce al niño " + niño);
    alert("¡Puedes pasar!");
}
