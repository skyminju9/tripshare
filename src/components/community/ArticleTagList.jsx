import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import color from '../../styles/colorPalette';
import fontStyles from '../../styles/fontStyles';

const ArticleTagList = ({ currentTag, tags, onPressTag }) => {
  const [activeTag, setActiveTag] = useState(null);

  useEffect(() => setActiveTag(currentTag), []);
  useEffect(() => {
    onPressTag(activeTag);
  }, [activeTag, onPressTag]);

  const handleTagPress = tag => {
    activeTag === tag ? setActiveTag(null) : setActiveTag(tag);
  };

  return (
    <View style={styles.tagContainer}>
      {tags.map(tag => (
        <TouchableOpacity
          style={[styles.tag, activeTag === tag && styles.activeTag]}
          key={tag}
          onPress={() => handleTagPress(tag)}>
          <Text
            style={[
              fontStyles.boldFont02,
              activeTag === tag ? styles.activeTagText : styles.tagText,
            ]}>
            #{tag}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  tagContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 16,
    gap: 8,
  },
  tag: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: color.BLUE_500,
    backgroundColor: color.WHITE,
  },
  activeTag: {
    backgroundColor: color.BLUE_500,
  },
  tagText: {
    color: color.BLUE_500,
  },
  activeTagText: {
    color: color.WHITE,
  },
});

export default ArticleTagList;
