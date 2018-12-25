import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchSample } from '../../actions/sample-action';

class ReduxSample extends Component {
    sampleAction() {
        this.props.actions.fetchSample();
    }

    render() {
        return (
            <div>
                <h3>This page has example for redux store. Plese click the below button to see the change using store!!</h3>
                <div className="redux-container col-12">
                    <pre>Store value: { JSON.stringify(this.props.sample) } </pre>
                    <button onClick={this.sampleAction.bind(this)}>Test redux action</button>
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({fetchSample}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps) (ReduxSample);
