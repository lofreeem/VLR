const WebSocket = require('ws');

// ������� WebSocket-������ �� ����� 8080
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
    console.log('����� ������ �����������');

    // ���������� ��������� �� �������
    ws.on('message', function incoming(message) {
        console.log('�������� ���������:', message);

        // ���������� ����� �������
        const response = `���: ${message}`;
        ws.send(response);
    });

    // �������� ����������
    ws.on('close', function close() {
        console.log('������ ����������');
    });
});

console.log('WebSocket-������ ������� �� ����� 8080');