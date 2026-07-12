import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getFirestore,
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCThlUG-KNZcRTsUL_7YBDehWNznbOahXs",
    authDomain: "test-e2d46.firebaseapp.com",
    databaseURL: "https://test-e2d46-default-rtdb.firebaseio.com",
    projectId: "test-e2d46",
    storageBucket: "test-e2d46.firebasestorage.app",
    messagingSenderId: "673186724338",
    appId: "1:673186724338:web:5d8bafac4879d395e8536b",
    measurementId: "G-5X4Q4062V1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const list = document.getElementById("players");

async function loadPlayers() {
    const snapshot = await getDocs(collection(db, "players"));

    snapshot.forEach(doc => {
    const data = doc.data();

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${data.name}</span>
        <span class="points">${data.points} pts</span>
    `;

    list.appendChild(li);
    });
}

loadPlayers();
