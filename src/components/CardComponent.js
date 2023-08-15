import {View, Text, Image} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';

export default function CardComponent({item}) {
  return (
    <View
      style={{
        alignItems: 'center',
        width: Dimensions.get('screen').width,
        paddingHorizontal: 20
      }}>
      <Image
        source={item.image}
        style={{height: 225, width: 210, marginBottom: 50}}
      />
      <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000000'}}>
        {item.header}
      </Text>
      <Text style={{fontSize: 14, textAlign: 'center'}}>
        {item.text}
      </Text>
    </View>
  );
}
