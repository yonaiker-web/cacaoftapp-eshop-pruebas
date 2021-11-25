import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, LogBox, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message'

//redux
import { Provider } from 'react-redux';
import store from './Redux/store';

//Context API
import Auth from './Context/store/Auth';

//navegacion
import Main from './Navigators/Main';

//pantallas
import ProductContainer from './Screens/Products/ProductContainer';
import Header from './Shared/Header';

//ignora todos los warning en el desarrollo
//LogBox.ignoreAllLogs(true)

export default function App() {
  return (
    <Auth>
      <Provider store={store}>
        <NavigationContainer>
          <Header/>
          <Main/>
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </NavigationContainer>
      </Provider>
    </Auth>
    
  );
}

const styles = StyleSheet.create({
  
});
