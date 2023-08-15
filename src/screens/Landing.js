import {View, Text, Image} from 'react-native';
import React from 'react';
import TextButton from './../components/TextButton';
import {constants} from './../constants/constant';
import CardComponent from './../components/CardComponent';
import {FlashList} from '@shopify/flash-list';
import {data} from './../data/LandingData';

export default function Landing({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', marginTop: 70}}>
      <Image source={constants.LOGO} />
      <LandingDataList />
      <TextButton title={`${constants.GETSTARTED}`} onPress={() => navigation.navigate('MyTabs')}/>
    </View>
  );
}

const LandingDataList = () => {
  return (
    <View
      style={{
        marginTop: 70,
        marginBottom: 130,
        width: '100%',
      }}>
      <FlashList
        data={data}
        horizontal
        pagingEnabled
        renderItem={({item}) => <CardComponent item={item} />}
        showsHorizontalScrollIndicator={false}
        estimatedItemSize={336}
      />
    </View>
  );
};
