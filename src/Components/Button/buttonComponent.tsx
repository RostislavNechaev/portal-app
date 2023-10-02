import  { Component } from 'react';
import "./buttonComponent.scss"

type State = {
}

type Props = {  
  text: string;
  callback: () => void ;
};

class ButtonComponent extends Component<Props,State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div>
         <div className="defaultButton" onClick={this.props.callback}>{this.props.text}</div>
      </div>
    );
  }
}
export default ButtonComponent;
