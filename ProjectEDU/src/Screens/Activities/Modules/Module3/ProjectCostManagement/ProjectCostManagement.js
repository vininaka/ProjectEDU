import React from 'react';
import {StyleSheet,WebView} from 'react-native';

export default class ProjectCostManagement extends React.Component {

  render() {
    return (
      <WebView
        style={ styles.WebViewContainer }
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{uri: 'https://www.youtube.com/embed/KqsOqMFwJO4' }}
      />
    );
  }
}
const styles = StyleSheet.create({
 
  WebViewContainer: {
      marginTop: (Platform.OS == 'ios') ? 20 : 0,
    }
    
  });