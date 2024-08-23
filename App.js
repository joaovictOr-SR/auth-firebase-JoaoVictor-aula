import React  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RealizarLogin from './screens/RealizarLogin';
import PaginaPrincipal from './screens/PaginaPrincipal';
import Jogadores from './screens/jogadores';
const Stack = createNativeStackNavigator();

const App = () => (

    <NavigationContainer>
        <Stack.Navigator initialRouteName="RealizarLogin">
          <Stack.Screen name="RealizarLogin" component={RealizarLogin}/>
          <Stack.Screen name="PaginaPrincipal" component={PaginaPrincipal}/>
          <Stack.Screen name="Jogadores" component={Jogadores} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default App;