// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onChildAdded } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkORHTvaDQhTOzZRkC54HgVZjaj_Jyj-E",
  authDomain: "saladeestudo-9126d.firebaseapp.com",
  databaseURL: "https://saladeestudo-9126d-default-rtdb.firebaseio.com",
  projectId: "saladeestudo-9126d",
  storageBucket: "saladeestudo-9126d.appspot.com",
  messagingSenderId: "498967411525",
  appId: "1:498967411525:web:1c852e5f87303f40485c2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Pegar o nome da matéria pela URL
const urlParams = new URLSearchParams(window.location.search);
const subject = urlParams.get('subject');
document.getElementById('subject-name').innerText = `Sala de ${subject}`;

// Função para enviar a mensagem
function sendMessage() {
    const message = document.getElementById('message').value;
    if (message.trim()) {
        const chatRef = ref(database, `chats/${subject}`);
        push(chatRef, {
            message: message,
            timestamp: Date.now()
        });
        document.getElementById('message').value = '';
    }
}

// Escutar novas mensagens no Firebase
const chatWindow = document.getElementById('output');
const chatRef = ref(database, `chats/${subject}`);
onChildAdded(chatRef, function(snapshot) {
    const data = snapshot.val();
    const messageElement = document.createElement('p');
    messageElement.textContent = data.message;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
});
