// script.js

// Проверка, что Mini App загружена в Telegram
if (window.Telegram && window.Telegram.WebApp) {
  const WebApp = window.Telegram.WebApp;

  // Инициализация Mini App
  WebApp.ready();

  // Установка темы
  document.body.style.backgroundColor = WebApp.backgroundColor;

  // Получение данных о пользователе
  const user = WebApp.initDataUnsafe.user;

  if (user) {
    document.getElementById('user-name').textContent = `${user.first_name} ${user.last_name || ''}`;
    document.getElementById('user-username').textContent = `@${user.username || 'не задан'}`;
  } else {
    document.getElementById('user-name').textContent = 'Неизвестно';
  }

  // Кнопка отправки
  const button = document.getElementById('send-data');
  button.addEventListener('click', () => {
    const data = {
      action: "send_message",
      text: `Привет! Я открыл Mini App 🚀\nПользователь: ${user.first_name} ${user.last_name || ''}`
    };

    // Отправка данных в бота
    WebApp.sendData(JSON.stringify(data));
  });

} else {
  document.body.innerHTML = '<h2>Откройте это приложение в Telegram</h2>';
}
