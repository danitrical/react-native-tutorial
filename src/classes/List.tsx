/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, FlatList, SafeAreaView, Text, View} from 'react-native';
import {styles} from './styles';

function List({navigation}: any): JSX.Element {
  let name = 'List';

  const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  // TODO: Add items in the data array dynamically
  // and display it on screen.

  return (
    <SafeAreaView>
      <View style={styles.main}>
        <Text style={styles.title}>{name}</Text>
        <Button
          title="Move to Input"
          onPress={() => navigation.navigate('Input')}
        />
        <Button
          title="Move to Section List"
          onPress={() => navigation.navigate('SectionList')}
        />
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

export default List;
