import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDCzZlYZYe3RfnzKrfOPu8dh2V200je26w',
  authDomain: 'my-cv-de1f1.firebaseapp.com',
  databaseURL: 'https://my-cv-de1f1.firebaseio.com',
  projectId: 'my-cv-de1f1',
  storageBucket: 'my-cv-de1f1.appspot.com',
  messagingSenderId: '180568620459'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();