import firebase from "firebase/app";
import "firebase/auth"; //so that we can use all the authentication function



const app = firebase.initializeApp({
    apiKey: "AIzaSyDbVl5-DT2f9YlGSWvrtf5mCHuSTN9Xz6g",
    authDomain: "authreact-7d0c3.firebaseapp.com",
    databaseURL: "https://authreact-7d0c3-default-rtdb.firebaseio.com",
    projectId: "authreact-7d0c3",
    storageBucket: "authreact-7d0c3.appspot.com",
    messagingSenderId: "357259052231",
    appId: "1:357259052231:web:889b6bf90f853071d72ae2"
})

export const auth = app.auth() //it is a function that gives use authentication instances
export default app