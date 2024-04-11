
import React, { useEffect } from 'react';

function VoiceMessagePlayer() {
    useEffect(() => {
        // Establecer conexión WebSocket
        const socket = new WebSocket('ws://localhost:3000'); // Reemplaza esto con la URL de tu servidor WebSocket

        // Manejar mensajes recibidos a través del WebSocket
        socket.onmessage = function(event) {
            const message = JSON.parse(event.data);

            // Verificar si el mensaje recibido es un mensaje de voz
            if (message.type === 'voice') {
                // Reproducir el mensaje de voz
                playVoiceMessage(message.voiceMessage);
            }
        };

        return () => {
            // Cerrar la conexión WebSocket al desmontar el componente
            socket.close();
        };
    }, []);

    function playVoiceMessage(voiceMessage) {
        // Crear un nuevo objeto de audio
        const audio = new Audio(voiceMessage);

        // Reproducir el audio
        audio.play();
    }

    return null; // Este componente no renderiza nada visible en la interfaz
}

export default VoiceMessagePlayer;
