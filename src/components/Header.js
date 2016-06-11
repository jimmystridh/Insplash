'use strict'

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            style,
            title,
            onTitlePress,
            leftText,
            onLeftPress,
            rightText,
            onRightPress,
        } = this.props;
        return (
            <View style={ [styles.container] }>
                <View style={ styles.status }></View>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="default"
                    hidden={ false }
                    showHideTransition="slide"
                />
                <View style={ styles.title }>
                    <TouchableOpacity
                        style={ [{ flex: 1, }] }
                        onPress={ onLeftPress }
                    >
                        <Text>{ leftText }</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={ [{ flex: 5, }] }
                        onPress={ onTitlePress }
                    >
                        <Text style={[styles.text, ]}>{ this.props.title }</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={ [{ flex: 1, }] }
                        onPress={ onRightPress }
                    >
                        <Text style={{ textAlign: 'right', }}>{ rightText }</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        width: width,
        height: 64,
        backgroundColor: '#fff',
    },
    status: {
        flex: 5,
    },
    title: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 11,
        paddingLeft: 12,
        paddingRight: 12,
    },
    text: {
        textAlign: 'center',
    },
});
