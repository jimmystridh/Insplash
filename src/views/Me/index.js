'use strict'

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Modal,
    WebView,
    Image,
    Dimensions,
} from 'react-native';

// components
// import { BlurView } from 'react-native-blur';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Close from '../../components/Close';

// api
import unsplash, { authenticationUrl } from '../../unsplash';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            username: '',
            avatar: '',
            totalCollections: null,
            totalLikes: null,
            totalPhotos: null,
            downloads: null
        };
    }
    componentDidMount() {
        unsplash.users.profile('clear')
        .then(response => response.json())
        .then(user => {
            console.log(user);
            this.setState({
                username: user.username,
                avatar: user.profile_image.medium,
                totalCollections: user.total_collections,
                totalLikes: user.total_likes,
                totalPhotos: user.total_photos,
                downloads: user.downloads,
            });
        });
        console.log(authenticationUrl);
    }
    render() {
        const {
            username,
            avatar,
            totalCollections,
            totalLikes,
            totalPhotos,
            downloads,
        } = this.state;
        return (
            <ParallaxScrollView
                backgroundColor="#fff"
                parallaxHeaderHeight={ 300 }
                renderBackground={() => (
                    <Image
                        style={{ width: window.width, height: 300, }}
                        source={{ uri: 'https://images.unsplash.com/photo-1465636360230-1255730fa033?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=2ee7647b3a0ffe01816a0f7f0e209b75' }}
                    ></Image>
                )}
                renderForeground={() => (
                    <View style={{ height: 300, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            style={{ width: 100, height: 100, borderRadius: 25, }}
                            source={{ uri: 'https://d13yacurqjgara.cloudfront.net/users/60266/avatars/small/83d4ac61d50bf5b2fedc9f9cc45a62d9.png' }}
                        ></Image>
                    </View>
                )}
                stickyHeaderHeight={ 64 }
                renderStickyHeader={() => (
                    <View style={ styles.stickySection }>
                        <Text style={ styles.fixedSectionText }>JustClear</Text>
                    </View>
                )}
            >
                <View style={ styles.container }>
                    <Text>Profile</Text>
                    <TouchableOpacity
                        onPress={this.toggleModal.bind(this)}
                        size={ 30 }
                    >
                        <Text>Login</Text>
                    </TouchableOpacity>
                    <Modal
                        animationType={'slide'}
                        transparent={false}
                        visible={ this.state.modalVisible }>
                        <Close onPress={ this.toggleModal.bind(this) } ></Close>
                        <WebView
                            style={ styles.webview }
                            source={{ uri: authenticationUrl }}
                            onLoadStart={() => {
                                console.log('onLoadStart: ' + authenticationUrl);
                            }}
                            onLoad={() => {
                                console.log('onLoad');
                            }}
                            onLoadEnd={() => {
                                console.log('onLoadEnd');
                            }}
                        />
                  </Modal>
                </View>
            </ParallaxScrollView>
        );
    }
    onLogin() {
        console.log('login');
    }
    toggleModal() {
        this.setState({
            modalVisible: !this.state.modalVisible
        });
    }
}

const window = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    webview: {
        // flex: 1,
        width: 375,
        height: 500,
        backgroundColor: '#ddd'
    },
    stickySection: {
        height: 64,
        width: window.width,
        justifyContent: 'flex-end',
        backgroundColor: '#fff',
    },
    fixedSection: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    fixedSectionText: {
        position: 'absolute',
        bottom: 12,
        width: window.width,
        fontSize: 20,
        textAlign: 'center',
    },
});
