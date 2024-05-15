import React, { useState, useEffect } from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import fontStyles from '../../../../styles/fontStyles';
import { useNavigation } from '@react-navigation/native';
import color from '../../../../styles/colorPalette';
import ImageCropPicker from 'react-native-image-crop-picker';
import UploadImageIcon from '../../../../assets/icons/myTrip/uploadimage.png';
import { BlueButton, GrayButton } from '../../../../components/BasicButtons';
import { useTravelSchedule } from '../../../../contexts/TravelScheduleContext'; // 변경된 import 경로

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const imageWidth = (windowWidth - 40) / 3 - 5;

const AddSchImage = () => {
  const { currentSchedule, setCurrentSchedule } = useTravelSchedule(); // 변경된 훅 사용
  const [images, setImages] = useState([null, ...imagesImports.map(() => null)]);
  const [fullImage, setFullImage] = useState(
    currentSchedule.image ? { uri: currentSchedule.image } : null,
  );
  const [isCompleted, setIsCompleted] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    if (currentSchedule.image) {
      setFullImage({ uri: currentSchedule.image });
    }
  }, [currentSchedule.image]);

  const handleNextPress = () => {
    if (isCompleted && fullImage) {
      setCurrentSchedule(prev => ({ ...prev, image: fullImage.uri }));
      navigation.navigate('AddSchHash');
    }
  };

  const handlePreviousPress = () => {
    setFullImage(null);
    setIsCompleted(false);
  };

  const pickImage = index => {
    if (index === 0) {
      ImageCropPicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
        mediaType: 'photo',
      })
        .then(image => {
          const newImages = [...images];
          newImages[index] = { uri: image.path };
          setImages(newImages);
          setFullImage({ uri: image.path });
          setIsCompleted(true);
        })
        .catch(error => {
          console.log('Image selection error:', error);
          setFullImage(null);
        });
    } else {
      const selectedImage = imagesImports[index - 1];
      const imageUri = Image.resolveAssetSource(selectedImage).uri;
      setFullImage({ uri: imageUri });
      setIsCompleted(true);
    }
  };

  const renderImage = (image, index) => {
    const imageStyle = index === 0 ? styles.uploadIcon : styles.image;
    const onPressAction = () => pickImage(index);
    const source = index === 0 ? UploadImageIcon : image || imagesImports[index - 1];
    return (
      <TouchableOpacity key={index} onPress={onPressAction}>
        <Image source={source} style={[imageStyle, { width: windowWidth / 3 - 10 }]} />
      </TouchableOpacity>
    );
  };

  const renderFullImage = () => {
    return (
      <View style={styles.fullImageContainer}>
        <View style={styles.fullImageWrapper}>
          <Image source={fullImage} style={styles.fullImage} />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        {!fullImage && (
          <View style={styles.titleContainer}>
            <Text style={fontStyles.title02}>여행을 대표하는 이미지를 골라보세요.</Text>
          </View>
        )}
        {fullImage ? (
          renderFullImage()
        ) : (
          <View style={styles.imageGridContainer}>
            {images.map((image, index) => renderImage(image, index))}
          </View>
        )}
      </View>
      <View style={styles.footer}>
        <View style={styles.buttonContainer}>
          {fullImage ? (
            <>
              <GrayButton title="재선택" onPress={handlePreviousPress} />
              <BlueButton title="선택 완료" onPress={handleNextPress} />
            </>
          ) : (
            <>
              <GrayButton title="이전" onPress={navigation.goBack} />
              <BlueButton title="다음" onPress={handleNextPress} disabled={!isCompleted} />
            </>
          )}
        </View>
      </View>
    </View>
  );
};

const imagesImports = [
  require('../../../../assets/images/myTrip/basicimage1.jpeg'),
  require('../../../../assets/images/myTrip/basicimage2.jpeg'),
  require('../../../../assets/images/myTrip/basicimage3.jpeg'),
  require('../../../../assets/images/myTrip/basicimage4.jpeg'),
  require('../../../../assets/images/myTrip/basicimage5.jpeg'),
  require('../../../../assets/images/myTrip/basicimage6.jpeg'),
  require('../../../../assets/images/myTrip/basicimage7.jpeg'),
  require('../../../../assets/images/myTrip/basicimage8.jpeg'),
];

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.BLUE_30,
    padding: 20,
    justifyContent: 'space-between',
    height: '100%',
  },
  main: {
    flex: 1,
  },
  titleContainer: {
    marginVertical: 20,
  },
  imageGridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 80,
  },
  image: {
    width: imageWidth,
    height: imageWidth,
    aspectRatio: 1,
    marginBottom: 10,
    resizeMode: 'cover',
    borderColor: color.GRAY_50,
    borderWidth: 1,
    borderStyle: 'solid',
  },
  uploadIcon: {
    width: imageWidth,
    height: imageWidth,
    aspectRatio: 1,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  fullImageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  fullImageWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    top: 90,
    alignItems: 'center ',
  },
  fullImage: {
    aspectRatio: 1,
    width: '100%',
    maxWidth: windowWidth * 0.9,
    maxHeight: windowHeight * 0.9,
    resizeMode: 'contain',
  },
  resetButtonsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 40,
    width: '100%',
    justifyContent: 'space-between',
  },
  resetText: {
    ...fontStyles.title02,
    color: color.TEXT_PRIMARY,
  },
  checkedIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  footer: {},
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 5,
    gap: 0,
  },
});

export default AddSchImage;
