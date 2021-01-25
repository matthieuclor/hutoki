import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUserData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@userData');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('AsyncStorage getUserData error', e);
  }
};

export const setUserData = async (data) => {
  try {
    await AsyncStorage.setItem('@userData', JSON.stringify(data));
  } catch (e) {
    console.log('AsyncStorage setUserData error', e);
  }
};

export const clearUserData = async () => {
  try {
    await AsyncStorage.removeItem('@userData');
  } catch (e) {
    console.log('AsyncStorage clearUserData error', e);
  }
};
