import React , { Component } from 'react'
import { View ,  Text , StyleSheet , Image } from 'react-native';
import Constants from 'expo-constants'
import { connect } from 'react-redux'

import Square from '../components/Square'



class Game extends Component { 

    constructor (props) {
        super(props)
    }

     static navigationOptions = {
            title: 'Home',
            headerStyle: {
                display : 'none',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
    };

    renderGameF = () =>{
        let arr = [1,2,3,4,5,6,7,8,9]
        console.log(this.props.board ,  ' MASUK KE GAME')
       return this.props.board.map((i , index)=>{
           if(index == 3){
               return (
                   <>
                    <Square navigation={this.props.navigation}  index={index} huruf={i} key={index}/> 
                    <View style={style.square}>
                        <Image
                            style={{ height : '100%' , width : '100%' }}
                            source={{uri : 'data:image/png;base64,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'}}
                        />
                    </View>
                   </>
               )
           }else {
               return (
                   <Square navigation={this.props.navigation} index={index} huruf={i} key={index} />
               )
           }
       })
    }



    render () {
        return (
            <View style={ style.container }>
                <Text>{this.props.dice}</Text>
                <View style={style.gameBoards}>
                   {
                       this.renderGameF()
                   }
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    gameBoards : {
      flexDirection : 'row'    ,
      flexWrap : 'wrap',
      alignItems : 'center',
      justifyContent : 'center',
      marginTop : 5,
      width : '80%'
    },
    container : {
        flex : 1,
        marginTop : Constants.statusBarHeight,
        textAlign : 'center',
        justifyContent : 'center',
        alignItems : 'center'
    },
    square : {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'green',
        height : 60,
        width : 80
    }
})

const mapStateToProsp = (state) => {
    return {
        board : state.game.result
    }
}


export default connect(mapStateToProsp , {  }) (Game)