# Logger actions
This is the package provides middleWare for logging actions using Redux
## Installation
```sh
npm install logger-actions
```
## Usage
To use the package you need to add `loggerActionsMiddleWare()` from **logger-actions** in your _middleWare_. Then you need to add `loggerActions` to _combineReducers_

Also you can add **exceptions** if you don't want some action log in your store. For this you need to add exceptions as array of strings  in `loggerActionsMiddleWare()`.

For example 
```sh
loggerActionsMiddleWare(['APP/SHOW_LOADING', 'APP/HIDE_LOADING'])
```

Now you can see `loggerActions` in your state tree