let btn = document.querySelector('.eye');
btn.addEventListener('click', function () {
  let input = document.querySelector('#input-password-wrapper input');
  if (input.getAttribute('type') == 'password') {
    input.setAttribute('type', 'text');
    btn.innerHTML = '<i class="fas fa-eye-slash"></i>'; // Ícone de olho fechado
  } else {
    input.setAttribute('type', 'password');
    btn.innerHTML = '<i class="fas fa-eye"></i>'; // Ícone de olho aberto
  }
});