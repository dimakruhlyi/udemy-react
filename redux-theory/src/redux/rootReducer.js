const initialState = {
    counter: 0
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case 'ADD':
            return{
                counter: state.counter + 1
            }
        case 'SUB':
            return{
                counter: state.counter - 1
            }
        case 'ADDFIVE':
            return{
                counter: state.counter + 5
            }
        default:
            return{
                counter: state.counter
            }
    }
}