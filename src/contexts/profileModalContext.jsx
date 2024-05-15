import { useContext } from 'react';

import React, { useState } from 'react';

export const ModalStateContext = React.createContext();
export const ModalSetterContext = React.createContext();

function ModalProvider({ children }) {
  const [profileModalVisible, setProfileModalVisible] = useState({ visible: false, user: null });

  return (
    <ModalSetterContext.Provider value={setProfileModalVisible}>
      <ModalStateContext.Provider value={profileModalVisible}>
        {children}
      </ModalStateContext.Provider>
    </ModalSetterContext.Provider>
  );
}

export default ModalProvider;

export function useProfileModal() {
  const setModalState = useContext(ModalSetterContext);

  const openProfile = ({ user = null }) => {
    setModalState({ visible: true, user });
  };

  const closeProfile = () => {
    setModalState({ visible: false, user: { profileImage: null, profileName: null } });
  };

  return { openProfile, closeProfile };
}
