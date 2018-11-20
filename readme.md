# React + redux + webpack 4

install packages
```json
  npm install
```

start
```json
  npm run start
```
below you can see a bit notation about connection `React-Redux`


## React-Redux Connect

```javascript
connect(mapStateToProps, mapDispatchToProps)
```
In component 
```javascript
connect(mapStateToProps, mapDispatchToProps)(HomePage)
```


###  handle `mapStateToProps`
```javascript
function mapStateToProps(state){
  return {
      appState: state
    }
} 
```



### 3 ways to handle `mapDispatchToProps`

1. Ignore it. Use dispatch
```javascript
this.props.dispatch(loadCourses())   
```

2. Manually wrap
```javascript
function mapDispatchToProps(dispatch){
  return{
    loadCourses: () => {
      dispatch(loadCourses())
    }
  }
}
```

3. Use `bindActionCreators`
```javascript
function mapDispatchToProps(dispatch){
  return{
    actions: () => {
      bindActionCreators(actions, dispatch)
    }
  }
}
```
In component:
```javascript
this.props.actions.loadCourses()
```


