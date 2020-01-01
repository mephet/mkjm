export const resizeWindow = payload => {
    return {
        type: "UPDATE_VIEWPORT_WIDTH_HEIGHT",
        payload: payload
    }
}