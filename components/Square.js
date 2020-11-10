import React , { Component } from 'react'
import { View ,  Text , StyleSheet ,  TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'

import { MATCH_WORD } from '../store/action'



class Square extends Component { 

    constructor ( props) {
        super(props),
        this.state = {
            checkWord : false
        }
    }

    componentWillReceiveProps () {
        if(this.props.boardNow >= 19) {
            this.props.WINNER()
        }
    }


    tes = () => {
        this.setState({
            checkWord : false
        })
        this.props.MATCH_WORD(this.props.selectWord , this.props.huruf)
        console.log(this.props.selectWord , ' <<<< SELECTED WORD')
        console.log(this.props.winWord , ' <<<< WIN WORD')
        if(this.props.winWord.length == 4){
            this.props.navigation.navigate('Finish')
        }
        this.setState({
            checkWord : true
        })
    }



    render ( ) {
        return (
            <TouchableOpacity onPress={()=> this.tes() }>
                <View style={style.square}>
                    <Text style={{ fontSize : 25 ,  textAlign : 'center' , marginTop : 5 }}>
                        {
                            this.props.winWord.includes(this.props.huruf) || this.props.selectWord.includes(this.props.huruf)  ? this.props.huruf : ''
                        } 
 
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const style = StyleSheet.create({
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
        selectWord : state.game.selectedHuruf ,
        winWord : state.game.winWord
    }
}

export default connect(mapStateToProsp , { MATCH_WORD })  (Square);