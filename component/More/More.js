import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image} from 'react-native';
import createReactClass from 'create-react-class';
import { createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';


class Hometitle extends React.Component{
    render(){
        return(
            <View>
                <Text>更多</Text>
            </View>
        )}}
class HomeHeaderLeft extends React.Component{
    render(){
        return(
            <Button style={{width:2, height:40,}} title='城市'/>
            // <TouchableOpacity onPress={this._onPressButton}>
            //     <Image
            //         source={<Ionicons name="ios-qr-scanner" size={25} color={tintColor}/>}/>
            // </TouchableOpacity>
        )}}
class HomeHeaderRight extends React.Component{
    render(){
        return(
            <Button
                title='搜索'
            ></Button>
        )}}

class HomeScreen extends React.Component{
    static navigationOptions =({
        headerTitle: <Hometitle/>, //<TextInput></TextInput>,
        // headerLeft: <HomeHeaderLeft />,
        // headerRight: <HomeHeaderRight />,
        headerStyle: {
            backgroundColor: '#f4511e',}})
    render(){
        return(
            <View style={{flex:1}}>
                <Text>xxxx</Text>
                <Button
                    title = 'HELLO'
                    onPress ={()=> this.props.navigation.navigate('Details')}
                ></Button>
            </View>
        )
    }
}

class DeatilScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
                <Text>Deatil</Text>
            </View>
        )}}

const Screen = createStackNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Details: {
            screen: DeatilScreen
        }
    },
    {
        initialRouteName: 'Home'
    },
)

var More = createReactClass({
    render() {
        return (
            <Screen />
        );
    }
})


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    HeaderTitle: {
        width: 250,
        height: 30,
        backgroundColor:'white',
        justifyContent:'center',
        borderRadius: 18,
        //alignItems: 'center'
        paddingLeft: 8,
    },
    HeaderLeft: {

    },
    HeaderRight: {

    },
});

// output class
module.exports = More;