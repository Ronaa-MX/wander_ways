import { View, Text, FlatList, StyleSheet, ScrollView, ActivityIndicator  } from "react-native";
import React, { useState, useEffect } from "react";
import { FIREBASE_DB } from "../../FirebaseConfig";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import {
  collection,
  query,
  where,
  docs,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore";

const Progress = () => {
  const [list, setList] = useState([]);

  const q = query(
    collection(FIREBASE_DB, "visited_places"),
    where("userId", "==", FIREBASE_AUTH.currentUser.uid)
  );

  try {
    useEffect(async () => {
        
        const querySnapshot = await getDocs(q);
        const docs = querySnapshot.docs.map((doc) => doc.data());
        setList(docs);
        
      }, []);
  } catch (error) {
    console.log(error)
  } 
    
  
 

  return (
    <>
    <ScrollView  style={styles.container}>
      {list.map((list, index) => {
        return (
          <View key={`location-${index}`} style={styles.item}>
            <Text style={styles.text}>City: {list.city}</Text>
            <Text style={styles.text}>Street: {list.street}</Text>
            <Text style={styles.text}>Region: {list.region}</Text>
            <Text style={styles.text}>Date: {list.time.toDate().toString()}</Text>
          </View>
        );
      })}
    </ScrollView >
    </>
  );
  
};

const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
    item: {
      marginBottom: 20,
      padding: 10,
      backgroundColor: '#f9f9f9',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#ddd',
    },
    text: {
      fontSize: 16,
      marginBottom: 5,
    },
  });

export default Progress;
