import  { Component } from 'react';
import "./popupComponent.scss"
import Draggable from 'react-draggable';

type State = {
}
type Props = {  
};

class PopupComponent extends Component<Props,State> {
  constructor(props: Props) {
    super(props);
  }  

  render() {
    return (
        <Draggable 
        handle="strong">
        <div className="no-cursor popupBox popupBody">
          <strong className="cursor popup-header">
            <div>Drag here</div></strong>
          <div>
            TEST DATA
          </div>
        </div>
      </Draggable>
    );
  }
}
export default PopupComponent;
