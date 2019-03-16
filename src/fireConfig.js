import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import credentials from './credentials-fire';

const config = {
    apiKey: credentials.apiKey,
    authDomain: credentials.authDomain,
    databaseURL:credentials.databaseURL,
    projectId: credentials.projectId,
    storageBucket: credentials.storageBucket,
    messagingSenderId: credentials.messagingSenderId
  };
const fire = firebase.initializeApp(config);

export const fb = firebase; // houses firebase auth providers like firebase.EmailAuthProvider()
export const auth = fire.auth();
export const db = fire.firestore();


// https://firebase.google.com/docs/cli/

// db.collection('test').get().then(snapshot => {
//     snapshot.docs.forEach(doc => {
//         console.log(doc.data())
//     })
// })

// .add()
// .set() // mutate any data in a collection data item
// .update() // overwrite all data in a collection data item
// .delete() // you will of course want to grab by doc.id
// .where() // for querys 
// .where('name', '===', 'bob').get() // example
// .orderBy('name') // order
// .where('age', '>', '18').orderBy('name').get() // example

// db.collection('test').doc('h2rJ1gIRNBaEtZy6jKtA').delete();

// db.collection('test').onSnapshot(snapshot => {
//     let changes = snapshot.docChanges();
//     changes.forEach(change => {
//     console.log(change.doc.data());
//         if(change.type === 'added'){
//             // doc was added to test collection
//             // so do something  
//             console.log('change.doc.id');
//         } else if (change.type === 'removed') {
//             // doc was removed from collection
//             // so do something 
//             console.log('change.doc.id');  
//         }
//     })
// })