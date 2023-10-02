import  { Component } from 'react';
import ButtonComponent from '../Button/buttonComponent';
import "./mainComponent.scss"
import TestRequest from '../testComponent/test';
import PopupComponent from '../PopupComponent/popupComponent';

type State = {
}
type Props = {  
};

class Main extends Component<Props,State> {
  constructor(props: Props) {
    super(props);
  } 

  public openCreateJobPopup(): void{
    console.log('test')
  }  

  render() {
    return (
      <div className='main'>
        <div>
          <ButtonComponent text={"Добавить"} callback={this.openCreateJobPopup}/>
          <TestRequest/>
          <PopupComponent/>
        </div>
        <div></div>
      </div>
    );
  }
}
export default Main;
