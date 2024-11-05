import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAsBviXoGWXuWE7dg6UE8z4cl4tfI9t3Pg",
    authDomain: "login-auth-7a31b.firebaseapp.com",
    projectId: "login-auth-7a31b",
    storageBucket: "login-auth-7a31b.firebasestorage.app",
    messagingSenderId: "801395928203",
    appId: "1:801395928203:web:b6a19ecf21763287ba788e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)    