import  { Component } from 'react';
import axios from 'axios';

type State = {
  urlVal: string;
}
type Props = {};

class TestRequest extends Component<Props,State> {
  constructor(props: Props) {
    super(props);
    this.state = {urlVal: ''};
  }

  private updateUrl(evt: any) {
    const val = evt.target.value;
    this.setState({
      urlVal: val
    });
  }
  private sendTest (){
    axios.get(this.state.urlVal, { headers: {'Content-Type': 'application/x-www-form-urlencoded'} } ).then(x=> 
      console.log('test data:', x)
      )    
      .catch(x=>
        alert(`Сервер недоступен`))
  }
  render() {
    return (
      <div>   
        <input className="text-input" type="text" placeholder="url" onChange={evt => this.updateUrl(evt)}/>
        <div className="signUp-button" onClick={this.sendTest.bind(this)}>GET</div>
      </div>
    );
  }
}
export default TestRequest;
