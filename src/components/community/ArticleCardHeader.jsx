import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import color from '../../styles/colorPalette';
import fontStyles from '../../styles/fontStyles';
import { setAgoDays } from '../../utils/date';

const ArticleCardHeader = ({ authorImg, authorName, createdAt }) => {
  return (
    <View style={styles.articleHeader}>
      <View style={styles.authorProfile}>
        <Image source={authorImg} style={styles.authorImage} />
        <Text style={fontStyles.boldFont01}>{authorName}</Text>
      </View>
      <View>
        <Text style={[fontStyles.basicFont02, styles.createdAtText]}>{setAgoDays(createdAt)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  articleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  authorProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  authorImage: {
    width: 20,
    height: 20,
    borderRadius: 50,
  },
  createdAtText: {
    color: color.GRAY_300,
  },
});

export default ArticleCardHeader;
