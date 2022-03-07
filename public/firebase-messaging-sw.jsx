/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js'
);

firebase.initializeApp({
  apiKey: 'AIzaSyDMmz51ZW5RY4aTKgo6jVjnnwMPHPk6PE8',
  authDomain: 'chat-web-app-2483d.firebaseapp.com',
  projectId: 'chat-web-app-2483d',
  storageBucket: 'chat-web-app-2483d.appspot.com',
  messagingSenderId: '1046704867289',
  appId: '1:1046704867289:web:ed1bab125077d77fbafbc8',
});

firebase.messaging();
