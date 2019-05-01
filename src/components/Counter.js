import React, {Component} from "react";
import PropTypes from "prop-types";
import Controls from "../containers/Controls";

class Counter extends Component {
    render() {

        const {count} = this.props;

        return (

            <div className="row">
                <div className="col-6">
                    <div className="btn-group">
                        <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Action
                            <span className="caret"></span>
                        </button>
                        <ul className="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li role="separator" className="divider"></li>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-6 counter">
                    <div>{count}</div>
                    <Controls/>
                    <hr/>
                    <span>
                        <a href='https://github.com/Gigacore/React-Redux-Starter'>Fork it on Github</a>
                    </span>
                </div>
            </div>
        );
    }
}

Counter.propTypes = {
    count: PropTypes.number
};

export default Counter;
