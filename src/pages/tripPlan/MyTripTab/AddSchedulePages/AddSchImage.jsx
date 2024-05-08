import React, { useState, useEffect } from 'react';
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
import CloseIcon from '../../../../assets/icons/myTrip/closeicon.png';

const imagesImports = [
  require('../../../../assets/images/myTrip/basicimage1.jpeg'),
  require('../../../../assets/images/myTrip/basicimage2.jpeg'),
  require('../../../../assets/images/myTrip/basicimage3.jpeg'),
  require('../../../../assets/images/myTrip/basicimage4.jpeg'),
  require('../../../..//assets/images/myTrip/basicimage5.jpeg'),
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
  const [containerStyle, setContainerStyle] = useState(styles.container);
  const [textColor, setTextColor] = useState(fontStyles.title02.color);

  useEffect(() => {
    if (fullImage) {
      setContainerStyle(styles.containerGray);
      setTextColor(color.WHITE);
    } else {
      setContainerStyle(styles.container);
      setTextColor(fontStyles.title02.color);
    }
  }, [fullImage]);

  const pickImage = index => {
    if (index === 0) {
      // 업로드 이미지를 선택할 때
      ImageCropPicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
        cropperCircleOverlay: false,
        mediaType: 'photo',
      })
        .then(image => {
          const newImages = [...images];
          newImages[index] = { uri: image.path };
          setImages(newImages);
          setFullImage({ uri: image.path });
        })
        .catch(error => {
          console.log('이미지 선택 오류:', error);
          setFullImage(null);
        });
    } else {
      setFullImage(imagesImports[index - 1]);
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
        <TouchableOpacity onPress={() => setFullImage(null)}>
          <Image source={fullImage} style={styles.fullImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFullImage(null)} style={styles.closeIconContainer}>
          <Image source={CloseIcon} style={styles.closeIcon} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <SafeAreaView style={styles.wrapper} />

      <SafeAreaView>
        <BasicHeader text="나의 여행 일정 추가" backToScreen="TripPlan" />

        <View style={containerStyle}>
          <View style={styles.titleContainer}>
            <Text style={[fontStyles.title02, { color: textColor }]}>
              여행을 대표하는 이미지를 골라보세요.
            </Text>
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
  containerGray: {
    height: '100%',
    padding: 20,
    backgroundColor: color.GRAY_300,
  },

  titleContainer: {
    marginVertical: 20,
  },

  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
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
  imageGridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 80,
  },
  fullImageContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '60%',
  },
  fullImage: {
    width: windowWidth - 25,
    height: windowHeight - 25,
    resizeMode: 'contain',
  },
  closeIconContainer: {
    position: 'absolute',
    top: 86,
    right: 3,
    backgroundColor: color.BLUE_500,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    borderWidth: 4,
    borderColor: 'white',
    borderStyle: 'solid',
  },
  closeIcon: {
    width: 20,
    height: 20,
  },
});

export default AddSchImage;
