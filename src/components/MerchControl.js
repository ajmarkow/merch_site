import React from "react";
import MerchList from "./MerchList";
import NewMerchForm from "./NewMerchForm";
import MerchDetail from './MerchDetail';

class MerchControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      formVisibleOnPage: false,
      masterMerchList: [],
      selectedMerch: null
    };
  }

  handleClick = () => {
    if (this.state.selectedMerch != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedMerch:null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewMerchToList = (newMerch) => {
    const newMasterMerchList = this.state.masterMerchList.concat(newMerch);
    this.setState({masterMerchList: newMasterMerchList,
                  formVisibleOnPage: false,
                  selectedMerch: null });  //For Selected ticket
  }

  handleUpdatingSelectedMerch = (id) => {
    const selectedMerch = this.state.masterMerchList.filter(merch => merch.id === id)[0];
    this.setState({selectedMerch: selectedMerch})
  }

  handleDeletingSelectedMerch = (id) => {
    const newMasterMerchList = this.state.masterMerchList.filter(merch => merch. id !== id);
    this.setState({
      masterMerchList: newMasterMerchList,
      selectedMerch: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedMerch != null) {
      currentlyVisibleState = <MerchDetail merch = {this.state.selectedMerch} onClickingDelete={this.handleDeletingSelectedMerch}/>
    buttonText = "Return to Merch List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewMerchForm onNewMerchCreation={this.handleAddingNewMerchToList} />
      buttonText = "Return to Merch List";
    } else {
      currentlyVisibleState = <MerchList merchList={this.state.masterMerchList} onMerchSelection={this.handleUpdatingSelectedMerch}/>
      buttonText = "Add Item";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button className='btn btn-danger' onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default MerchControl;