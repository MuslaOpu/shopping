import { useEffect, useState } from 'react'
import {db} from '../firebase/firebase'
import { collection, onSnapshot } from 'firebase/firestore'

const useGetData = (collectionName) => {

    const [data, setData] = useState([]);
    const collectionRef = collection(db, collectionName);

    useEffect(() => {
        const getData = async() => {
            // .... Firebase firestore realtime data update
            await onSnapshot(collectionRef, (snapshot) =>{
                setData(snapshot.docs.map(doc=>({...doc.data(), id: doc.id})))
            });

        };
        getData();
    },[collectionRef]);

  return{ data};
};

export default useGetData