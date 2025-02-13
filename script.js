document.addEventListener('DOMContentLoaded', function() {
    const heart = document.querySelector('.heart');
    const hiddenMessage = document.getElementById('hidden-message');
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    const loveMessage = document.getElementById('love-message');

    // Переменная для отслеживания количества нажатий на "Нет"
    let clickCount = 0;

    heart.addEventListener('click', function() {
        // Показать скрытый текст
        hiddenMessage.style.display = 'block';
    });

    yesButton.addEventListener('click', function() {
        // Показать сообщение "Я тебя люблю"
        loveMessage.style.display = 'block';
    });

    noButton.addEventListener('click', function() {
        // Увеличиваем clickCount, чтобы отслеживать количество нажатий
        clickCount++;
        
        // При каждом нажатии увеличиваем размер кнопки "Да"
        yesButton.style.transform = `scale(${1 + 0.1 * clickCount})`;  // Увеличиваем кнопку каждый раз
        yesButton.style.transition = 'transform 0.3s ease';  // Плавный переход
    });
});
