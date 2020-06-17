import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
  loginView: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: '5%',
    paddingTop: 60,
    paddingBottom: 40,
  },
  loginBtn: {
    color: '#fff',
    borderRadius: 20,
    width: '90%',
    textAlign: 'center',
    padding: 5,
  },
  loginBtnContainer: {
    flex: 1,
    color: '#fff',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  loginBtnTittle: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    alignSelf: 'center',
    color: '#fff',
  },
  loginImage: {
    alignSelf: 'center',
    height: '40%',
    marginBottom: '10%',
    width: '60%',
  },
  loginTxt: {
    flex: 1,
    color: '#5c54a4',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 30,
    justifyContent: 'center',
  },
  loginTxt2: {
    color: '#33AAFF',
  },
});
