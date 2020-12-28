const InitialState = {
    message: null,
    loading: true
}

export default (state = InitialState, action) => {
    switch(action.type){
        default:
            return state;
        case 'SET_MESSAGE':
            return {
                ...state,
                message = action.payload
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading = action.payload
            }
    }

}