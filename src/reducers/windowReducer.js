const initialState = {
    viewportWidth: window.innerWidth,
    viewportHeight: window.innerHeight
}

const windowReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_VIEWPORT_WIDTH_HEIGHT':
            return {
                ...state,
                viewportHeight: action.payload.height,
                viewportWidth: action.payload.width,
            }
        default:
            return state;
    }
}

export default windowReducer;