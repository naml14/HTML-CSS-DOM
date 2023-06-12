const aqua = document.getElementById("aqua");
const emocion = document.getElementById("emocion");
const alegria = document.getElementById("alegria");
const frescura = document.getElementById("frescura");
const vendedores = document.getElementById("vendedores");

let empleados = [];

function guardarVentas() {
    empleados.push(ventasEmpleado())
}
function ventasEmpleado() {
    if (aqua.value != '' && emocion.value != '' && alegria.value != '' && frescura.value != '') {
        return {
            name: vendedores.value,
            ventasAqua: (200 * aqua.value),
            ventasEmocion: (180 * emocion.value),
            ventasAlegria: (160 * alegria.value),
            ventasFrescura: (150 * frescura.value)
        }
    } else {
        alert("NO PUEDE DEJAR CAMPOS VACIOS")
    }

}
function empleadoMes() {
    let ganador = "";
    let total = 0;
    for (let i = 0; i < empleados.length; i++) {
        let suma = empleados[i].ventasAqua + empleados[i].ventasEmocion + empleados[i].ventasAlegria + empleados[i].ventasFrescura;
        if (total < suma) {
            total = suma;
            ganador = empleados[i].name;
        } else if (total == suma) {
            ganador = "No hay ganador";
        } else {
            total=total;
            ganador=ganador;
        }
    }
    if (ganador == "No hay ganador") {
        alert(`LOS EMPLEADOS VENDIERON LO MISMO CON UN TOTAL DE ${total} usd`)
    } else {
        alert(`EL EMPLEADO DEL MES ES: ${ganador} con un total de ${total} usd`)
    }

}