import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
    getFirestore,
    collection,
    getDocs,
    doc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Paste your firebaseConfig here
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const select = document.getElementById("playerSelect");

const players = [];

const snapshot = await getDocs(collection(db, "players"));

snapshot.forEach(d => {
    players.push({
        id: d.id,
        ...d.data()
    });

    const option = document.createElement("option");
    option.value = d.id;
    option.textContent = d.data().name;

    select.appendChild(option);
});

document.getElementById("saveBtn").onclick = async () => {

    const id = select.value;
    const points = Number(document.getElementById("points").value);

    await updateDoc(doc(db, "players", id), {
        points: points
    });

    alert("Saved!");
};
