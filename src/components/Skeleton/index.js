import React from 'react';
import SkeletonContent from 'react-native-skeleton-content';

export default function Skeleton() {
  return (
    <SkeletonContent
      containerStyle={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      isLoading
      layout={[
        {
          width: 120,
          height: 120,
          borderRadius: 20,
        },
        {
          width: 280,
          height: 60,
          borderRadius: 20,
          marginTop: 40,
        },
      ]}
    />
  );
}
