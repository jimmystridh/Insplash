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
import Profile from './Profile';

export default class Splash extends Component {
    constructor(props) {
        super();
        this.state = {
            splashUrl: '',
            splashLoading: true,
            selectedTab: 'Splash'
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
                <TabBarIOS.Item
                    title="Splash"
                    selected={ this.state.selectedTab === 'Splash' }
                    onPress={ () => {
                        this.setState({
                            selectedTab: 'Splash'
                        });
                    } }
                >
                { this.renderHomeView() }
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="Discover"
                    selected={ this.state.selectedTab === 'Discover' }
                    onPress={ () => {
                        this.setState({
                            selectedTab: 'Discover'
                        });
                    } }
                >
                { this.renderDiscoverView() }
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="Me"
                    selected={ this.state.selectedTab === 'Me' }
                    onPress={ () => {
                        this.setState({
                            selectedTab: 'Me'
                        });
                    } }
                >
                { this.renderProfileView() }
                </TabBarIOS.Item>
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
    renderProfileView() {
        let defaultName = 'Profile';
        let defaultComponent = Profile;
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
