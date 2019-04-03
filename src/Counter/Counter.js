import React from 'react'

class Counter extends React.Component {
    constructor() {
        super()

        this.state = {
            number: 10,
        }
    }

    render() {
        const inc = () => this.state.number = this.state.number + 1
            
        

        return (
            <div>
                <h1>
                    {this.state.number}
                </h1>

                <button
                    onClick={inc}
                >
                    +
                </button>
            </div>
        )
    }
}

export default Counter