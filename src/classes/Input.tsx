import React, {FC, useState} from 'react';
import {Alert, Button, TextInput, View} from 'react-native';
import {styles} from './styles';
import SwitchCompo from './SwitchCompo';

const Input: FC = ({navigation}: any) => {
  const [value, setValue] = useState('Danish');

  const onChangeText = (input: string) => setValue(input);
  const onSubmit = () => Alert.alert(`${value} is saved`);

  return (
    <View>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        placeholder="Please Enter Name"
      />
      <SwitchCompo />
      <Button title="Submit" onPress={onSubmit} />
      <Button
        title="Move to Refresh Control"
        onPress={() => navigation.navigate('Refresh')}
      />
    </View>
  );
};

export default Input;
