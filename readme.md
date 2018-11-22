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

## Redirect to another page
If you want redirect to another page you need use `withRouter`

```javascript
import { withRouter } from 'react-router-dom'
```

After import library in your component you can use it. If you see below it's very easy to use

```javascript
 redirectToAddCoursePage(){
        this.props.history.push('/course')
    }
```    

## Life Cycle Methods

### Updating and `componentWillReceiveProps()`

if you need populate your form then you refresh a page, you need use `componentWillReceiveProps`. This method is called when props are passed to the Component instance. Let's dig a little deeper into what this means.

```javascript

import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      course: {...this.props.course},
    }
  }

  componentWillReceiveProps(nextProps){
    if(this.state.course.id !== nextProps.course.id) {
      this.setState({course:{...nextProps.course}})
    }
  }

}    
```    

## Unit test
For write unit test I've chosen 
- mocha
- Enzyme
- expect

first you need Helper files
So let’s create the `src/test/helpers/browser.js` file, and include the following:
```javascript
import  expect  from 'expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { mount, render, shallow } from 'enzyme';

configure({ adapter: new Adapter() });

global.expect = expect;

global.mount = mount;
global.render = render;
global.shallow = shallow;    
```   