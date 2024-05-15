import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { ModalStateContext, useProfileModal } from '../contexts/profileModalContext';
import Modal from 'react-native-modal';
import ProfileModal from './ProfileModal';

const ModalContainer = () => {
  const { visible, user } = useContext(ModalStateContext);
  const { closeProfile } = useProfileModal();
  return (
    <>
      <Modal isVisible={visible} onBackdropPress={() => closeProfile()}>
        <ProfileModal user={user} />
      </Modal>
    </>
  );
};

export default ModalContainer;

const styles = StyleSheet.create({});
