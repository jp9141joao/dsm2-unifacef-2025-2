import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from './src/pages/HomePage';
import UserPage from './src/pages/UserPage';
import TeamPage from './src/pages/TeamPage';

const Stack = createNativeStackNavigator();

export default function App() {

  return (

    <NavigationContainer>

      <StatusBar style="auto" />

      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerTitleAlign: 'center' }}
      >

        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: 'Inicio' }}
        />

        <Stack.Screen
          name="UserPage"
          component={UserPage}
          options={{ title: 'Meus Compromissos' }}
        />

        <Stack.Screen
          name="TeamPage"
          component={TeamPage}
          options={{ title: 'Compromissos da Equipe' }}
        />

      </Stack.Navigator>

    </NavigationContainer>

  );
}
