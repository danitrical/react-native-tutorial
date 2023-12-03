/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {styles} from './styles';

function Break(): JSX.Element {
  let name = 'Break till 5:30PM';

  return (
    <SafeAreaView>
      <View style={styles.main}>
        <Text style={styles.title}>{name}</Text>
      </View>
    </SafeAreaView>
  );
}

export default Break;
