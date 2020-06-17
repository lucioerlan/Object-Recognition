import React, { useState } from 'react';
import firebase from 'firebase';
import * as Google from 'expo-google-app-auth';
import _ from 'lodash';
import { Text, View, Image, Alert } from 'react-native';
import { CheckBox, Icon, Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { withNavigation } from 'react-navigation';
import { db } from '../../configs/Firebaseconfigs';
import { loginStyles } from './style';

function LoginScreen(props) {
  const { navigation } = props;

  const [isChecked, setIsChecked] = useState(false);

  const changeChecked = () => {
    setIsChecked(!isChecked);
  };

  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      const { providerData } = firebaseUser;
      for (let i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          return true;
        }
      }
    }
    return false;
  };

  onSignIn = googleUser => {
    var unsubscribe = firebase.auth().onAuthStateChanged(
      function(firebaseUser) {
        unsubscribe();
        if (!this.isUserEqual(googleUser, firebaseUser)) {
          const credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken,
            googleUser.accessToken
          );
          firebase
            .auth()
            .signInWithCredential(credential)
            .then(function(result) {
              if (result.additionalUserInfo.isNewUser) {
                const id = db
                  .ref()
                  .child('users')
                  .push().key;
                query = db.ref().child(`users/${id}`);
                query.set({
                  id: id,
                  name: result.additionalUserInfo.profile.given_name,
                  last_name: result.additionalUserInfo.profile.family_name,
                  photo: result.additionalUserInfo.profile.picture,
                  email: result.user.email,
                  userId: result.user.uid,
                  created_at: Date.now(),
                  last_logged_in: new Date().toISOString(),
                });
              } else {
                firebase
                  .database()
                  .ref(`/users/${result.user.uid}`)
                  .update({
                    last_logged_in: Date.now(),
                  });
              }
            })
            .catch(function(error) {
              const errorCode = error.code;
              const errorMessage = error.message;
              const { email } = error;
              const { credential } = error;
            });
        } else {
          console.log('User already signed-in Firebase.');
        }
      }.bind(this)
    );
  };

  const funct = () => {
    signInWithGoogle(isChecked);
  };

  const signInWithGoogle = async isChecked => {
    if (isChecked === false) {
      Alert.alert('Atenção', 'Você deve aceitar os Termos de Uso');
    } else {
      try {
        // YOU CONFIGS GOOGLE SIGN IN
        const result = await Google.logInAsync({
          iosClientId:
            '825197386539-r8npj5gpaoc96n1fhk89t4cr6s32tqff.apps.googleusercontent.com',
          androidClientId:
            '825197386539-7tpmju5eio5kmr9pr77jh79c0q28mrn4.apps.googleusercontent.com',
          scopes: ['profile', 'email'],
        });

        if (result.type === 'success') {
          this.onSignIn(result);
          return result.accessToken;
        }
        return { cancelled: true };
      } catch (e) {
        return { error: true };
      }
    }
  };

  const onPressTerms = () => {
    return navigation.navigate('Terms');
  };

  return (
    <View style={loginStyles.loginView}>
      <Text style={loginStyles.loginTxt} />
      <Image
        source={require('../../assets/images/logo.png')}
        style={loginStyles.loginImage}
      />

      <CheckBox checked={isChecked} onPress={changeChecked} />
      <Text>
        Eu li e concordo com
        <Text style={loginStyles.loginTxt2} onPress={onPressTerms}>
          {' '}
          os termos de uso
        </Text>
      </Text>

      <LinearGradient
        colors={['#8e2de2', '#4a00e0']}
        style={{
          borderRadius: 20,
          flex: 1,
          alignSelf: 'center',
          color: '#fff',
          marginTop: 10,
        }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Button
          type="clear"
          buttonStyle={loginStyles.loginBtn}
          containerStyle={loginStyles.loginBtnContainer}
          title="Entrar com Google"
          onPress={funct}
          icon={
            <Icon
              type="antdesign"
              name="google"
              size={30}
              color="white"
              marginLeft={20}
            />
          }
          titleStyle={loginStyles.loginBtnTittle}
        />
      </LinearGradient>
    </View>
  );
}

export default withNavigation(LoginScreen);
