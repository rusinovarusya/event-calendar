import { createSlice } from '@reduxjs/toolkit';

export interface ModalState {
  modalVisible: boolean;
  authenticationModalVisible: boolean;
  createEventModalVisible: boolean;
  aboutEventModalVisible: boolean;

  alertModalVisible: boolean;
  alertSuccessCreateModalVisible: boolean;
  alertSuccessJoinModalVisible: boolean;
  alertSuccessModalVisible: boolean;
  
  confirmModalVisible: boolean;
}

const initialState: ModalState = {
  modalVisible: false,
  authenticationModalVisible: false,
  createEventModalVisible: false,
  aboutEventModalVisible: false,

  alertModalVisible: false,
  alertSuccessCreateModalVisible: false,
  alertSuccessJoinModalVisible: false,
  alertSuccessModalVisible: false,
  
  confirmModalVisible: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalVisible: (state) => {
      state.modalVisible = true;
    },
    setModalInvisible: (state) => {
      state.modalVisible = false;
    },

    setAuthenticationModalVisible: (state) => {
      state.authenticationModalVisible = true;
    },
    setAuthenticationModalInvisible: (state) => {
      state.authenticationModalVisible = false;
    },

    setCreateEventModalVisible: (state) => {
      state.createEventModalVisible = true;
    },

    setCreateEventModalInvisible: (state) => {
      state.createEventModalVisible = false;
    },

    setAboutEventModalVisible: (state) => {
      state.aboutEventModalVisible = true;
    },
    setAboutEventModalInvisible: (state) => {
      state.aboutEventModalVisible = false;
    },


    setAlertModalVisible: (state) => {
      state.alertModalVisible = true;
    },
    setAlertModalInvisible: (state) => {
      state.alertModalVisible = false;
    },


    setAlertSuccessCreateModalVisible: (state) => {
      state.alertSuccessCreateModalVisible = true;
    },
    setAlertSuccessCreateModalInvisible: (state) => {
      state.alertSuccessCreateModalVisible = false;
    },
    setAlertSuccessJoinModalVisible: (state) => {
      state.alertSuccessJoinModalVisible = true;
    },
    setAlertSuccessJoinModalInvisible: (state) => {
      state.alertSuccessJoinModalVisible = false;
    },

    
    setConfirmModalVisible: (state) => {
      state.confirmModalVisible = true;
    },
    setConfirmModalInvisible: (state) => {
      state.confirmModalVisible = false;
    },
  },
})

export const { 
  setModalVisible, setModalInvisible,
  setAuthenticationModalVisible, setAuthenticationModalInvisible,
  setCreateEventModalVisible, setCreateEventModalInvisible,
  setAboutEventModalVisible, setAboutEventModalInvisible,
  setAlertModalVisible, setAlertModalInvisible,
  setAlertSuccessCreateModalVisible, setAlertSuccessCreateModalInvisible,
  setAlertSuccessJoinModalVisible, setAlertSuccessJoinModalInvisible,
  setConfirmModalVisible, setConfirmModalInvisible
 } = modalSlice.actions;

export const { reducer: modalReducer } = modalSlice;