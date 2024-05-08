import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import UploadImageIcon from '../../assets/icons/myTrip/uploadimage.png'; // 업로드 아이콘을 가져오는 경로

const imagesImports = [
  require('../../assets/images/myTrip/basicimage1.jpeg'),
  require('../../assets/images/myTrip/basicimage2.jpeg'),
  require('../../assets/images/myTrip/basicimage3.jpeg'),
  require('../../assets/images/myTrip/basicimage4.jpeg'),
  require('../../assets/images/myTrip/basicimage5.jpeg'),
  require('../../assets/images/myTrip/basicimage6.jpeg'),
  require('../../assets/images/myTrip/basicimage7.jpeg'),
  require('../../assets/images/myTrip/basicimage8.jpeg'),
];

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ChattingHome = () => {
  // 초기 이미지 배열에 첫 번째 값은 null로 설정하여 업로드 아이콘을 표시하게 합니다.
  const [images, setImages] = useState([null, ...imagesImports.map(() => null)]);
  const [fullImage, setFullImage] = useState(null); // 추가: 전체 화면 이미지 상태

  const pickImage = index => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      cropperCircleOverlay: false, // 원형 오버레이 비활성화
      mediaType: 'photo',
    })
      .then(image => {
        const newImages = [...images];
        newImages[index] = { uri: image.path };
        setImages(newImages);
        setFullImage({ uri: image.path }); // 선택한 이미지를 전체 화면 이미지로 설정
      })
      .catch(error => {
        console.log('이미지 선택 오류:', error);
        setFullImage(null); // 오류 발생 시 전체 화면 이미지 초기화
      });
  };

  const renderImage = (image, index) => {
    const imageStyle = index === 0 ? styles.uploadIcon : styles.image;
    // 첫 번째 인덱스일 때는 업로드 아이콘을 사용하고, 그 외에는 기존 방식대로 이미지를 표시합니다.
    const source = index === 0 ? UploadImageIcon : image || imagesImports[index - 1];
    return (
      <TouchableOpacity key={index} onPress={() => pickImage(index)}>
        <Image
          source={source}
          style={[imageStyle, { width: windowWidth / 3 - 10 }]} // 이미지의 가로 크기를 화면 너비의 1/3로 설정
        />
      </TouchableOpacity>
    );
  };

  return (
    
    <View style={styles.container}>
      {fullImage ? (
        // 전체 화면 이미지 뷰
        <TouchableOpacity onPress={() => setFullImage(null)}>
          <Image source={fullImage} style={styles.fullImage} />
        </TouchableOpacity>
      ) : (
        <View style={styles.imageGrid}>
          {images.map((image, index) => renderImage(image, index))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: 350,
    padding: 5,
  },
  image: {
    width: 110,
    height: 110,
    aspectRatio: 1,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  uploadIcon: {
    width: 110, // 아이콘 크기를 이미지와 동일하게 설정
    height: 110,
    aspectRatio: 1,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  fullImage: {
    // 전체 화면 이미지 스타일
    width: windowWidth,
    height: windowHeight,
    resizeMode: 'contain',
  },
});

export default ChattingHome;
