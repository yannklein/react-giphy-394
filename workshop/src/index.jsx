import '../assets/stylesheets/application.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

// const Hello = (props) => {
//   return <h1>Hello { props.firstName }!</h1>;
// };

// import React, { Component } from 'react';

// // eslint-disable-next-line react/prefer-stateless-function
// export default class Hello extends Component {
//   render() {
//     return (
//       <h1>Hello { this.props.firstName }!</h1>
//     );
//   }
// }

const reactContainer = document.querySelector("#root");
ReactDOM.render(<App />, reactContainer);
