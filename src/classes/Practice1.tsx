/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Button, Image, SafeAreaView, Text, View} from 'react-native';
import {styles} from './styles';

function Practice1({navigation}: any): JSX.Element {
  let name = 'Hello World';
  const [counter, setCounter] = useState<number>(0);

  const increment = () => {
    setCounter(() => counter + 1);
  };

  return (
    <SafeAreaView>
      <View style={styles.main}>
        <Text style={styles.title}>{name}</Text>
        <Button title="Click me" onPress={increment} />
        <Button
          title="Move to List"
          onPress={() => navigation.navigate('LIST')}
        />
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={styles.image}
        />
        <Text style={styles.counter}>I am clicked {counter} time</Text>
      </View>
    </SafeAreaView>
  );
}

export default Practice1;
