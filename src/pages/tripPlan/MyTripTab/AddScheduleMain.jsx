import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import fontStyles from '../../../styles/fontStyles';
import color from '../../../styles/colorPalette';
import { BlueButton, GrayButton } from '../../../components/BasicButtons';
import AddSchNaming from './AddSchedulePages/AddSchNaming';
import AddSchWhen from './AddSchedulePages/AddSchWhen';
import AddSchWhere from './AddSchedulePages/AddSchWhere';
import AddSchWith from './AddSchedulePages/AddSchWith';
import AddSchImage from './AddSchedulePages/AddSchImage';
import AddSchHash from './AddSchedulePages/AddSchHash';
import AddSchComplete from './AddSchedulePages/AddSchComplete';

const Stack = createNativeStackNavigator();

const AddScheduleStack = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const pages = [
    'AddSchNaming',
    'AddSchWhen',
    'AddSchWhere',
    'AddSchWith',
    'AddSchImage',
    'AddSchHash',
    'AddSchComplete',
  ];

  const pageComponents = {
    AddSchNaming,
    AddSchWhen,
    AddSchWhere,
    AddSchWith,
    AddSchImage,
    AddSchHash,
    AddSchComplete,
  };

  const handleNextPress = () => {
    if (currentIndex < pages.length - 1) {
      const nextIndex = currentIndex + 1;
      navigation.navigate(pages[nextIndex]);
      setCurrentIndex(nextIndex);
    }
  };

  const handlePreviousPress = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      navigation.navigate(pages[prevIndex]);
      setCurrentIndex(prevIndex);
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'none',
          cardStyle: { backgroundColor: 'transparent' },
          transitionSpec: {
            open: { animation: 'timing', config: { duration: 0 } },
            close: { animation: 'timing', config: { duration: 0 } },
          },
        }}>
        {pages.map(page => (
          <Stack.Screen key={page} name={page} component={pageComponents[page]} />
        ))}
      </Stack.Navigator>
      {currentIndex === pages.length - 1 ? (
        <TouchableOpacity
          style={styles.completeButton}
          onPress={() => navigation.navigate('TripPlan')}>
          <Text style={[fontStyles.title03, { color: color.WHITE }]}>나의 여행으로 돌아가기</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.buttonContainer}>
          {currentIndex > 0 && <GrayButton title="이전" onPress={handlePreviousPress} />}
          {currentIndex < pages.length - 1 && <BlueButton title="다음" onPress={handleNextPress} />}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF2FF',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingLeft: 60,
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
  },
  completeButton: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    height: 54,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3370F0',
  },
});

export default AddScheduleStack;
