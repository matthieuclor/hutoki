import AsyncStorage from '@react-native-async-storage/async-storage';

const test = {
  email: 'matthieuclor@gmail.com',
  password: 'immo8802',
};

export const getUserData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@userData');
    return jsonValue != null ? JSON.parse(jsonValue) : test;
  } catch (e) {
    console.log('AsyncStorage getUserData error', e);
  }
};

export const setUserData = async (data) => {
  try {
    await AsyncStorage.setItem('@userData', data);
  } catch (e) {
    console.log('AsyncStorage updateUserData error', e);
  }
};

export const clearUserData = async () => {
  try {
    await AsyncStorage.removeItem('@userData');
  } catch (e) {
    console.log('AsyncStorage clearUserData error', e);
  }
};
