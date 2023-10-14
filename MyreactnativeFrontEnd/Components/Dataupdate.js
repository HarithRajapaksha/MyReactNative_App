import React, { useState,useEffect } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native'
import { useRoute } from '@react-navigation/native';
import axios from 'axios';


export default function Dataupdate() {
    const route = useRoute();
    const UpdateId=route.params.id;

    const [Name,setName]=useState('');
    const [Age,setAge]=useState('');
    const [Stream,setStream]=useState('');
 

    const onePersonData=()=>{
      axios.get(`http://10.0.2.2:3000/MyData/oneUser/${UpdateId}`).then((res)=>{
      
        setName(res.data.name);
        setAge(res.data.age);
        setStream(res.data.stream);
       
      }).catch((err)=>{
        console.log("data read error: " + err);
      })
    }

       useEffect(()=>{
      onePersonData()
    },[UpdateId])

     const updateData=()=>{

      const data={
        name:Name,
        age:Age,
        stream:Stream
      }

      try {
        axios.put(`http://10.0.2.2:3000/MyData/update/${UpdateId}`,data).then((res)=>{ 
          
        console.log("data update success");
      })

      } catch (error) {
        console.log("Data update error"+error)
      }
     }


  return (
      <View style={{flex:1,backgroundColor:"yellow"}}>
        
        <Text style={{textAlign:'center',marginTop:10,fontSize:30,fontWeight:'bold'}}>Update Your Data</Text>
        
        <View style={{marginTop:5,marginLeft:10,marginRight:10}}>
    
          <TextInput  style={{backgroundColor:"white",height:60,marginTop:120,borderRadius:20,paddingLeft:20,fontWeight:"bold"}} value={Name} onChangeText={(text)=>setName(text)}/>
          
      
    
          <TextInput style={{backgroundColor:"white",height:60,marginTop:40,borderRadius:20,paddingLeft:20,fontWeight:"bold"}} value={Age} onChangeText={(text)=>setAge(text)} />
    
        
    
          <TextInput  style={{backgroundColor:"white",height:60,marginTop:40,borderRadius:20,paddingLeft:20,fontWeight:"bold"}} value={Stream} onChangeText={(text)=>setStream(text)}/>
    
          </View>
             <View style={{marginTop:80,marginLeft:100,marginRight:100,backgroundColor:"red",height:40,borderRadius:20}}>
             <TouchableOpacity onPress={updateData}>
                <Text style={{textAlign:'center',fontWeight:'bold',fontSize:20,paddingTop:5}}>Update Data</Text>
             </TouchableOpacity>
    
             </View>

      </View>
  )
}