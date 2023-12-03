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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'purple',
    borderWidth: 5,
    margin: 20,
    padding: 20,
  },
  input: {
    height: 50,
    margin: 20,
    backgroundColor: 'white',
    fontSize: 25,
    borderRadius: 5,
    padding: 10,
  },
  submitButton: {
    backgroundColor: 'orange',
    color: 'white',
    padding: 20,
  },
  inputCompo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionListText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    borderRadius: 10,
    margin: 10,
  },
});
