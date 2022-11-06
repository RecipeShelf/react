import React from 'react'
import  { createRoot }  from 'react-dom/client';
import App from './src/App.jsx'
import ComponentList from './src/ComponentList.jsx';
import 'typeface-roboto'

const container = document.getElementById('root');
const root = createRoot(container);
//root.render(<App/>);
root.render(<ComponentList/>);