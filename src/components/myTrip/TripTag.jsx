import { View, Text, StyleSheet } from 'react-native';
import color from '../../styles/colorPalette';
import fontStyles from '../../styles/fontStyles';

const TripTag = ({ text }) => {
  return (
    <View style={styles.tagWrapper}>
      <Text style={styles.tagText}>#{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tagWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: color.BLUE_30,
    paddingHorizontal: 6,
    paddingVertical: 4,
    marginRight: 8,
  },
  tagText: [fontStyles.basicFont02, { color: color.BLUE_600 }],
});
export default TripTag;
