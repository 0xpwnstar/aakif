import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';

export default function OfferCard({item, index}) {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 20,
        backgroundColor: '#ffffff',
        padding: 3.5,
        alignItems: 'center',
        marginRight: 15,
      }}>
      <View
        style={{
          borderRadius: 20,
          backgroundColor: '#F8F9FE',
          width: '98%',
        }}>
        <View style={{alignItems: 'center', marginBottom: 5}}>
          <Image
            source={item.image}
            style={{
              width: '100%',
              borderRadius: 15,
            }}
            resizeMode="contain"
          />
        </View>

        <View style={{marginLeft: 5, marginBottom: 15}}>
          <Text style={{fontSize: 16, color: '#4F4F4F'}}>{item.header}</Text>
          <Text style={{fontSize: 14, color: '#000', fontWeight: '600'}}>
            {item.text}
          </Text>
          <Text style={{fontSize: 14, color: '#000', fontWeight: '600'}}>
            {item.offer}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
