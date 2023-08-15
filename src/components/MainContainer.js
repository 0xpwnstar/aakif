import {View, Text, StatusBar, Image} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {constants} from './../constants/constant';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function MainContainer({renderProp}) {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'#5775F1'} />
      <View style={{flex: 1, backgroundColor: '#5775F1'}}>
        <View
          style={{marginTop: 15, flexDirection: 'row', alignItems: 'center'}}>
          <Image source={constants.TABLOGO} style={{marginLeft: 20}} />
          <View
            style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#FFFFFF3D',
                alignItems: 'center',
                borderRadius: 20,
              }}>
              <Image source={constants.COINS} style={{marginHorizontal: 5}} />
              <Text style={{marginRight: 5, color: '#ffffff'}}>25</Text>
            </View>
            <Image source={constants.QR} style={{marginHorizontal: 20}} />
            <MaterialCommunityIcons
              name="bell-outline"
              color={'white'}
              size={26}
              marginRight={20}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#F0F3FF',
            borderRadius: 40,
            marginTop: 20,
          }}>
          {renderProp ? renderProp() : false}
        </View>
      </View>
    </>
  );
}
