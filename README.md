# Logger actions
This is the package provides middleware for logging actions using Redux

## Installation
```sh
npm install logger-actions
```

## Usage
To use the package you need
- To add `loggerActionsMiddleware()` from **logger-actions** in your _middleware_. 
- To add `loggerActions` from **logger-actions** to _combineReducers_

## Params
`loggerActionsMiddleware()` takes 2 optional parameters

|     Param      | Default value |   Type   | For what |
| -------------- | ------------- | -------- | -------- |
| **exceptions** |      []       | string[] | You can add **exceptions** if you don't want some action log in your store
| **stackSize**  |      150      |  number  | To prevent the stack from overflowing with actions, we added a limit of 150 elements. You can change this restriction with the second parameter

_For example_
```sh
loggerActionsMiddleware(['APP/SHOW_LOADING', 'APP/HIDE_LOADING'])
loggerActionsMiddleware(['APP/SHOW_LOADING', 'APP/HIDE_LOADING'], 100)
loggerActionsMiddleware([], 50)
loggerActionsMiddleware()
```

Now you can see `loggerActions` in your state tree
