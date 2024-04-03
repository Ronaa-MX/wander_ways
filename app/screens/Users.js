import { FIREBASE_DB } from "../../FirebaseConfig";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { doc, setDoc, addDoc, collection, Timestamp } from "firebase/firestore"; 
const saveLocation = async (city, country, region, street, userId) => {
   
  try {
    const docRef = await addDoc(collection(FIREBASE_DB, "visited_places" ), {
        userId: userId,
        city: city,
        country: country,
        region: region, 
        street: street,
        time: Timestamp.now()
    });
    console.log("Location saved successfully");
  } catch (error) {
    console.error("Error saving location: ", error);
  }
};

export {saveLocation};
