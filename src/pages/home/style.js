import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 115,
    height: 115,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  predictionWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
  },
  imageWrapper: {
    width: 120,
    height: 120,
    borderColor: '#443099',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 20,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonUploadContainer: {
    color: '#fff',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 10,
    justifyContent: 'center',
  },
  uploadBtnTittle: {
    flex: 1,
    fontSize: 20,
    alignSelf: 'center',
    color: '#fff',
  },
  buttonUpload: {
    color: '#fff',
    borderRadius: 20,
    width: 280,
    textAlign: 'center',
  },
  text: {
    color: '#000',
    fontSize: 20,
  },
});
