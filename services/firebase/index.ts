import firebase from 'firebase/app';
import 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyBaJ1xhAEMx8jb4QMbvq8CTD3JqscDwdRE',
  authDomain: 'my-site-f00ec.firebaseapp.com',
  projectId: 'my-site-f00ec',
  storageBucket: 'my-site-f00ec.appspot.com',
  messagingSenderId: '830140754077',
  appId: '1:830140754077:web:9147ef52b15fd138a98c74',
  measurementId: 'G-46LSNJRKB6',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}
const auth = firebase.auth;
export { auth };
