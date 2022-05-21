const initialState = { actions: [] };
const SET_ACTION = 'LOGGER_ACTIONS/SET_ACTION';

export const loggerActions = (state = initialState, action) => {
  if (action.type === SET_ACTION) {
    return { ...state, actions: [...state.actions, action.payload] };
  }
  return state;
};

export const loggerActionsMiddleWare = exceptions => ({ dispatch }) => next => action => {
    const date = new Date();
    const time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    let EXCEPTION_LIST = [SET_ACTION];
    
    if (typeof exceptions !== 'undefined' && !Array.isArray(exceptions)) {
      console.error('ExceptionsList for customMiddleWare must be an array of strings');
    } else {
      EXCEPTION_LIST = EXCEPTION_LIST.concat(exceptions);
    }

    if (action.type && !EXCEPTION_LIST.includes(action.type)) {
      dispatch({
        type: SET_ACTION,
        payload: { [action.type]: { time, payload: action.payload } },
      });
    }

    next(action);
  };
