import React, {useState} from 'react';
import {RefreshControl, ScrollView, Text} from 'react-native';

const RefreshScroll = () => {
  const [isLoading, setIsLoading] = useState(false);

  const reloadData = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={reloadData} />
      }>
      <Text>Refresh Scroll Test</Text>
    </ScrollView>
  );
};

export default RefreshScroll;
