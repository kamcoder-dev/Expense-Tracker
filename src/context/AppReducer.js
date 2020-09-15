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

        case 'DELETE_COST':
            return {
                ...state,
                costs: state.costs.filter(cost => cost.id !== action.payload)
            }
        case 'ADD_COST':
            return {
                ...state,
                costs: [action.payload, ...state.costs]
            }


        default:
            return state;

    }
}