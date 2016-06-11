'use strict'

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

export default class Close extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { onPress, size} = this.props;
        return (
            <TouchableOpacity
                onPress={ onPress }
            >
                <Text style={ [{ fontSize: size }, styles.close] }>×</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    close: {
        // fontSize: 20,
        marginTop: 15,
        marginRight: 12,
        textAlign: 'right',
        alignItems: 'center',
    },
});
