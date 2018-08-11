
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Platform
} from 'react-native';
import createReactClass from 'create-react-class';
import MaterialIcons from 'react-native-vector-icons';

var CommonCell = createReactClass({

    getDefaultProps(){
      return{
          title: '',
      }
    },
    render(){
        return(
            <View style={styles.container}>
                <Text>{this.props.title}</Text>
            </View>
            //<Text><MaterialIcons name="keyboard-arrow-right" size={18} color="#4F8EF7"/></Text>

            // <Image source={{url: <MaterialIcons name="keyboard-arrow-right" size={18} color="#4F8EF7"/> }} style={{width:8, height:13}} />

    )
    }
});


const styles = StyleSheet.create({
    container:{
        height:44,
        backgroundColor:'white',
        borderBottomColor:'#dddddd',
        borderBottomWidth:0.5,
        justifyContent:'center',
    }

});

// 输出组件类
module.exports = CommonCell;
