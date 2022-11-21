import * as React from "react";
import * as ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";

import { AwsAmplify } from './util/aws';
import router from './router/index';

import "./assets/css/app.scss";

const amplify = new AwsAmplify();

console.log('settimeout countdown');
setTimeout(async () => {
  console.log('settimeout run');
  const pw = prompt('password : ') || '';
  await amplify.signin('khlim@notepad.me', pw);
  console.log('settimeout end');
}, 3000);

ReactDOM.render(<RouterProvider router={router} />, document.querySelector('#root'));
