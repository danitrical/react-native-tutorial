import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'purple',
  },
  counter: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
  },
  listText: {
    fontSize: 150,
    fontWeight: 'bold',
    color: 'purple',
  },
  listStyles: {
    width: 300,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 5,
    margin: 20,
  },
});
