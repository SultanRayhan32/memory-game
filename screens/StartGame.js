import React , { Component } from 'react'
import { View ,  Button , Text , StyleSheet } from 'react-native';
import Constants from 'expo-constants'
import { connect } from 'react-redux'

import { GENERATE_GAME  } from '../store/action'

class Home extends Component {

    constructor (props) {
        super(props)
    }

    generateRandom = () =>{
        this.props.GENERATE_GAME()
        this.props.navigation.navigate('Game')

    }

    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.tulisan}>Enter Game</Text>
                <Button
                onPress={ ()=>this.generateRandom() }
                title="Start Game"
                />
            </View>
        )
      
    }

     static navigationOptions = {
            title: 'Home',
            headerStyle: {
                display : 'none',
                backgroundColor: '#141931'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
    };

}

const styles = StyleSheet.create({
    container : {
        marginTop : Constants.statusBarHeight,
        justifyContent : 'center',
        flex: 1,
        width : '100%',
        alignItems : 'center'
    },
    tulisan : {
        fontSize : 20,
        color : 'black',
        marginBottom :  10
    }
})



export default connect(null , { GENERATE_GAME }) (Home);