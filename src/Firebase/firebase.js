import app from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC8tz8PAZEajpHC6tdfS_ow_edH8U_di_k",
    authDomain: "marvel-quiz-75b7b.firebaseapp.com",
    projectId: "marvel-quiz-75b7b",
    storageBucket: "marvel-quiz-75b7b.appspot.com",
    messagingSenderId: "280704258142",
    appId: "1:280704258142:web:cf441ea4800260d49764cf"
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig)
        this.auth = app.auth()
    }

    signUp = (email, password) => {
        this.auth.createUserWithEmailAndPassword(email, password)
    }

    signIn = (email, password) => {
        this.auth.signInWithEmailAndPassword(email, password)
    }

    signOut = () => {
        this.auth.signOut()
    }
}

export default Firebase