import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import color from '../../styles/colorPalette';
import fontStyles from '../../styles/fontStyles';
import BasicHeader from '../../components/BasicHeader';
import SeeMoreBtn from '../../components/SeeMoreBtn';

const writeButton = require('../../assets/icons/community/write_review.png');
const locationIcon = require('../../assets/icons/community/location.png');
const telIcon = require('../../assets/icons/community/tel.png');
const starIcon = require('../../assets/icons/community/star.png');

const AttractionDetail = ({ route }) => {
  const attraction = route.params.params;
  console.log(attraction);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: color.WHITE }}>
      <BasicHeader title={'상세페이지'} />
      <View style={{ alignItems: 'center', marginHorizontal: 20, marginTop: 16 }}>
        <Image
          source={attraction.coverImage}
          style={{
            width: 350,
            height: 180,
            borderRadius: 8,
            borderColor: color.GRAY_50,
            borderWidth: 1,
          }}
        />
        <View style={{ width: 350, marginTop: 16 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 16,
            }}>
            <Text style={fontStyles.title02}>{attraction.placeName}</Text>
            <TouchableOpacity>
              <Image source={writeButton} style={{ width: 36, height: 36 }} />
            </TouchableOpacity>
          </View>
          <View
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <Image source={locationIcon} style={{ width: 24, height: 24 }} />
              <Text style={fontStyles.basicFont01}>도쿄도 시부야구</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
              <Image source={starIcon} style={{ width: 20, height: 20 }} />
              <Text style={fontStyles.title02}>{attraction.star}</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 12 }}>
            <Image source={telIcon} style={{ width: 24, height: 24 }} />
            <Text style={fontStyles.basicFont01}>{attraction.tel}</Text>
          </View>
          <View style={{ marginTop: 24, gap: 8 }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={fontStyles.title02}>소개</Text>
              <SeeMoreBtn />
            </View>
            <Text style={fontStyles.basicFont02}>{attraction.detail}</Text>
          </View>
          <View style={{ marginTop: 24, gap: 8 }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={fontStyles.title02}>REVIEW</Text>
              <SeeMoreBtn />
            </View>
            <View>
              {attraction.reviews.map(item => {
                return (
                  <TouchableOpacity
                    key={item.id}
                    style={{
                      width: 340,
                      height: 35,
                      borderWidth: 2,
                      borderRadius: 12,
                      borderColor: color.BLUE_200,
                      justifyContent: 'center',
                      paddingHorizontal: 16,
                      marginBottom: 8,
                    }}>
                    <Text style={fontStyles.basicFont02}>{item.comment}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AttractionDetail;
