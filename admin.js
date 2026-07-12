import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getFirestore,
    collection,
    getDocs,
    doc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

import {
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

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
const auth = getAuth(app);

const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

const select = document.getElementById("playerSelect");
const points = document.getElementById("points");
const saveBtn = document.getElementById("saveBtn");

loginBtn.onclick = async () => {
    try {

        await signInWithEmailAndPassword(
            auth,
            email.value,
            password.value
        );

        alert("Login successful!");

    } catch (e) {
        alert(e.message);
    }
};

onAuthStateChanged(auth, async (user) => {

    if (!user) return;

    loginBtn.style.display = "none";
    email.style.display = "none";
    password.style.display = "none";

    const snapshot = await getDocs(collection(db, "players"));

    snapshot.forEach(d => {

        const option = document.createElement("option");

        option.value = d.id;
        option.textContent = d.data().name;

        select.appendChild(option);

    });

});

saveBtn.onclick = async () => {

    const id = select.value;

    await updateDoc(doc(db, "players", id), {
        points: Number(points.value)
    });

    alert("Saved!");

};
    await updateDoc(doc(db, "players", id), {
        points: points
    });

    alert("Saved!");
};
