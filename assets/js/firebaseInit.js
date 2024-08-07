// firebaseInit.js
import firebaseConfig from './firebaseConfig.js';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Notify that Firebase is ready
window.firebaseReady = true;