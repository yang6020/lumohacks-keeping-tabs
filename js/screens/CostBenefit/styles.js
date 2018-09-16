import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 50,
    borderWidth: 1.5,
  },
  buttonText: {
    textAlign: 'center',
  },
  prosButton: {
    borderColor: 'green',
  },
  consButton: {
    borderColor: 'red',
  },
  header: {
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 24,
  },
  listContainer: {
    height: 0.3 * height,
  },
  bar: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  modal: {
    margin: 20,
    paddingVertical: 40,

    // flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',

    // height: height / 3,
    marginHorizontal: 25,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 100,
    shadowOffset: {
      height: 20,
      width: 20,
    },
    borderRadius: 7,
    padding: 10,
    position: 'relative',
  },
  fieldContainer: {
    margin: 20,
  },
  field: {
    borderBottomColor: 'pink',
    borderBottomWidth: 1,
  },
  inactiveButton: {
    borderColor: 'grey',
  },
  activeButton: {
    borderColor: 'pink',
  },
  modalWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  close: {
    position: 'absolute',
    top: height * -0.05,
    right: 0,
  },
});

export default styles;
