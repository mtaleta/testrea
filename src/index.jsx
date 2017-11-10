import React from 'react'
import ReactDOM from 'react-dom'

import Main from 'components/Main.jsx'

window.onload = function () {
  ReactDOM.render(
    <div>
      <Main />
    </div>,
        document.getElementById('root')
    )
}

// window.onload = function() {
//     ReactDOM.render(
//         <Counter />,
//         document.getElementById('root')
//     );
// };

// class Counter extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 5
//         };
//     }

//     render() {
//         return <h2>Countdown: {this.state.count}</h2>;
//     }

//     componentDidMount() {
//         this.countdownId = setInterval(() => {
//             this.setState({
//                 count: this.state.count -1
//             });
//         }, 1000);
//     }
//     componentWillUnmount() {
//         clearInterval(this.countdownId);
//     }
// }
