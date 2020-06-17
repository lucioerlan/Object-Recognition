import firebase from 'firebase';

// YOU CONFIGS FIREBASE
const firebaseConfig = {
  apiKey: 'AIzaSyByfgKiisXwdgHHV1A6e3QFB3CAJAQk8-U',
  authDomain: 'elated-oxide-275411.firebaseapp.com',
  databaseURL: 'https://elated-oxide-275411.firebaseio.com',
  projectId: 'elated-oxide-275411',
  storageBucket: 'elated-oxide-275411.appspot.com',
  messagingSenderId: '825197386539',
  appId: '1:825197386539:web:2486b6eabc4bc06caf836e',
  measurementId: 'G-GPZ9M89RDK',
};

const app = firebase.initializeApp(firebaseConfig);

export const db = app.database();

export let users = [];
db.ref()
  .child('users')
  .orderByChild('id')
  .on('child_added', snap => {
    users = snap.val();
  });
