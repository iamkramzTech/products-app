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
  const API_URL = 'https://dummyjson.com/products';
  //const API_URL = "http://192.168.254.154:7113/api/products";
 
  // const api = axios.create({
  //  baseURL:'https://192.168.254.121:7113/api'
  //  //baseURL:'https://localhost:7113/api'
  // })
  const [products, setProducts] = useState([]);

  
  // useEffect(() => {
  //   axios.get("https://192.168.254.154:7113/api/products").then((response) => {
  //     setProducts(response.data);
  //   });
  // }, []);

  useEffect(()=>{
    axios.get(API_URL).then((response)=>{
        setProducts(response.data.products);
    });

  },[]);

 //console.log(products);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Making API Requests</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item: product }) => (
          <View style={styles.item}>
             <Text>{product.name}</Text>
            <Text>{product.title}</Text>
            
            <Text>$ {product.price}</Text>
            {/* <Text>{product.description}</Text> */}
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

