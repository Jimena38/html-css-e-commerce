var cardDrop = document.getElementById('card-dropdown');
var activeDropdown;

// Evento de clic en el menú desplegable
cardDrop.addEventListener('click', function () {
    for (var i = 0; i < this.childNodes.length - 1; i++) {
        var node = this.childNodes[i];
        if (node.className === 'dropdown-select') {
            node.classList.add('visible');
            activeDropdown = node;
        }
    }
});

// Función para validar el formulario de pago
function validarPago() {
    var tarjeta = document.querySelector('[name="tarjeta"]').value;
    var propietario = document.querySelector('[name="propietario"]').value;
    var fecha = document.querySelector('[name="fecha"]').value;
    var cvc = document.querySelector('[name="cvc"]').value;

    if (tarjeta === "" || propietario === "" || fecha === "" || cvc === "") {
        alert("Por favor, complete todos los campos obligatorios.");
    } else {
        // Aquí puedes continuar con el proceso de pago si todos los campos están llenos.
        alert("Pago exitoso.");
        // Aquí podrías enviar el formulario o realizar otras acciones.
    }
}

// Manejo de clics en la ventana (document)
window.onclick = function (e) {
    if (e.target.tagName === 'LI' && activeDropdown) {
        // Cambiar la imagen de la tarjeta de crédito según la selección
        if (e.target.innerHTML === 'Master Card') {
            document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/2vbqk5lcpi7hjoc/MasterCard_Logo.svg.png';
        } else if (e.target.innerHTML === 'Naranja') {
            document.getElementById('credit-card-image').src = 'https://http2.mlstatic.com/storage/logos-api-admin/992bc350-f3be-11eb-826e-6db365b9e0dd-m.svg';
        } else if (e.target.innerHTML === 'BBVA') {
            document.getElementById('credit-card-image').src = 'https://http2.mlstatic.com/storage/logos-api-admin/dd202b00-f486-11eb-9984-b7076edb0bb7-m.svg';
        } else if (e.target.innerHTML === 'Visa') {
            document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png';
        }

        // Ocultar el menú desplegable y actualizar la selección
        activeDropdown.classList.remove('visible');
        activeDropdown = null;
        e.target.innerHTML = document.getElementById('current-card').innerHTML;
        document.getElementById('current-card').innerHTML = e.target.innerHTML;
    } else if (e.target.className !== 'dropdown-btn' && activeDropdown) {
        // Si se hace clic fuera del menú desplegable, ocultarlo
        activeDropdown.classList.remove('visible');
        activeDropdown = null;
    }
};
