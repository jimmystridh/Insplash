'use strict'

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
} from 'react-native';

// components
import Header from '../../components/Header';
// import Parallax from 'react-native-parallax';

// api
import unsplash from '../../unsplash';

export default class Discover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
        };
    }
    componentDidMount() {
        unsplash.categories.listCategories()
        .then(response => response.json())
        .then(categories => {
            this.setState({
                categories: categories,
            });
        });
    }
    render() {
        return (
            <View style={ styles.container }>
                <Header
                    title="Discover"
                />
            </View>
        );
    }
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 64,
    },
    image: {
        width: width,
        height: 200,
    },
    overlay: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
});
