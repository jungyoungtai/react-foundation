import React, {Component, PropTypes} from 'react';
import {FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap';

import NConstraint from '../constraints/NConstraint';

class NComboBox extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            value: "",
            options: []
        };
    }

    // Compoent Render 이전 이벤트
    componentWillMount() {
        let _this = this;

        if (this.props.code_grp_id) {
            // 콤보박스 Data 요청
            $.ajax({
                type: "POST",
                url: NConstraint.HOST + '/itg/base/searchCodeDataList.do',
                contentType: "application/json",
                dataType: "json",
                async: true,
                data: JSON.stringify(this.props),
                success: function(data) {
                    if (data.success) {
                        _this.setState({options: data.gridVO.rows});
                    } else {
                        showMessage(data.resultMsg);
                    }
                }
            });
        }

        if (this.props.options) {
            this.setState({options: this.props.options});
        }
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

    render() {
        let text = NConstraint.DEFAULT_OPTION_NAME;
        let value = NConstraint.DEFAULT_OPTION_VALUE;

        let options = this.state.options;
        let renderOptions = (options.map((option) => {
            return (
                <option key={option[value]} value={option[value]}>{option[text]}</option>
            );
        }));

        return (
            <FormGroup controlId={this.props.id}>
                <ControlLabel>{this.props.label}</ControlLabel>
                <FormControl componentClass="select" name={this.props.id} value={this.state.value} placeholder={this.props.placeholder} onChange={this.handleChange.bind(this)}>
                    {renderOptions}
                </FormControl>
            </FormGroup>
        );
    }
}

NComboBox.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string
};

export default NComboBox;
