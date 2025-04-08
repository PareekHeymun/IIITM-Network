import { initializeApp } from 'firebase/app';
const firebaseConfig = {

  apiKey: "",

  authDomain: "iiitm-network-14d88.firebaseapp.com",

  databaseURL: "https://iiitm-network-14d88-default-rtdb.firebaseio.com",

  projectId: "iiitm-network-14d88",

  storageBucket: "iiitm-network-14d88.firebasestorage.app",

  messagingSenderId: "1096989227432",

  appId: "1:1096989227432:web:5567aba851ae100ac3059d"

};


const app = initializeApp(firebaseConfig);

export default app;