import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { AuthProvider } from './src/Contexts/authContext';
import Roots from './src/navigations/Roots';



const App = () => {


  return (
    <AuthProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Roots />
        </NavigationContainer>
      </Provider>
    </AuthProvider>
  );
};
export default App;
