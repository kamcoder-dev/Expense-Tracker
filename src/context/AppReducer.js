export default (state, action) => {
    switch (action.type) {
        case 'DELETE_TIME':
            return {
                ...state,
                times: state.times.filter(time => time.id !== action.payload)
            }
        case 'ADD_TIME':
            return {
                ...state,
                times: [action.payload, ...state.times]
            }

        default:
            return state;

    }
}