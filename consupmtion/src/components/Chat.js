import React, { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDqW3wPCT3DWfTjUbnyCCdiesaH0DQRgOg",
    authDomain: "consumption-f2c32.firebaseapp.com",
    projectId: "consumption-f2c32",
    storageBucket: "consumption-f2c32.appspot.com",
    messagingSenderId: "1095180772152",
    appId: "1:1095180772152:web:1a38dfa85b6be3213b57cd",
    measurementId: "G-DW4NTN6X7Y"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  





function Chat(params) {
    useEffect(()=>{
        console.log(db)
    },[])
    return (
        <div>chat</div>
    )
}

export default Chat;