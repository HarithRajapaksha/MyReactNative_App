import React, { useState, useEffect } from 'react';
import { View, Text, FlatList,ScrollView,Button,TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import Icon  from 'react-native-vector-icons/FontAwesome';


const DataRead = () => {
    const navigation = useNavigation();
    const [data,setData] = useState([]);


   const dataFetch=()=>{
         
    axios.get('http://10.0.2.2:3000/MyData/').then(res=>{
      setData(res.data)
  }).catch((err)=>{
      console.log("data read error: " + err);
  })

    }

   useEffect(()=>{
       dataFetch();
   },[])

    const handleButtonPress = () => {    
      navigation.navigate('DataEnter');
    };

  const deleteData=async(id)=>{
    console.log(id);
    try {
      await axios.delete(`http://10.0.2.2:3000/MyData/delete/${id}`);
      setData(prevData=>prevData.filter(item=>item._id !==id))
    } catch (error) {
      alert('Data are not deleted'+error.message)
    }
  }

  const updateData = (id) => {
       navigation.navigate('Dataupdate',{id});
  }

  return (
   
    <View>
      
      

   <View style={{flexDirection:'row'}}>

   <View style={{height:650}}>

<FlatList data={data} keyExtractor={(item,index)=>index.toString() }
renderItem={({item})=>(

      <View style={{padding:10,borderRadius:10,marginBottom:10,borderWidth:1,marginLeft:10,marginRight:10}}>
          <Text style={{fontSize:20,fontWeight:'bold'}}>{item.name}</Text>
          <Text style={{fontSize:20,fontWeight:'bold'}}>{item.age}</Text>
          <Text style={{fontSize:20,fontWeight:'bold'}}>{item.stream}</Text>


          <TouchableOpacity style={{backgroundColor:'yellow',
          fontSize:15,fontWeight:'bold',marginLeft:260,borderRadius:40,alignItems:'center',width:80,marginBottom:10}} onPress={()=>updateData(item._id)}> 
         
          <View style={{flexDirection:'row'}}>
             
            <Icon name='question-circle' size={20}/>
            <Text style={{paddingLeft:10,fontWeight:'bold'}}> Update</Text>
          </View>
         
         </TouchableOpacity>

         
         <TouchableOpacity style={{backgroundColor:'red',
          fontSize:15,fontWeight:'bold',marginLeft:260,borderRadius:40,alignItems:'center',width:80}} onPress={()=>deleteData(item._id)}> 
         
          <View style={{flexDirection:'row'}}>
             
            <Icon name='trash' size={20}/>
            <Text style={{paddingLeft:10,fontWeight:'bold'}}> Delete</Text>
          </View>
         
         </TouchableOpacity>
      </View>
)}

/>

</View>
</View>

<View style={{alignItems:'center'}}>

<TouchableOpacity
  style={{
    backgroundColor: 'blue',
    marginTop:8,
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width:'50%'
  }}
  onPress={handleButtonPress}
>
  <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Back</Text>
</TouchableOpacity> 

</View>
 
    </View>
    
  )
}

export default DataRead;