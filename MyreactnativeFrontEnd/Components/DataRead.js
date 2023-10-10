import React, { useState, useEffect } from 'react';
import { View, Text, FlatList,ScrollView,Button,TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'


const handleButtonPress = () => {
    const navigation = useNavigation();
    navigation.navigate('DataEnter');
  };



const DataRead = () => {

    const [data,setData] = useState([]);

    useEffect(()=>{
        axios.get('http://10.0.2.2:3000/MyData').then(res=>{
            setData(res.data)
        }).catch((err)=>{
            console.log("data read error: " + err);
        })
    },[])

  return (
   
    <View>
      
      <FlatList data={data} keyExtractor={(item,index)=>index.toString()}
      renderItem={({item})=>(
      
            <View style={{padding:10,borderRadius:10,marginBottom:10}}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>{item.name}</Text>
                <Text style={{fontSize:20,fontWeight:'bold'}}>{item.age}</Text>
                <Text style={{fontSize:20,fontWeight:'bold'}}>{item.stream}</Text>
      
            </View>
      )}
      
      />

<TouchableOpacity
        style={{
          backgroundColor: 'blue',
          padding: 15,
          borderRadius: 5,
          marginBottom: 10,
          alignItems: 'center',
        }}
        onPress={handleButtonPress}
      >
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Back</Text>
      </TouchableOpacity>
    
    </View>
    
  )
}

export default DataRead;