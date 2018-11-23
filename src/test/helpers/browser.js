import  expect  from 'expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { mount, render, shallow } from 'enzyme';

global.expect = expect;

global.mount = mount;
global.render = render;
global.shallow = shallow;

configure({ adapter: new Adapter() });