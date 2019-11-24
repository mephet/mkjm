const initialState = {
    viewportWidth: 0,
    viewportHeight: 0
}

const windowReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_VIEWPORT_WIDTH_HEIGHT':
            return {
                ...state,
                viewportHeight: action.payload.width,
                viewportWidth: action.payload.height,
            }
        default:
            return state;
    }
}

export default windowReducer;