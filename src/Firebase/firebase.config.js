import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjA3zpZh5Qf-iYuv0GM2Xs6po3ONTz1bs",
  authDomain: "tiendainelar.firebaseapp.com",
  projectId: "tiendainelar",
  storageBucket: "tiendainelar.appspot.com",
  messagingSenderId: "317780052574",
  appId: "1:317780052574:web:0919b13558caf421f202cf",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
