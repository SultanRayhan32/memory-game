

let str = ['a','b','c','d','a','b','c','d']
let tempRandom = []
function Random (index) {
    let random = Math.floor(Math.random() * str.length);
    let arr = tempRandom.filter(el => el === str[random] )
    console.log(arr , ' ini hasil filter')
    if( arr.length >= 2 ){
        return Random()
    }else {
        tempRandom.push(str[random])
    }

}

export const GENERATE_GAME = () =>{
    return (dispatch) =>{
      for(let i = 0; i < 8; i++){
        Random(i)
      }
      dispatch({
          type : 'generate',
          data : tempRandom
      })
      tempRandom = []
    }

}

export const MATCH_WORD = (arr , word) =>{
  return (dispatch) => {
    // console.log(arr , word)
    let arrTemp = arr
    if(arrTemp.length == 0) { 
        console.log('MASUK SINI')
        console.log(arrTemp)
        arrTemp.push(word)
        console.log(arrTemp)
        dispatch({
          type : 'pertama' ,
          data : arrTemp
        })
    }else if( arr.length == 1){
      if(arrTemp[0] == word){
        dispatch({
          type : 'berhasil',
          data : word
        })
      }else {
        dispatch({
          type : 'wrong' 
        })
      }
    }
  }
}

export const RESET_GAME = () =>{
  return (dispatch) =>[
    dispatch({
      type : 'reset'
    })
  ]
}

