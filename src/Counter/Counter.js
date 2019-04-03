import React from 'react'

class Counter extends React.Component {

    state = {
        number: this.props.number || 0
    }

    inc = () => this.setState({ number: this.state.number + 1 })
    dec = () => this.setState({ number: this.state.number - 1 })
    reset = () => this.setState({ number: this.props.number || 0 })



    render() {
        return (
            <div>
                <h1>
                    {this.state.number}
                </h1>

                <button
                    onClick={this.inc}
                >
                    +
                </button>
                <button
                    onClick={this.dec}
                >
                    -
                </button>
                <button
                    onClick={this.reset}
                >
                    reset
                </button>

            </div>
        )
    }
}


export default Counter