export const setMessage = (data) => {
    return (
        (dispatch) => {
            dispatch(
                {
                    type: "SET_MESSAGE",
                    payload: data
                }
            )
        }
    )

}