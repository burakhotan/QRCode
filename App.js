import React from 'react';
import {View, StyleSheet} from 'react-native';
//imports
import QRCodeReader from './components/QRCodeReader';

const App = () => {
  return (
    <View style={styles.container}>
      <QRCodeReader />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  }

})
export default App;
