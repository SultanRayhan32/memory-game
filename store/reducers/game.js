

const INITIAL_STATE = { result : [] ,  selectedHuruf : [] , winWord : [] };

export default (state = INITIAL_STATE , action) =>{
    switch (action.type) {
        case 'generate':
            return {  ...state , result : action.data }
        case 'pertama' :
            console.log(action.data)
            return {...state , selectedHuruf : action.data}
        case 'berhasil' :
            let temp = state.winWord
            temp.push(action.data)
            return {...state  ,  winWord : temp , selectedHuruf : []}
        case 'wrong' : 
            return { ...state , selectedHuruf : []}
        case 'reset' :
            return { ...state ,  selectedHuruf : [] ,  winWord : [] }
        default:
            return state
    }
}