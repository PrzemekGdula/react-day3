import React from 'react'

class Lifecycle extends React.Component {

    // MOUNTING

    constructor() {
        super()

        this.state = {
            time: (new Date()).toLocaleString(),
            number: 0,
        }
        this.intervalId = null

        console.log('constructor')
    }

    //  deprecated!
    componentWillMount() {
        console.log('componentWillMount')
    }

    componentDidMount() {
        this.intervalId = setInterval(
            () => {
                console.log('#### interval')
                this.setState({ time: (new Date()).toLocaleString() })
            },
            1000
        )

        console.log('componentDidMount')
        console.log('--- ---- --- --- --- ---')
    }

    // UPDATING

    //  deprecated!
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')

        console.log('Current props ', this.props)
        console.log('Next props ', nextProps)
        console.log('Current state ', this.state)
        console.log('Next state ', nextState)

        return true
    }

    //  deprecated!
    componentWillUpdate() {
        console.log('componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    // UN-MOUNTING

    componentWillUnmount() {
        // good place to clean up!

        clearInterval(this.intervalId)

        console.log('componentWillUnmount')
    }

    // MOUNTING & UPDATING

    render() {
        console.log('render')

        return (
            <div>
                <div>
                    {this.state.time}
                </div>
                <div>
                    Lifecycle
        </div>
                <button
                    onClick={() => this.setState({ number: this.state.number + 1 })}
                >
                    Change state!
        </button>
            </div>
        )
    }
}

export default Lifecycle