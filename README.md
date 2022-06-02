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

Also you can add **exceptions** if you don't want some action log in your store. For this you need to add exceptions as array of strings  in `loggerActionsMiddleware()`.

For example 
```sh
loggerActionsMiddleware(['APP/SHOW_LOADING', 'APP/HIDE_LOADING'])
```

Now you can see `loggerActions` in your state tree