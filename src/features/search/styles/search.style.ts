import {StyleSheet} from 'react-native';

export const searchStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    padding: 16,
  },
  title: {},
  inputContainer: {
    paddingHorizontal: 8,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingBottom: 4,
    marginBottom: 16,
  },
  inputLabel: {
    color: 'black',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  inputBox: {
    paddingVertical: 0,
    fontSize: 20,
    color: 'black',
    height: 30,
    fontWeight: '400',
  },
  button: {
    backgroundColor: '#79AC78',
    borderRadius: 8,
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  disableButton: {
    backgroundColor: '#D0E7D2',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
});
