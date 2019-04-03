import React from 'react'

class Lifecycle extends React.Component {
    constructor() {
        super()

        this.state = {
            number: 0,
        }

        console.log('constructor')
    }

    componentWillMount() {
        console.log('componentWillMount')
    }
    //deprecated
    componentDidMount() {
        console.log('componentDidMount')
    }

    componentWillUpdate() {
        console.log('componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    render() {
        console.log('render')
        return (
            <div>
                Lifecycle
                <button
                    onClick={() => this.setState({ number: this.state.number + 1 })}>
                    Change state!
                </button>
            </div>
        )
    }
}

export default Lifecycle