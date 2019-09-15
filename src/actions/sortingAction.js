export const updateStepQueue = payload => {
    return {
        type: "UPDATE_STEP_QUEUE",
        payload: payload
    }
}

export const clearStepQueue = () => {
    return {
        type: "CLEAR_STEP_QUEUE",
        payload: null
    }
}

export const clearVisualArray = () => {
    return {
        type: "CLEAR_VISUAL_ARRAY",
        payload: null
    }
}

export const setVisualArray = payload => {
    return {
        type: "SET_VISUAL_ARRAY",
        payload: payload
    }
}