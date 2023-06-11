function validateEmail() {
    let inputEmail = document.getElementById('mail').value;
    let emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let validMail = emailRegex.test(inputEmail);
    let errorImg = document.querySelector('.error-img');

    if (validMail) {
        // El correo electrónico es válido, se borra el mensaje de error
        document.getElementById('alert').classList.add('alert-hidden');
        document.getElementById('mail').classList.remove('error');

        alert('Email is submit, please check your email')


    } else {
        // El correo electrónico es inválido, se muestra el mensaje de error y la imagen de error
        document.getElementById('alert').textContent = 'Por favor, ingresa un correo electrónico válido.';
        document.getElementById('alert').classList.remove('alert-hidden');
        document.getElementById('mail').classList.add('error');
        errorImg.style.display = 'inline'; // Mostrar la imagen
    }

    return false; // Para evitar que el formulario se envíe
}

document.getElementById('mail').addEventListener('input', function() {

    document.getElementById('alert').textContent = '';
    document.getElementById('alert').classList.add('alert-hidden');
    document.getElementById('mail').classList.remove('error');
    document.querySelector('.error-img').style.display = 'none';
});




