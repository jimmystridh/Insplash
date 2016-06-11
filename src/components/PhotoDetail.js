'use strict'

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
    Modal,
} from 'react-native';

// components
import Header from './Header';
import Share from './Share';
import Close from './Close';

export default class PhotoDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: null,
            modalVisible: false,
        };
    }
    componentDidMount() {
        this.setState({
            photo: this.props.photo,
        });
        console.log(this.props.photo);
    }
    render() {
        const { photo } = this.props;
        return (
            <View style={ styles.container }>
                <Header
                    style={{ position: 'absolute', top: 0, }}
                    leftText="Back"
                    onLeftPress={ this.onBack.bind(this) }
                    rightText="Share"
                    onRightPress={ this.onShare.bind(this) }
                />
                <Image
                    style={ styles.banner }
                    source={{ uri: photo.urls.regular }}
                >
                </Image>
                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={ this.state.modalVisible }>
                    <Close onPress={ this.onShare.bind(this) } />
              </Modal>
            </View>
        );
    }
    onBack() {
        const { navigator } = this.props;
           if(navigator) {
               navigator.pop();
           }
    }
    onShare() {
        this.setState({
            modalVisible: !this.state.modalVisible,
        });
    }
}

const window = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    banner: {
        width: window.width,
        height: window.width,
    },
});
