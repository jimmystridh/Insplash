'use strict'

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
} from 'react-native';

// components
import PhotoItem from '../components/PhotoItem';

export default class PhotoList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            dataSource,
            navigator,
            style,
        } = this.props;
        return (
            <ListView
                style={ [styles.listView, style] }
                // removeClippedSubviews={ true }
                dataSource={ dataSource }
                renderRow={(data) => {
                    return (
                        <PhotoItem
                            photo={ data }
                            navigator={ navigator }
                        />
                    );
                }}
                onEndReached={this.onEndReached}
            ></ListView>
        );
    }
    onEndReached() {
        console.log('end');
    }
}

const styles = StyleSheet.create({
    listView: {
        flex: 1,
        overflow: 'hidden',
    }
});
