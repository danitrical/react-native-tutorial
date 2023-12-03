import React, {useState} from 'react';
import {Switch, View} from 'react-native';
import {styles} from './styles';

const SwitchCompo = () => {
  const [switchValue, setSwitchValue] = useState(false);

  const toggleSwitch = () => setSwitchValue(!switchValue);
  return (
    <View style={styles.inputCompo}>
      <Switch
        trackColor={{true: '#234253', false: 'red'}} // for android
        thumbColor={switchValue ? 'green' : 'red'}
        ios_backgroundColor={switchValue ? 'blue' : 'yellow'}
        value={switchValue}
        onValueChange={toggleSwitch}
      />
    </View>
  );
};

export default SwitchCompo;
