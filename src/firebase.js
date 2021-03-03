import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyARIJkc3y1p88UEJtiaGkt8RAqLJIc_AYA",
    authDomain: "slack-clone-52e93.firebaseapp.com",
    projectId: "slack-clone-52e93",
    storageBucket: "slack-clone-52e93.appspot.com",
    messagingSenderId: "77672505886",
    appId: "1:77672505886:web:31ce922547b17dd543440f",
    measurementId: "G-JX6D246HPT"
};

const firebaseApp= firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;