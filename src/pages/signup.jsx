import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from "../firebase";
import { getFirestore, collection, addDoc, getDocs, query, where, getDoc } from 'firebase/firestore';

const auth = getAuth(app);
const firestore = getFirestore(app);

const SignupPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const createUser = async () => {
        const collectionRef = collection(firestore, 'usernames');
        const q = query(collectionRef, where("username", "==", username));
        const q1 = query(collectionRef, where("email", "==", email));
      
        try {
          const snapshot = await getDocs(q);
          const snap2 = await getDocs(q1);
      
          if (snapshot.empty && snap2.empty) {
            const value = await createUserWithEmailAndPassword(auth, email, password);
            alert("Success");
      
            await addDoc(collection(firestore, 'usernames'), {
              username: username,
              email: email,
            });
          } else {
            alert("Username or Email not available");
          }
        } catch (err) {
          alert("Invalid Email-Id or Password weak");
          console.error(err);
        }
      };
      

    

    return (
        <div className="signUp-page">
            <h1>Sign-Up Page</h1>
            <label>Username</label>
            <input
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                type="username"
                required
                placeholder="Enter your username here"
            />
            <label>Email</label>
            <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                required
                placeholder="Enter your email here"
            />
            <label>Password</label>
            <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                required
                placeholder="Enter your password"
            />
            <button onClick={createUser}>Sign Up</button>
        </div>
    );
};

export default SignupPage;
