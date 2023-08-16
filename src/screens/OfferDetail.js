import {View, Text, StatusBar, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MainContainer from './../components/MainContainer';
import {constants} from './../constants/constant';
import {FlashList} from '@shopify/flash-list';
import {filterData} from './../data/FilterList';
import {MasonryFlashList} from '@shopify/flash-list';
import {offerData} from './../data/OfferList';
import OfferCard from './../components/OfferCard';

export default function OfferDetail() {
  return (
    <>
      <MainContainer
        renderProp={() => (
          <View style={{flex: 0.72}}>
            {SearchBar()}
            <View style={{flexDirection: 'row', marginHorizontal: 15}}>
              {FilterList()}
            </View>
            {OfferFlashList()}
          </View>
        )}
      />
    </>
  );
}

const FilterList = () => {
  return (
    <FlashList
      data={filterData}
      horizontal
      renderItem={({item}) => (
        <View
          style={{
            marginHorizontal: 5,
            flexDirection: 'row',
            backgroundColor: '#E9ECFF',
            alignItems: 'center',
            borderRadius: 20,
            borderWidth: 1,
            borderColor: '#5775F1',
            height: 35,
            paddingHorizontal: 10,
          }}>
          <Image source={item.image} style={{marginHorizontal: 5}} />
          <Text style={{marginRight: 5, color: '#000000'}}>{item.header}</Text>
        </View>
      )}
      showsHorizontalScrollIndicator={false}
      estimatedItemSize={336}
    />
  );
};

const SearchBar = () => {
  const [text, setText] = useState('Search name');
  return (
    <View style={{margin: 20}}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#F8F9FE',
          alignItems: 'center',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#ffffff',
          height: 40,
          paddingHorizontal: 10,
        }}>
        <Image source={constants.SEARCH} style={{marginHorizontal: 5}} />
        <TextInput
          style={{marginRight: 5, color: '#BDBDBD', width: '100%'}}
          value={text}
          onChangeText={setText}
        />
      </View>
    </View>
  );
};

const OfferFlashList = () => {
  const FlatListItemSeparator = () => {
    return <View style={{height: 10}} />;
  };
  return (
    <View style={{marginVertical: 15, height: '100%', paddingLeft: 15}}>
      <MasonryFlashList
        data={offerData}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({item, index}) => <OfferCard item={item} index={index} />}
        estimatedItemSize={200}
        ItemSeparatorComponent={FlatListItemSeparator}
      />
    </View>
  );
};
