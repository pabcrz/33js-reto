document.getElementById('login-button').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('Correo electrónico:', email);
    console.log('Contraseña:', password);
});