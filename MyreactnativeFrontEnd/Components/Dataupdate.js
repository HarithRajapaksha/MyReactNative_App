import React, { useState,useEffect } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native'
import { useRoute } from '@react-navigation/native';


export default function Dataupdate() {
    const route = useRoute();
    const UpdateId=route.params.id;

  return (
      <View style={{flex:1,backgroundColor:"yellow"}}>
        
        <Text style={{textAlign:'center',marginTop:10,fontSize:30,fontWeight:'bold'}}>Update Your Data</Text>
        
        <View style={{marginTop:5,marginLeft:10,marginRight:10}}>
    
          <TextInput placeholder='Name' style={{backgroundColor:"white",height:60,marginTop:120,borderRadius:20}}/>
          
      
    
          <TextInput placeholder='Age' style={{backgroundColor:"white",height:60,marginTop:40,borderRadius:20}}/>
    
        
    
          <TextInput placeholder='Stream' style={{backgroundColor:"white",height:60,marginTop:40,borderRadius:20}}/>
    
          </View>
             <View style={{marginTop:80,marginLeft:100,marginRight:100,backgroundColor:"red",height:40,borderRadius:20}}>
             <TouchableOpacity>
                <Text style={{textAlign:'center',fontWeight:'bold',fontSize:20,paddingTop:5}}>Update Data</Text>
             </TouchableOpacity>
    
             </View>

      </View>
  )
}