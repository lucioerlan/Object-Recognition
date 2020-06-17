import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
  View,
  Image,
  ScrollView,
  Alert,
  SafeAreaView,
  YellowBox,
} from 'react-native';
import firebase from 'firebase';
import { Button, Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { profileStyles } from './style';
import UserGuest from './UserGuest';

console.disableYellowBox = true;
YellowBox.ignoreWarnings(['@firebase']);

function Profile() {
  const logoutButtonAlert = () =>
    Alert.alert(
      'Atenção',
      'Deseja realmente sair? :(',
      [
        {
          text: 'Não',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },

        { text: 'Sim', onPress: () => firebase.auth().signOut() },
      ],
      { cancelable: false }
    );

  return (
    <SafeAreaView style={profileStyles.safeProfileArea}>
      <ScrollView scrollEventThrottle={16}>
        <View>
          <View style={profileStyles.profileView}>
            <UserGuest />
          </View>
          <Image
            source={require('../../assets/images/lines.png')}
            style={profileStyles.profileLines}
          />
          <LinearGradient
            colors={['#8e2de2', '#4a00e0']}
            style={{
              borderRadius: 20,
              flex: 1,
              alignSelf: 'center',
              color: '#fff',
            }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Button
              type="clear"
              buttonStyle={profileStyles.profileSignOut}
              containerStyle={profileStyles.profileSignOutContainer}
              title="Sair do Aplicativo"
              onPress={logoutButtonAlert}
              icon={
                <Icon
                  type="antdesign"
                  name="logout"
                  size={27}
                  color="white"
                  marginLeft={20}
                />
              }
              titleStyle={profileStyles.profileBtnTittle}
            />
          </LinearGradient>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default withNavigation(Profile);
