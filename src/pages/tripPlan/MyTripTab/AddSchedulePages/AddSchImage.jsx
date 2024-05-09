import React, { useState } from 'react';
import {
  Text,
  Image,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BasicHeader from '../../../../components/BasicHeader';
import fontStyles from '../../../../styles/fontStyles';
import color from '../../../../styles/colorPalette';
import ImageCropPicker from 'react-native-image-crop-picker';
import UploadImageIcon from '../../../../assets/icons/myTrip/uploadimage.png';
import CheckedIcon from '../../../../assets/icons/myTrip/checked.png';

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

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const imageWidth = (windowWidth - 40) / 3 - 5;

const AddSchImage = () => {
  const navigation = useNavigation();

  const [images, setImages] = useState([null, ...imagesImports.map(() => null)]);
  const [fullImage, setFullImage] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);

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
          setIsCompleted(false); // Reset completion state when a new image is picked
        })
        .catch(error => {
          console.log('Image selection error:', error);
          setFullImage(null);
        });
    } else {
      setFullImage(imagesImports[index - 1]);
      setIsCompleted(false); // Reset completion state when a new image is picked
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
        <View style={styles.resetButtonsContainer}>
          <TouchableOpacity onPress={() => setFullImage(null)} style={styles.resetTextContainer}>
            <Text style={styles.resetText}>재선택</Text>
          </TouchableOpacity>
          {isCompleted ? (
            <Image source={CheckedIcon} style={styles.checkedIcon} />
          ) : (
            <TouchableOpacity
              onPress={() => setIsCompleted(true)}
              style={styles.resetTextContainer}>
              <Text style={styles.resetText}>선택 완료</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  return (
    <View>
      <SafeAreaView style={styles.wrapper} />

      <SafeAreaView>
        <BasicHeader text="나의 여행 일정 추가" backToScreen="TripPlan" />

        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={fontStyles.title02}>여행을 대표하는 이미지를 골라보세요.</Text>
          </View>
          {fullImage ? (
            renderFullImage()
          ) : (
            <View style={styles.imageGridContainer}>
              {images.map((image, index) => renderImage(image, index))}
            </View>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFF',
  },
  container: {
    height: '100%',
    padding: 20,
    backgroundColor: color.BLUE_30,
  },
  titleContainer: {
    marginVertical: 20,
  },
  imageGridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
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
    position: 'absolute', // 절대 위치
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: color.TEXT_SECONDARY,
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
    top: 20,
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  resetText: {
    ...fontStyles.title02,
    color: 'white',
  },
  checkedIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default AddSchImage;
