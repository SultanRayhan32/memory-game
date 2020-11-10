import React , { Component } from 'react';
import { View , Text , StyleSheet ,  Button } from 'react-native'
import Constants from 'expo-constants'
import { connect } from 'react-redux'

import { RESET_GAME } from '../store/action'

class ThankYouPage extends Component {

    succesGame = () =>{
        this.props.RESET_GAME() 
        this.props.navigation.navigate('Home')
    }

     static navigationOptions = {
            title: 'Home',
            headerStyle: {
                display : 'none'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
    };

    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.Message} >Congratulations!!!!</Text>
                <Text style={styles.Message} >Thank You For Playing</Text>
                <Button
                onPress={()=>this.succesGame()}
                title="Back To Game"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        marginTop : Constants.statusBarHeight,
        textAlign : 'center',
        justifyContent : 'center',
        alignItems : 'center'
    },
    Message : {
        fontSize : 30,
        color : 'black'
    }
})

export default connect(null , { RESET_GAME }) (ThankYouPage);
