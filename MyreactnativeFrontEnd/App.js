import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DataEnter from './Components/DataEnter'

export default function App() {
 
  const Stack=createStackNavigator();

  
  return (
     
<NavigationContainer>

    <Stack.Navigator initialRouteName='DataEnter'>
       <Stack.Screen name="DataEnter" component={DataEnter}/>
    </Stack.Navigator>

</NavigationContainer>

  );
}
