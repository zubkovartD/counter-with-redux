import React from 'react';
import { connect } from 'react-redux'

class Counter extends React.Component {
    render(){
        return(
            <div>
                <button onClick={ () => this.props.dispatch({type: 'DECREMENT'}) }> - </button>
                    {this.props.count}
                <button onClick={ () => this.props.dispatch({type: 'INCREMENT'}) }> + </button>
            </div>
        );
    }
}

export default connect(state => ({count: state}))(Counter)