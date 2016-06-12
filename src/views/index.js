'use strict'

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TabBarIOS,
    Navigator,
} from 'react-native';

// views
import Home from './Home';
import Discover from './Discover';
import Me from './Me';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Main extends Component {
    constructor(props) {
        super();
        this.state = {
            splashUrl: '',
            splashLoading: true,
            selectedTab: 'Photos'
        };
    }
    componentDidMount() {
        //
    }
    render() {
        return (
            <TabBarIOS
                tintColor="#333"
                barTintColor="#ddd"
                style={ styles.tabBar }
            >
                <Icon.TabBarItemIOS
                    iconName="camera"
                    selectedIconName="camera"
                    iconSize={ 24 }
                    title="Photos"
                    selected={ this.state.selectedTab === 'Photos' }
                    onPress={ () => {
                        this.setState({
                            selectedTab: 'Photos'
                        });
                    } }
                >
                { this.renderHomeView() }
                </Icon.TabBarItemIOS>
                <Icon.TabBarItemIOS
                    iconName="compass"
                    selectedIconName="compass"
                    iconSize={ 24 }
                    title="Discover"
                    selected={ this.state.selectedTab === 'Discover' }
                    onPress={ () => {
                        this.setState({
                            selectedTab: 'Discover'
                        });
                    } }
                >
                { this.renderDiscoverView() }
                </Icon.TabBarItemIOS>
                <Icon.TabBarItemIOS
                    iconName="user"
                    selectedIconName="user"
                    iconSize={ 24 }
                    title="Me"
                    selected={ this.state.selectedTab === 'Me' }
                    onPress={ () => {
                        this.setState({
                            selectedTab: 'Me'
                        });
                    } }
                >
                { this.renderMeView() }
                </Icon.TabBarItemIOS>
            </TabBarIOS>
        );
    }
    renderHomeView() {
        let defaultName = 'Home';
        let defaultComponent = Home;
        return (
            <Navigator
                initialRoute={{ name: defaultName, component: defaultComponent }}
                configureScene={ (route) => Navigator.SceneConfigs.PushFromRight }
                renderScene={ (route, navigator) => {
                    let Component = route.component;
                    return (
                        <Component { ...route.params } navigator={ navigator }></Component>
                    );
                } }
            />
        );
    }
    renderDiscoverView() {
        let defaultName = 'Discover';
        let defaultComponent = Discover;
        return (
            <Navigator
                initialRoute={{ name: defaultName, component: defaultComponent }}
                configureScene={ (route, routeStack) => Navigator.SceneConfigs.FloatFromRight }
                renderScene={ (route, navigator) => {
                    let Component = route.component;
                    return (
                        <Component { ...route.params } navigator={ navigator }></Component>
                    );
                } }
            />
        );
    }
    renderMeView() {
        let defaultName = 'Me';
        let defaultComponent = Me;
        return (
            <Navigator
                initialRoute={{ name: defaultName, component: defaultComponent }}
                configureScene={ (route) => Navigator.SceneConfigs.VerticalDownSwipeJump }
                renderScene={ (route, navigator) => {
                    let Component = route.component;
                    return (
                        <Component { ...route.params } navigator={ navigator }></Component>
                    );
                } }
            />
        );
    }
}

const styles = StyleSheet.create({
    containerCenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        textAlign: 'center',
        fontSize: 30
    },
    splash: {
        width: 300,
        height: 800
    },
    tabBar: {
        height: 49,
    },
});
