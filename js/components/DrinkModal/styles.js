import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0082B5',
    height: height,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  question: {
    fontSize: 30,
    color: 'blue'
  },
  buttonContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    height: height / 8,
  },
  buttonYes: {
    marginTop: 20,
    width: width / 3,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "yellow",
    margin: 10

  },
  buttonNo: {
    marginTop: 20,
    paddingVertical: 5,
    width: width / 3,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "green",
    margin: 10

  },
});

export default styles;
