'use strict'

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
} from 'react-native';

// components
import Loading from '../../components/Loading';
import PhotoList from '../../components/PhotoList';
import Header from '../../components/Header';
// api
import unsplash from '../../unsplash';

export default class Home extends Component {
    constructor(props) {
        super(props);
        let dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !==r2,
            enableEmptySections: true
        });
        this.state = {
            dataSource: dataSource,
            isLoading: true,
            title: 'Insplash',
        };
    }
    componentDidMount() {
        let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !==r2
        });
        unsplash.photos.listPhotos(1, 15, 'latest')
        .then(response => response.json())
        .then((photos) => {
            console.log(photos);
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(photos),
                isLoading: false
            });
        })
        .catch((error) => {
            this.setState({
                dataSource: this.state.dataSource
            });
        })
        .done();
    }
    onEndReached() {
        console.log('end');
    }
    render() {
        if(this.state.isLoading) {
            return this._renderLoading();
        }
        return (
            <View style={ styles.container }>
                <Header
                    title={ this.state.title }
                    leftText = "Menu"
                    onLeftPress={ () => {
                        console.log('Menu clicked.');
                    } }
                    rightText = "User"
                ></Header>
                <PhotoList
                    style={{ marginTop: 64, }}
                    dataSource={ this.state.dataSource }
                    navigator={this.props.navigator}
                ></PhotoList>
            </View>
        );
    }
    _renderLoading() {
        return (
            <Loading></Loading>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        paddingBottom: 49,
    },
    listView: {
        flex: 1,
        overflow: 'hidden',
    }
});
