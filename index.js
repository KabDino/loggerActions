const initialState = { actions: [] };
const SET_ACTION = 'LOGGER_ACTIONS/SET_ACTION';

let wasShownError = false;

export const loggerActions = (state = initialState, action) => {
  if (action.type === SET_ACTION) {
    return { ...state, actions: [...state.actions, action.payload] };
  }
  return state;
};

export const loggerActionsMiddleware = exceptions => ({ dispatch }) => next => action => {
  if (typeof exceptions !== 'undefined' && !Array.isArray(exceptions) && !wasShownError) {
    console.warn('[ATTENTION] Exceptions for loggerActionsMiddleware must be an array of strings!');
    wasShownError = true;
  }

  const exceptionsList = exceptions.length ? [SET_ACTION, ...exceptions] : [SET_ACTION];
  const date = new Date();
  const time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

  if (action.type && !exceptionsList.includes(action.type)) {
    dispatch({
      type: SET_ACTION,
      payload: { [action.type]: { time, payload: action.payload } },
    });
  }

  next(action);
};
