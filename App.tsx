/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Button, FlatList, Image, SafeAreaView, Text, View} from 'react-native';
import {styles} from './styles';

function App(): JSX.Element {
  let name = 'Hello World';
  const [counter, setCounter] = useState<number>(0);

  const increment = () => {
    setCounter(() => counter + 1);
  };

  const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  // TODO: Add items in the data array dynamically
  // and display it on screen.

  return (
    <SafeAreaView>
      <View style={styles.main}>
        <Text style={styles.title}>{name}</Text>
        <Button title="Click me" onPress={increment} />
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={styles.image}
        />
        <Text style={styles.counter}>I am clicked {counter} time</Text>
        <FlatList
          initialNumToRender={3}
          data={data}
          contentContainerStyle={styles.listStyles}
          renderItem={({item}) => (
            <Text style={styles.listText} key={item}>
              {item}
            </Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
