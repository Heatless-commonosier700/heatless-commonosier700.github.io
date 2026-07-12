import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getFirestore,
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.firebasestorage.app",
    messagingSenderId: "XXXXXXXX",
    appId: "XXXXXXXX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const list = document.getElementById("players");

async function loadPlayers() {
    const snapshot = await getDocs(collection(db, "players"));

    snapshot.forEach(doc => {
        const data = doc.data();

        const li = document.createElement("li");
        li.textContent = `${data.name} - ${data.points} pts`;

        list.appendChild(li);
    });
}

loadPlayers();
