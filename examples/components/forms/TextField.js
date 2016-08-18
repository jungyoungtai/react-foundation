import React, {Component, PropTypes} from 'react';
import {Form, FormGroup, FormControl, ControlLabel, HelpBlock, Feedback} from 'react-bootstrap';

class TextField extends Component{

  constructor() {
    super(...arguments);
		this.state = {
			value: ""
    }
  }

  // Value값 변경에 따른 이벤트 처리
  handleChange(e) {
  	this.setState({ value: e.target.value });
  }

  // Compoent Render 이후 이벤트
  componentDidMount() {
    if(this.props.value){
      this.setState({ value: this.props.value });
    }
  }

  render(){

    return(
      <form>
        <FormGroup controlId={this.props.id}>
          <ControlLabel>{this.props.label}</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder={this.props.placeholder}
            onChange={this.handleChange.bind(this)}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
      </form>
    )
  }
}

TextField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string
}

export default TextField;