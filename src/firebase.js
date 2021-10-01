import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCsfMLv9VduTfSvE-A6bvXAWd9_XGK2kWI",
    authDomain: "fb-clone-8dc4e.firebaseapp.com",
    projectId: "fb-clone-8dc4e",
    storageBucket: "fb-clone-8dc4e.appspot.com",
    messagingSenderId: "490131030631",
    appId: "1:490131030631:web:5f52d7ba4a6cc7b88acac2",
    measurementId: "G-9QTVYF068F"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;