import React from 'react';
import { Text, View,StyleSheet } from 'react-native';

class Multiplayer extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Multiplayer!</Text>
      </View>
    );
  }
}
export default Multiplayer;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
});