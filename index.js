const initialState = { actions: [] };
const SET_ACTION = 'LOGGER_ACTIONS/SET_ACTION';

let wasShownError = false;

export const loggerActions = (state = initialState, action) => {
  if (action.type === SET_ACTION) {
    const arrLength = state.actions.length;
    const stackSize = action.stackSize - 1;
    return {
      actions:
        arrLength > stackSize
          ? [action.payload, ...state.actions.splice(0, stackSize)]
          : [action.payload, ...state.actions],
    };
  }
  return state;
};

const formattingTime = val => {
  return val < 10 ? '0' + val : val;
};

export const loggerActionsMiddleware = (exceptions, stackSize = 150) => ({ dispatch }) => next => action => {
  if (typeof exceptions !== 'undefined' && !Array.isArray(exceptions) && !wasShownError) {
    console.warn('[ATTENTION] Exceptions for loggerActionsMiddleware must be an array of strings!');
    wasShownError = true;
  }

  const exceptionsList = exceptions?.length ? [SET_ACTION, ...exceptions] : [SET_ACTION];
  const date = new Date();
  const time =
    formattingTime(date.getHours()) +
    ':' +
    formattingTime(date.getMinutes()) +
    ':' +
    formattingTime(date.getSeconds());

  if (action?.type && !exceptionsList.includes(action?.type)) {
    dispatch({
      type: SET_ACTION,
      payload: { name: action.type, payload: action.payload, time },
      stackSize,
    });
  }

  next(action);
};
