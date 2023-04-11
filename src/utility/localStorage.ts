import AsyncStorage from '@react-native-async-storage/async-storage';

 export const storeDataLocaly = async (rackName:any,value:any) => {
    try {
      await AsyncStorage.setItem(`@${rackName}`, value)
    } catch (e) {
      // saving error
    }
  }

  export const getDataFromLocal = async (rackName:any) => {
    try {
      const value = await AsyncStorage.getItem(`@${rackName}`)
      if(value !== null) {
        return value
      }
    } catch(e) {
      // error reading value
    }
  }

 export const clearAsynStoreAll = async () => {
    try {
      await AsyncStorage.removeItem('token')
    } catch(e) {
      // clear error
      console.log('error',e)
    }
  
    console.log('Done.')
  }