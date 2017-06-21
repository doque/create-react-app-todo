import React from 'react';
import ReactDOM from 'react-dom';

import List from './List/';
import './index.css';

// Load dummy data from JSON file
const doctors = require('./doctors.json').doctors;

ReactDOM.render(<List doctors={doctors} />, document.getElementById('root'));
