window.addEventListener('DOMContentLoaded', function() {
    let loginField = document.querySelector('#login');
    let passwordField = document.querySelector('#password');
    let checkbox = document.querySelector('#checkbox');
    let button = document.querySelector('#loginButton');
    let button1 = document.querySelector('#exit');


    //события на кнопке
    button.addEventListener('click', function() {
      // заполнение полей
      if (loginField.value && passwordField.value) {
        // состояние чекбокса
        let isChecked = checkbox.checked;
  
        // Сохраняем состояние чекбокса в localstorage
        localStorage.setItem('isChecked', isChecked);
  
        // Переходим на страницу main.html
        window.location.replace('main.html');
      }
    });
  
    // Проверяем, есть ли данные в localstorage
    let isChecked = localStorage.getItem('isChecked');
  
    // Если есть данные и состояние чекбокса было отмечено, то ставим галочку
    if (isChecked === 'true') {
      checkbox.checked = true;
}})