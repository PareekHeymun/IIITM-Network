import React, {useState} from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase';
import { query, where, getFirestore, collection, getDocs } from 'firebase/firestore';

const auth = getAuth(app);
const firestore = getFirestore(app);

const SigninPage = () => {

    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const signInUser = async () => {
        const collectionRef = collection(firestore, 'usernames');
        const q = query(collectionRef, where("username", "==", username))
        const snapshot = await getDocs(q);
        if(!snapshot.empty){
            signInWithEmailAndPassword(auth, snapshot.docs[0].data().email, password).then(value => {
                alert("success");
    
            }).catch((err) => {
                alert("Wrong Username or Password");
            });
        }
        else{
            alert("Wrong Username");
        }
    }

    return (
        <div>
            <h1>Sign-In Page</h1>
            <label>Username</label>
            <input onChange={e => setUsername(e.target.value)} value={username} type="username" required placeholder='Enter your Username'/>
            <label>Password</label>
            <input onChange={e => setPassword(e.target.value)} value={password} type='password' required placeholder='Enter your Password'/>
            <button onClick={signInUser}>Sign-In</button>
        </div>
    )
}

export default SigninPage;