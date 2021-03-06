import React, {Component, PropTypes} from 'react';

import NLayoutA from './NLayoutA';
import NLayoutB from './NLayoutB';
import NLayoutC from './NLayoutC';
import NLayoutD from './NLayoutD';
import NLayoutE from './NLayoutE';

class NLayoutSet extends Component {
    constructor() {
        super(...arguments);
    }

    render() {
        let layout = this.props.layout;
        let component;
        switch (layout.type) {
            case "A":
                component = (<NLayoutA ref={this.props.layout.id} firstArea={this.props.first} />);
                break;
            case "B":
                component = (<NLayoutB ref={this.props.layout.id} firstArea={this.props.first} secondArea={this.props.second}/>);
                break;
            case "C":
                component = (<NLayoutC ref={this.props.layout.id} firstArea={this.props.first} secondArea={this.props.second}/>);
                break;
            case "D":
                component = (<NLayoutD ref={this.props.layout.id} firstArea={this.props.first} secondArea={this.props.second} thirdArea={this.props.third}/>);
                break;
            case "E":
                component = (<NLayoutE ref={this.props.layout.id} firstArea={this.props.first} />);
                break;
            default:
        }
        return (
            <div>
                {component}
            </div>

        );
    }
}

export default NLayoutSet;
