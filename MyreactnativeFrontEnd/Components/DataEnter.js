import React, { useEffect, useState } from 'react'
import {Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import axios from 'axios'
import { NetworkInfo } from "react-native-network-info";

export default function DataEnter() {

  const[name,setName]=useState('');
  const[stream,setStream]=useState('');
  const[age,setAge]=useState('');
  
  

  const UserData={
    name:name,
    stream:stream,
    age:age
  }


  const handleDataSubmit = async () => {
    try {
      const response = await axios.post(`http://10.0.2.2:3000/MyData/add`, UserData);
      console.log("Data Added", response);
    } catch (error) {
      console.log("Data added error", error);
    }
  };
    
  return (
    
    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 16,backgroundColor:'#FFFF00'}}>

    <View style={{paddingBottom:10,paddingHorizontal:10.5}}>
      <Text style={{fontSize:20,fontWeight:'bold'}}>Enter Your Name -</Text>
    </View>
  <TextInput
    style={{
      backgroundColor: 'white',
      borderRadius: 20,
      height: 40,
      marginBottom: 10,
      paddingHorizontal: 10,
      fontSize: 20, // Small text size
    }}
    placeholder="Name"
    onChangeText={(name)=>setName(name)}
  />

<View style={{paddingTop:20,paddingHorizontal:10.5,paddingBottom:10}}>

      <Text style={{fontSize:20,fontWeight:'bold'}}>Enter Age -</Text>

    </View>
  <TextInput
    style={{
      backgroundColor: 'white',
      borderRadius: 20,
      height: 40,
      marginBottom: 10,
      paddingHorizontal: 10,
      fontSize: 20, // Default text size
    }}
    placeholder="Age"
    onChangeText={(age)=>setAge(age)}
  />

<View style={{paddingBottom:10,paddingTop:10,paddingHorizontal:10.5}}>

      <Text style={{fontWeight:'bold',fontSize:20}}> subject stream -</Text>
    </View>

  <TextInput
    style={{
      backgroundColor: 'white',
      borderRadius: 20,
      height: 40,
      marginBottom: 10,
      paddingHorizontal: 10,
      fontSize: 20, // Default text size
    }}
    placeholder="Subject Stream"
    onChangeText={(subjectStream)=>setStream(subjectStream)}
  />

  <View style={{paddingTop:40,borderRadius:20}}>
  
       <TouchableOpacity style={{backgroundColor:'#FF0000',alignItems:'center',borderRadius:10,height:40}} onPress={handleDataSubmit}>
        <Text style={{fontWeight:'bold',fontSize:30}}>
            SUBMIT
        </Text>
       </TouchableOpacity>

  </View>
  
    
  </View>

  )
}

