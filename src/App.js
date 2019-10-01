import React, {Component} from 'react';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos : [
      {
        id : 1,
        title : 'Develop react',
        completed: false
      },
      {
        id : 2,
        title : 'Training PQM',
        completed: false
      },
      {
        id : 3,
        title : 'Read Training',
        completed: false
      },      
    ]
  }
  render(){
    return(
    <div className = "App">
        <Todos todos = {this.state.todos} />
    </div>
    );
  }
}

export default App;
