import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 48,
    paddingHorizontal: 18,
    gap: 16
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '800'
  },
  subTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600'
  },
  image: {
    width: 275,
    height: 175
  },
  wrapperImage: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12
  },
  text: {
    color: '#fff',
    fontSize: 16
  },
  span: {
    color: '#fff',
    paddingHorizontal: 8,
    marginVertical: 2,
    backgroundColor: '#ff6dfa78',
    borderRadius: 5,
    alignItems: 'center'
  }
});