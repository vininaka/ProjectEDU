import React from 'react';
import {WebView } from 'react-native';

export default class ProjectCostManagement extends React.Component {

  render() {
    return (
      <WebView
        source={{uri: 'https://www.youtube.com/embed/KqsOqMFwJO4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'}}
        style={{marginTop: 20}}
      /> 
    );
  }
}
