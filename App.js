import React, { useContext } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import { ThemeProvider, ThemeContext } from './src/context/Theme';  // Adjust the path

export default function App() {


  return (
    <ThemeProvider>
      <WrapperComponent />
    </ThemeProvider>
  );
}

function WrapperComponent() {
  const Stack = createStackNavigator();
  const { isDark } = useContext(ThemeContext);
  const theme = isDark ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
