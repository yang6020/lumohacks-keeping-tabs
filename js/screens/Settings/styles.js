import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 15,
    alignItems: 'center'
  },
  submitContainer: {
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 20
  },
  buttonContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 20,
    paddingTop: 20
  },
  gridItem: {
    alignItems: 'center'
  },
  submit: {
    width: width / 3,
    paddingVertical: 10,
    borderRadius: 3.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#0082B5",
    marginTop: 10
  },
  button: {
    padding: 20,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#0082B5",
    margin: 10
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
