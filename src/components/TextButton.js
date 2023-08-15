import {TouchableOpacity, Text} from 'react-native';
import React from 'react';

export default function TextButton({title, onPress}) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#5775F1',
        width: '80%',
        height: 40,
        borderRadius: 10,
        marginTop: 10,
        justifyContent: 'center',
      }}
      onPress={onPress}>
      <Text style={{color: '#fff', textAlign: 'center'}}>{title}</Text>
    </TouchableOpacity>
  );
}
