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
const imageWidth = (windowWidth - 40) / 3 - 5; // 각 이미지의 너비 계산

const AddSchImage = () => {
  const navigation = useNavigation();

  const [images, setImages] = useState([null, ...imagesImports.map(() => null)]);
  const [fullImage, setFullImage] = useState(null); // 추가: 전체 화면 이미지 상태

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
          setFullImage({ uri: image.path }); // 선택한 이미지를 풀이미지로 설정
        })
        .catch(error => {
          console.log('이미지 선택 오류:', error);
          setFullImage(null); // 오류 발생 시 풀이미지 초기화
        });
    } else {
      // 베이직 이미지를 선택할 때
      setFullImage(imagesImports[index - 1]); // 선택한 이미지를 풀이미지로 설정
    }
  };

  const renderImage = (image, index) => {
    const imageStyle = index === 0 ? styles.uploadIcon : styles.image;
    // 업로드 이미지를 누르면 피커가 열리도록 설정, 베이직 이미지를 누르면 해당 이미지가 풀이미지로 설정
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
            <Text style={[fontStyles.title02]}>여행을 대표하는 이미지를 골라보세요.</Text>
          </View>
          {fullImage ? (
            <View style={styles.fullImageContainer}>
              <Image source={fullImage} style={styles.fullImage} />
            </View>
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

  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  image: {
    width: imageWidth,
    height: imageWidth,
    aspectRatio: 1,
    marginBottom: 10, // 이미지 아래쪽에 간격 추가
    resizeMode: 'cover',
    borderRadius: 10,
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
    borderRadius: 10,
  },
  imageGridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 80, // 이미지 그리드 아래 마진 추가
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
});

export default AddSchImage;
