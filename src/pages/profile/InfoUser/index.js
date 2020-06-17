import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';

import { Avatar } from 'react-native-elements';
import { InfoUserstyles } from './styles';

export default function InfoUser(props) {
  const { userInfo } = props;
  const [error] = useState('');
  const [avatar] = useState(userInfo.photo);

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignSelf: 'center' }}>
          <View style={InfoUserstyles.profileImage}>
            <Avatar
              rounded
              source={{ uri: avatar !== undefined ? avatar : userInfo.photo }}
              errorMessage={error}
              style={InfoUserstyles.image}
              resizeMode="center"
            />
          </View>
        </View>
        <View style={InfoUserstyles.infoContainer}>
          <Text
            style={[InfoUserstyles.text, { fontWeight: '200', fontSize: 36 }]}
          >
            {userInfo.name}
          </Text>
          <Text
            style={[InfoUserstyles.text, { color: '#AEB5BC', fontSize: 14 }]}
          >
            {userInfo.email}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
