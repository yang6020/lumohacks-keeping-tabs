import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    width: 200,
    borderBottomWidth: 2,
    paddingHorizontal: 2,
    paddingVertical: 1,
    fontSize: 16,
    marginTop: 8,
    marginBottom: 20,
  },
  valid: {
    borderBottomColor: "#05AEF6",
    color: "black",
  },
  invalid: {
    borderBottomColor: "red",
  },
});

export default styles;
