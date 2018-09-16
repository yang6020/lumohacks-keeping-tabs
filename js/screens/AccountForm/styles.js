import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: height,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  logo: {
    height: height / 4,
    resizeMode: 'contain',
    marginTop: 30
  },
  text: {
    color: "#0082B5",
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center',
  },
  link: {
    fontWeight: '700',
    textDecorationLine: 'underline'
  },
  actions: {
    flexDirection: 'row',
  },
  footer: {
    paddingVertical: 30,
  },
  button: {
    marginTop: 20,
    paddingVertical: 5,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#0082B5",
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
  },
  error: {
    color: "red",
  },
  form: {
    marginTop: 30,
  },
});

export default styles;