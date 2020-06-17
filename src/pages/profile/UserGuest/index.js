import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { db } from '../../../configs/Firebaseconfigs';
import InfoUser from '../InfoUser';
import { email } from '../QueriesProfile';

export default function UserGuest() {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    db.ref('users')
      .orderByChild('email')
      .equalTo(email)
      .on('value', snap => {
        snap.forEach(child => {
          setUserInfo(child.val());
        });
      });
  }, []);

  return (
    <View>
      <InfoUser userInfo={userInfo} />
    </View>
  );
}
