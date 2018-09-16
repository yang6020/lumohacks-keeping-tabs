import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 15,
    alignItems: 'center'
  },
  gridItem: {
    alignItems: 'center'
  },
  button: {
    padding: 20,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#0082B5",
  },
  gridText: {
    color: 'white',
    fontWeight: 'bold'
  },
  inputText: {
    paddingLeft: 10,
    width: 200,
    height: 30,
    borderColor: 'gray',
    borderWidth: 1
  }
});

export default styles;
