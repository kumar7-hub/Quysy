import * as Action from '../redux/result_reducer'

export const PushAnswer = (result) => async (dispatch) => {
    try {
       await dispatch(Action.pushResultAction(result)); /** push result to result array */
    } catch (error) {
        console.log(error);
    }
}