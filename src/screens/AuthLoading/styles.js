import {
  StyleSheet
} from 'react-native';

export const styles =
  ({ alignCenter = true }) =>
  ({
     alignItems = 'center',
     justifyContent = 'center',
     flexDirection = 'row'
  } = {}) =>
  StyleSheet.create({
    container: {
      justifyContent,
      flexDirection: alignCenter ? 'column' : flexDirection,
      alignItems
    },
    content: {
      alignItems
    }
  });

