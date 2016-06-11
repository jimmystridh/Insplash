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
import Parallax from 'react-native-parallax';

// api
import unsplash from '../unsplash';

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
                <Parallax.ScrollView>
                    {
                        this.state.categories.map((category, index) => {
                            <Parallax.Image
                                key={ index }
                                style={ styles.image }
                                overlayStyle={ styles.overlay }
                                source={{ uri: category.url }}
                                parallaxFactor={ 0.3 }
                            >
                                <Text style={styles.title}>{category.title}</Text>
                            </Parallax.Image>
                        })
                    }
                </Parallax.ScrollView>
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
