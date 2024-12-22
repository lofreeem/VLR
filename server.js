const WebSocket = require('ws');

// Создаем WebSocket-сервер на порту 8080
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
    console.log('Новый клиент подключился');

    // Обработчик сообщений от клиента
    ws.on('message', function incoming(message) {
        console.log('Получено сообщение:', message);

        // Отправляем ответ клиенту
        const response = `Бот: ${message}`;
        ws.send(response);
    });

    // Закрытие соединения
    ws.on('close', function close() {
        console.log('Клиент отключился');
    });
});

console.log('WebSocket-сервер запущен на порту 8080');