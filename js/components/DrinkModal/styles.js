import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0082B5",
    paddingRight: 15,
    paddingLeft: 15,
    height: height,
  },
  header: {
    paddingVertical: 10,
    color: "white",
    marginTop: 20

  },
  questionContainer: {
    marginTop: 30,
    alignItems: 'center'
  },
  question: {
    marginTop: 30,
    fontSize: 30,
    color: 'white'
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
