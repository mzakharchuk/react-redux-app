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
## The react-redux Library
React bindings are not available in Redux by default. You will need to install an extra library called react-redux first.
```javascript
npm install --save react-redux
```
The library exports just two APIs that you need to remember, a <Provider /> component and a higher-order function known as `connect()`. 

## React-Redux Connect
The `connect()` function is used to bind React containers to Redux. What that means is that you can use the connect feature to:

  -  subscribe to the store and map its state to your props
  -  dispatch actions and map the dispatch callbacks into your props

Once you've connected your application to Redux, you can use this.props to access the current state and also to dispatch actions.
First, import `connect`

```javascript
import { connect } from 'react-redux';
```
Second, create two methods: mapStateToProps and mapDispatchToProps.
With react-redux.connect we can connect our redux store to a component:

```javascript
function mapStateToProps(state){
    let transformAuthors = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' '+ author.lastName
        }
    })
    return{
        authors: transformAuthors
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(courseActions,dispatch)
      }
}
```
mapStateToProps receives the state of the store as an argument. It returns an object that describes how the state of the store is mapped into your props. mapDispatchToProps returns a similar object that describes how the dispatch actions are mapped to your props. 

Finally, we use connect to bind the AddContact component to the two functions as follows:
```javascript
connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage)
```

>Note: `mapDispatchToProps` function we can use 3 ways

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
And `src/test/dom.js` will have our mocked DOM:
```javascript
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

function setUpDomEnvironment() {
  const dom = new JSDOM('<!doctype html><html><body></body></html>');
  const { window } = dom;

  global.window = window;
  global.document = window.document;
  global.navigator = {
      userAgent: 'node.js',
  };
  copyProps(window, global);
}

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
      .filter(prop => typeof target[prop] === 'undefined')
      .map(prop => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
}

setUpDomEnvironment();
```
Our setup is now complete. We can run our tests with `npm run test` by adding these scripts to our package.json:

```json
  "scripts": {
        "test": "mocha --compilers js:@babel/register --require ./src/test/helpers/browser.js --require ./src/test/helpers/dom.js --recursive \"./src/test/**/*.spec.js*\""
    }
```