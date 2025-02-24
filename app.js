let listaAmigos = [];

function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value;

    if (nombre === '') {
        alert('Por favor ingresa un nombre.');
    } else {
        if (listaAmigos.indexOf(nombre) === -1) {
            listaAmigos.push(nombre);
            actualizarLista();
        } else {
            alert('Este nombre ya está en la lista.');
        }
        input.value = '';
    }
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = listaAmigos[i];

        let botonEliminar = document.createElement('button');
        botonEliminar.innerText = 'Eliminar';
        botonEliminar.onclick = function () {
            listaAmigos.splice(i, 1);
            actualizarLista();
        };

        li.appendChild(botonEliminar);
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert('Agrega al menos dos amigos para sortear.');
    } else {
        let numero = Math.floor(Math.random() * listaAmigos.length);
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = '<li>El amigo secreto es: ' + listaAmigos[numero] + '</li>';
    }
}
