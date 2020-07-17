/*import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component{
  // constructor(){
    // 
  // }
  state = {
    count: 0
  };
  // state를 set할때 react 외부의 상태에 의존하지 않는 가장 좋은방법
  // setState 안에 state를 사용하는것보다 current 함수로 사용
  // this.setState({count:this.state.count - 1}); X
  // ※setState를 호출할 때 마다 react는 새로운 state와 함께 render function을 호출
  add = () => {
    this.setState(current =>({count:current.count + 1}));
  };
  minus = () => {
    this.setState(current =>({count:current.count - 1}));
  };
  componentDidMount(){
    console.log("componentDidMount");
  }
  componentDidUpdate(){
    console.log("update");
  }
  render() {
    console.log("render");
    return <div>
              <h1>The number is: {this.state.count}</h1>
              <button onClick={this.add}>Add</button>
              <button onClick={this.minus}>Minus</button>
           </div>
  }
}

export default App;
*/