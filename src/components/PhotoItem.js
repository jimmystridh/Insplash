'use strict'

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Navigator,
    TouchableOpacity
} from 'react-native';

// components
import PhotoDetail from './PhotoDetail';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class PhotoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLiked: false,
        };
    }
    render() {
        const { photo } = this.props;
        return (
                <View style={ [styles.container, { backgroundColor: photo.color}] }>
                    <TouchableOpacity
                        onPress={ this.renderPhotoDetailView.bind(this) }
                        activeOpacity={ 0.9 }
                    >
                        <Image
                            style={ styles.image }
                            source={{ uri: photo.urls.regular }}
                            // defaultSource={{ uri: photo.urls.regular }}
                        />
                    </TouchableOpacity>
                    <View style={ styles.info }>
                        <TouchableOpacity
                            activeOpacity={ 0.8 }
                        >
                            <Image
                                style={ styles.avatar }
                                source={{ uri: photo.user.profile_image.medium }}
                            />
                        </TouchableOpacity>
                        <Text style={ styles.username }>{ photo.user.name }</Text>
                        <TouchableOpacity
                            style={ styles.heart }
                            onPress={ this.onLike.bind(this) }
                            activeOpacity={ 0.8 }
                        >
                            <Icon
                                style={{ lineHeight: 30, textAlign: 'right', }}
                                name={ this.state.isLiked ? 'heart' : 'heart-o' }
                                size={ 24 }
                                color="red"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
        );
    }
    renderPhotoDetailView() {
        console.log(this.props);
        const {
            navigator,
            photo,
        } = this.props;
        if(navigator) {
            navigator.push({
                name: 'PhotoDetail',
                component: PhotoDetail,
                params: {
                    photo: photo
                }
            })
        }
    }
    onLike() {
        this.setState({
            isLiked: !this.state.isLiked,
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        marginBottom: 20,
        backgroundColor: '#fff'
    },
    image: {
        height: 200,
        flex: 1,
    },
    info: {
        flexDirection: 'row',
        padding: 12,
        backgroundColor: '#fff',
    },
    avatar: {
        flex: 1,
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12,
    },
    username: {
        flex: 6,
        lineHeight: 30,
    },
    heart: {
        flex: 1,
    },
});
