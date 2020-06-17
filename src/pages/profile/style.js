import { StyleSheet } from 'react-native';

export const profileStyles = StyleSheet.create({
  safeProfileArea: {
    flex: 1,
    paddingBottom: 10,
  },
  profileView: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  profileLines: {
    height: 100,
    resizeMode: 'stretch',
    backgroundColor: 'transparent',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  profileBtnTittle: {
    flex: 1,
    fontSize: 20,
    alignSelf: 'center',
    color: '#fff',
  },
  profileSignOut: {
    color: '#fff',
    borderRadius: 20,
    width: '90%',
    textAlign: 'center',
  },
  profileSignOutContainer: {
    color: '#fff',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 10,
    justifyContent: 'center',
  },
});
