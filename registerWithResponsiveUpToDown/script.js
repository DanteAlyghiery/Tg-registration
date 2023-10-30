const container = document.getElementById('container');

const registerBtn = document.getElementById('register');

const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active")
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active")
});


let tg = window.Telegram.WebApp;
let buy = document.getElementById('buy');
let order = document.getElementById('order');

buy.addEventListener('click', () => {
    document.getElementById('main').style.display = 'none';
    document.getElementById('form').style.display = 'block';
    document.getElementById('user_name').value = tg.initDataUnsafe.user.first_name + '' + tg.initDataUnsafe.user.last_name;

    order.addEventListener('click', () => {
        tg.close();
    })
})