import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DataEnter from './Components/DataEnter'
import DataRead from './Components/DataRead';
import Dataupdate from './Components/Dataupdate';

export default function App() {
 
  const Stack=createStackNavigator();

  
  return (
     
<NavigationContainer>

    <Stack.Navigator initialRouteName='DataEnter'>
       <Stack.Screen name="DataEnter" component={DataEnter}/>
       <Stack.Screen name="DataRead" component={DataRead}/>
       <Stack.Screen name="Dataupdate" component={Dataupdate}/>
    </Stack.Navigator>

</NavigationContainer>

  );
}
