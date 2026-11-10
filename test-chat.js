const { io } = require('socket.io-client');

// Conectamos pasando el objeto user directamente para que coincida con tu Gateway
const socket = io('http://localhost:3000', {
    auth: {
        user: {
            id: '9b3636a3-1466-4a87-aa0d-f814e1020945',
            email: 'ivelgom047@gmail.com'
        }
    }
});

socket.on('connect', () => {
    console.log('🟢 ¡Conectado al servidor de Chat con éxito! Socket ID:', socket.id);

    // Simulamos enviar un mensaje al cabo de 2 segundos
    setTimeout(() => {
        console.log('📤 Enviando mensaje de prueba...');
        socket.emit('send_message', {
            toUserId: '9b3636a3-1466-4a87-aa0d-f814e1020945', // 👈 Cambiado de targetUserId a toUserId
            message: '¡Hola Fit Evolution! Probando el chat en tiempo real.'
        });
    }, 2000);
});

// Escuchamos los mensajes entrantes
socket.on('new_message', (payload) => {
    console.log('📥 ¡Mensaje recibido por WebSocket!', payload);
});

socket.on('disconnect', () => {
    console.log('🔴 Desconectado del servidor de chat.');
});