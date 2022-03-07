import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';

const config = {
  apiKey: 'AIzaSyDMmz51ZW5RY4aTKgo6jVjnnwMPHPk6PE8',
  authDomain: 'chat-web-app-2483d.firebaseapp.com',
  projectId: 'chat-web-app-2483d',
  storageBucket: 'chat-web-app-2483d.appspot.com',
  messagingSenderId: '1046704867289',
  appId: '1:1046704867289:web:ed1bab125077d77fbafbc8',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();

export const messaging = firebase.messaging.isSupported()
  ? app.messaging()
  : null;

if (messaging) {
  messaging.usePublicVapidKey(
    'BBmWpCgFy1NLDpV-1bP82Mpj4ldyEjNN2k-o3mKFnTAUiVSDQJLewkMBN00J8gxnTSFBO1bMY1Hxt1K31I1kPFE'
  );

  messaging.onMessage(data => {
    console.log(data);
  });
}
