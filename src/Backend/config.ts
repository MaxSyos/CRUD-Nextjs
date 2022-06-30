import * as firebase from 'firebase/app'
import { initializeApp } from "firebase/app";
import 'firebase/firestore'

if(!firebase.getApps.length) {
    try{
        firebase.initializeApp({
            apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ,
            authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN ,
            projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ,
        })
    } catch (error) {
        console.log('Inicialização do Firebase admin com erro', error.stack);
    }
}


export default firebase