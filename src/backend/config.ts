import firebase from "firebase/app"
import "firebase/firebase-storage"


if(!firebase.apps.length){
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_MAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_DOMAIN


    })
}
export default firebase