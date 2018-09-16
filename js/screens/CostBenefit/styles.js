import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'center',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 50,
    borderWidth: 1,
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
  },
});

export default styles;
