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

export default class PhotoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //
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
                    <View style={{ flexDirection: 'row', padding: 12, backgroundColor: '#fff', }}>
                        <TouchableOpacity
                            activeOpacity={ 0.8 }
                        >
                            <Image
                                style={ styles.avatar }
                                source={{ uri: photo.user.profile_image.medium }}
                            />
                        </TouchableOpacity>
                        <Text style={{ lineHeight: 30, }}>{ photo.user.name }</Text>
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
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12,
    },
});
