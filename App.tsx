/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Practice1 from './src/classes/Practice1';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import List from './src/classes/List';
import Input from './src/classes/Input';
import RefreshScroll from './src/classes/RefreshScroll';
import SectionListComponent from './src/classes/SectionList';
// import Break from './src/classes/Break';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Break" component={Break} /> */}
        <Stack.Screen name="LIST" component={List} />
        <Stack.Screen name="HOME" component={Practice1} />
        <Stack.Screen name="Input" component={Input} />
        <Stack.Screen name="Refresh" component={RefreshScroll} />
        <Stack.Screen name="SectionList" component={SectionListComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
