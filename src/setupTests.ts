// setupTests.js
import {configure} from 'enzyme';

// To kill the error for the import style
// import Adapter from 'enzyme-adapter-react-16';
const Adapter = require('enzyme-adapter-react-16');

configure({adapter: new Adapter()});