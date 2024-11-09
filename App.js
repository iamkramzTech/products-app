import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

export default function App() {

  // const headers = {
  //   "Content-Type": "application/json",
  //   Authorization: apiKey,
  // };
  //URL API EndPoints
  const API_URL = "https://localhost:7113/api/products"
  //const API_URL = "https://192.168.254.121:7113/api/";
 
  // const api = axios.create({
  //  baseURL:'https://192.168.254.121:7113/api'
  //  //baseURL:'https://localhost:7113/api'
  // })
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://localhost:7113/api/products").then((response) => {
      setProducts(response.data);
    });
  }, [products]);
  // useEffect(() => {
  //   fetchData();
  // }, [products]);

  // const fetchData = async () => {

  //   try {
  //     // const response = await api.get('/products',//{
  //     // //   method:"GET",
  //     // //   headers:{
  //     // //     "Content-Type":"application/json",
  //     // //   },
  //     // // });
  //     // );
  //     const response = await axios.get(API_URL);
  //     setProducts(response.data);
  //     console.log(response.data);
      
  //   }
  //   catch(error)
  //   {
  //     console.error(`Error Fetching Data: ${error}`);
      
  //   }
  // }
  console.log(products);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Making API Requests</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:70,
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    marginVertical: 8,
    borderRadius: 8,
  },
});

