import  { Component } from 'react';
import Menu from './Components/MenuComponent/menuComponent';
import Main from './Components/MainComponent/mainComponent';
import "./App.css"

type State = {
}
type Props = {  
};

class App extends Component<Props,State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className='app'>
        <Menu />
        <Main />
      </div>
    );
  }
}
export default App;
