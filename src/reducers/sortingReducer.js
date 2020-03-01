const initialState = {
    arraySize: 50,
    sortingMethod: 'mergesort',
    sortingArray: [],
    visualArray: [],
    stepQueue: [],
}

function sortingReducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_STEP_QUEUE':
            return {
                ...state,
                stepQueue: [...state.stepQueue, action.payload]
            }
        case 'CLEAR_STEP_QUEUE':
            return {
                ...state,
                stepQueue: Object.assign([])
            }
        case 'CLEAR_VISUAL_ARRAY':
            return {
                ...state,
                sortingArray: Object.assign([])
            }
        case 'SET_VISUAL_ARRAY':
            return {
                ...state,
                visualArray: [...action.payload]
            }
        default:
            return state;
    }
}

export default sortingReducer;