import React, {Component, PropTypes} from 'react';

class NTextField extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            value: "",
            visible: true
        };
        this.setValue = this.setValue.bind(this);
    }

    // Compoent Render 이전 이벤트
    componentWillMount() {
        this.setState({visible: this.props.visible});
    }

    // setValue method
    setValue(value) {
        this.setState({value: value});
    }

    // Value값 변경에 따른 이벤트 처리
    handleChange(e) {
        this.setState({value: e.target.value});
    }

    // Compoent Render 이후 이벤트
    componentDidMount() {
        if (this.props.value) {
            this.setState({value: this.props.value});
        }
    }

    // Props 변경 이벤트
    componentWillReceiveProps(nextProps) {
        // Props 변경으로 Visible 제어(true|false)
        if (this.props.visible !== nextProps.visible) {
            this.setState({visible: nextProps.visible});
        }
    }

    render() {
        const {id, placeholder, required} = this.props;

        let formGroupClassName = "form-group";

        if(!this.state.visible){
            formGroupClassName = formGroupClassName + " hidden";
        }
        return (
            <div ref={id} className={formGroupClassName}>
				<label htmlFor={id}>{this.props.label}</label>
				<input type="text" id={id} name={id} value={this.state.value} placeholder={placeholder} onChange={this.handleChange.bind(this)} required={required} className="form-control" />
			</div>
        );
    }
}

NTextField.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string
};

export default NTextField;
