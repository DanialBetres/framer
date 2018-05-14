import * as firebase from 'firebase';

const config = {
  /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: 'AIzaSyDKvfdwtjEa6qjnE1dsOvl2YkedtQpq7Dg',
  authDomain: 'framer-8c246.firebaseapp.com',
  databaseURL: 'https://framer-8c246.firebaseio.com',
  projectId: 'framer-8c246',
  storageBucket: 'framer-8c246.appspot.com',
  messagingSenderId: '352758772816'
};

export default firebase.initializeApp(config);
