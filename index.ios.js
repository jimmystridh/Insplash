/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Splash from './src/views/Splash.js';

class Insplash extends Component {
    render() {
        return (
            <Splash></Splash>
        );
    }
}

AppRegistry.registerComponent('Insplash', () => Insplash);
