import React from 'react';
import Bmi from './Bmi';


interface State {
  count: number 
}
class App extends React.Component<{}, State>{
  
  constructor(props: any) {
    super(props)
    this.state = {
      count: 0,
    };

  }

  render() {
    return (<div>
      <p>{this.state.count}</p>
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        count up
      </button>
        <Bmi/>
      <div>
      </div>
    </div>);
  }
}


export default App;
