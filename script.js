// Array para guardar los nombres
var amigos = [];

// --- FUNCIONES ---

// Funcion para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el nombre del input
    var inputNombre = document.getElementById('nombre-amigo');
    var nombre = inputNombre.value;

    // Si el nombre no esta vacio
    if (nombre != "") {
        // Ver si el nombre ya existe
        if (amigos.includes(nombre)) {
            alert("Ese nombre ya fue agregado.");
        } else {
            // Agregarlo a la lista de amigos
            amigos.push(nombre);
            actualizarLista();
        }
        // Limpiar el campo de texto
        inputNombre.value = "";
    } else {
        alert("Por favor, escribe un nombre.");
    }
}

// Funcion para mostrar la lista de amigos en la pantalla
function actualizarLista() {
    var listaHTML = document.getElementById('lista-amigos');
    // Limpiar la lista antes de agregar los nombres
    listaHTML.innerHTML = '';

    // Poner cada amigo en la lista
    for (var i = 0; i < amigos.length; i++) {
        var elemento = document.createElement('li');
        elemento.textContent = amigos[i];
        listaHTML.appendChild(elemento);
    }
}

// Funcion para hacer el sorteo
function realizarSorteo() {
    // Revisar si hay suficientes personas para sortear
    if (amigos.length < 2) {
        alert("Necesitas al menos 2 participantes para sortear.");
        return;
    }

    // Obtener un numero al azar
    var indiceAleatorio = Math.floor(Math.random() * amigos.length);
    // Seleccionar el ganador
    var ganador = amigos[indiceAleatorio];

    // Mostrar el ganador
    var resultado = document.getElementById('resultado-sorteo');
    resultado.textContent = ganador; // Modificado para mostrar solo el nombre
}

// Funcion para empezar de nuevo
function reiniciarJuego() {
    // Borrar todos los amigos
    amigos = [];
    // Limpiar las listas en la pantalla
    actualizarLista();
    document.getElementById('resultado-sorteo').textContent = '';
}

// --- CONECTAR BOTONES CON FUNCIONES ---

// Conectar el boton de agregar
document.getElementById('agregar-btn').addEventListener('click', agregarAmigo);
// Conectar el boton de sortear
document.getElementById('sortear-btn').addEventListener('click', realizarSorteo);
// Conectar el boton de reiniciar
document.getElementById('reiniciar-btn').addEventListener('click', reiniciarJuego);

// Para poder agregar con la tecla Enter
document.getElementById('nombre-amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});