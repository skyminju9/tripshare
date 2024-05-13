import React from 'react';
import { View, Text, FlatList, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import color from '../../../styles/colorPalette';
import fontStyles from '../../../styles/fontStyles';
import { dummy_plans } from '../../../dummyData';
import BasicHeader from '../../../components/BasicHeader';
import { APP_WIDTH } from '../../../constants';

const coverImage = require('../../../assets/images/myTrip/basicimage1.jpeg');

const MyTripMore = () => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          width: APP_WIDTH,
          height: 400,
          backgroundColor: color.WHITE,
          borderBottomWidth: 1,
          borderBottomColor: color.GRAY_50,
          alignItems: 'center',
        }}>
        <View style={{ alignItems: 'center', width: APP_WIDTH, height: 200, overflow: 'hidden' }}>
          <Image source={coverImage} />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: color.WHITE }}>
      <BasicHeader title={'지난 여행'} />
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <FlatList
          data={dummy_plans}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyTripMore;
