import React from 'react';
import {View, SectionList, Text} from 'react-native';
import {styles} from './styles';

const SectionListComponent = () => {
  const DATA = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ];

  const renderHeader = ({section}: any) => <Text>{section.title}</Text>;
  const renderFooter = () => <Text>--------------</Text>;
  return (
    <View>
      <SectionList
        contentContainerStyle={styles.listStyles}
        sections={DATA}
        renderItem={({item}: any) => (
          <Text style={styles.sectionListText}>{item}</Text>
        )}
        renderSectionHeader={renderHeader}
        renderSectionFooter={renderFooter}
      />
    </View>
  );
};

export default SectionListComponent;
