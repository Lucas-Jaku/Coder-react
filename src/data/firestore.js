import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {  addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';
import products from "./products";


const firebaseConfig = {
  apiKey: "AIzaSyCYFB1TVO5kPePprB7U0U8Il1gS5R2DqB0",
  authDomain: "coder-react-6d3cd.firebaseapp.com",
  projectId: "coder-react-6d3cd",
  storageBucket: "coder-react-6d3cd.firebasestorage.app",
  messagingSenderId: "859202181564",
  appId: "1:859202181564:web:d2bc0c19120e5e4a23f3b9",
  measurementId: "G-GYPPN8T83W"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);


// * Retornar todos los documentos
// * fetch -> data.json() -> data
// ? snapshot -> docs[] -> doc.data() -> data...

export async function getData(){
  const collectionRef = collection(db, "products");
  const productsSnapshot = await getDocs(collectionRef)
  const docs = productsSnapshot.docs;
  const dataDocs = docs.map( item => {
    return ({ ...item.data(), id: item.id})    
  })
  
  return dataDocs;
}


export async function getItemData(itemID){
  const documentRef = doc(db, "products", itemID);
  const docSnapshot = await getDoc(documentRef)
  console.log(docSnapshot)
  const docData = docSnapshot.data()
  const docDataWithID = { ...docData, id: docSnapshot.id}
  return docDataWithID;

/*   if (docSnapshot.exists()) {
    return docDataWithID;
  } else {
    throw new Error("Documento no existe")
  } 
 */
}

export async function getCategoryData(categoryID){
  const collectionRef = collection(db, "products");
  const q = query(collectionRef, where("category", "==", categoryID))
  const productsSnapshot = await getDocs(q)

  const docs = productsSnapshot.docs;
  const dataDocs = docs.map( item => {
    return ({ ...item.data(), id: item.id})    
  })
  
  return dataDocs;
}

export async function createBuyOrder(buyOrderData){
  const collectionRef = collection(db, "orders")

  const docRef = await addDoc(collectionRef, buyOrderData);

  alert(`Gracias por tu compra! Tu ticket id es: ${docRef.id}`)
}

export async function exportProductsToFirestore(){
  
  // * for... of -> ok con async
  for(let item of products){
    delete item.id;
    const docRef = await addDoc( collection(db, "products"), item )     
    console.log("Doc creado:", docRef.id)
  }  
}