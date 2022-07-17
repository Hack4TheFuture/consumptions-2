import React, { useEffect, useState } from "react";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, } from "firebase/firestore";
import { getDatabase, set, get, ref, child, onValue, push, onDisconnect } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBRBcUL2BfkMd03vab0sMuHqpHXnsHIh1s",
    authDomain: "hoody-7541f.firebaseapp.com",
    databaseURL: "https://hoody-7541f-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "hoody-7541f",
    storageBucket: "hoody-7541f.appspot.com",
    messagingSenderId: "273238032018",
    appId: "1:273238032018:web:20f0e2ede9d40bf894f04b"
};
const app = initializeApp(firebaseConfig);
const dbRef = getDatabase(app)

function Chat(params) {
    const [message, setMessage] = useState([])
    const [sendMessage, setSendMessage] = useState([])

    //write
    const writeToDatabase = async () => {

        await set(push(child(ref(dbRef), 'chatroom'), 'user1'), { username: 'javad', text: message });
        setMessage('')
    }
     
    useEffect(() => {
        setMessage([])
        //read
        get(ref(dbRef, 'user1')).then((snapshot) => {
            if (snapshot.val()) {
                console.log(snapshot.val())

                const data = snapshot.val()
                let number = snapshot.valueOf().size

                const dataArray = Object.values(data)

                console.log('data array:', dataArray)
                setSendMessage([])
                dataArray.map(txt => {
                    console.log(txt.text);
                    setSendMessage((old) => [...old, txt.text]);
                })

                sendMessage.map((txt, i) => {
                    console.log(i, txt);
                })

                console.log(sendMessage)
                console.log('data:', Object.values(data)[number - 1].text)
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });

        console.log('array of send Message: ', sendMessage.map((txt => txt)))
    }, [])

    

    // setInterval(function () { getMessage() });
    const handleMessage = async (e) => {

        setMessage(e)
    }

    //write
    

    //read
    //update


    return (

        <aside className="chatBox">
            <div className="message">
                <table>
                    {
                        sendMessage.map((text, i) => {
                            return (
                                <tr id={i} key={i}>
                                    <td>
                                        {text}
                                    </td>
                                </tr>
                            )
                        }
                        )
                    }
                </table>
            </div>
            <div id="send">
                <input type="text" placeholder="Send message"
                    onChange={(e) => handleMessage(e.target.value)} />
                <button onClick={writeToDatabase}><i className="uil uil-message"></i>send</button>
            </div>
        </aside>
    )


}

export default Chat;