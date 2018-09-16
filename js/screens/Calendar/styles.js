import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 15,
    alignItems: 'center'
  },
  calendar: { height: height, width, flex: 1 }
});

export default styles;