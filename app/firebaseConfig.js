// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCLsEj16Bb36PxkiT7gp6fBbBM1KkL3UHY",
//     authDomain: "home-c4dad.firebaseapp.com",
//     databaseURL:
//         "https://home-c4dad-default-rtdb.europe-west1.firebasedatabase.app/",
//     projectId: "home-c4dad",
//     storageBucket: "home-c4dad.appspot.com",
//     messagingSenderId: "883427653084",
//     appId: "1:883427653084:web:cefd82d68657e2dd678b19",
//     measurementId: "G-TBCYXJ93DP",
// };

const firebaseConfig = {
    apiKey: "AIzaSyBbdv-RtbsyWh1HbR61I6uiDtUYoI-bBR4",
    authDomain: "smart-home-v1-c480f.firebaseapp.com",
    databaseURL:
        "https://smart-home-v1-c480f-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "smart-home-v1-c480f",
    storageBucket: "smart-home-v1-c480f.appspot.com",
    messagingSenderId: "240445897558",
    appId: "1:240445897558:web:07b2a2ffcb4c0aa171b4f7",
    measurementId: "G-KGB5EDWZCC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
