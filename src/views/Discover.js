'use strict'

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

// components
import Header from '../components/Header';

export default class Discover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //
        };
    }
    render() {
        return (
            <View style={ styles.container }>
                <Header
                    title="Discover"
                />
                <Text>Discover</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 64,
    }
});
