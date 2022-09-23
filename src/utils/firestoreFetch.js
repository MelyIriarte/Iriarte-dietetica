import { query , orderBy, where , collection , getDocs } from '@firebase/firestore';
import { doc , getDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

export const firestoreFetch = async (idCategoria) => {
    let q;
    if (idCategoria) {
        q = query(collection(db, "products"), where('categoria', '==', idCategoria));
    } else {
        q = query(collection(db, "products"), orderBy('titulo'));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;
}

export const firestoreFetchOne = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
          id: id,
          ...docSnap.data()
      }
    } else {
      console.log("No such document!");
    }
}