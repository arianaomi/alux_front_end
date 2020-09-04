import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBTT2RIRZ-1pSff0nO9gxGzhNSQwxyh57I',
  authDomain: 'aluxapp-7c84e.firebaseapp.com',
  databaseURL: 'https://aluxapp-7c84e.firebaseio.com',
  projectId: 'aluxapp-7c84e',
  storageBucket: 'aluxapp-7c84e.appspot.com',
  messagingSenderId: '347606696881',
  appId: '1:347606696881:web:74f5d96ecdfe60c031f390'
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase
