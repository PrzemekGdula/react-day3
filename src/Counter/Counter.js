import React from 'react'

class Counter extends React.Component {
    constructor() {
        super()

        this.state = {
            number: 10,
        }
    }
    
    render() {
        return (
            <div>
                <h1>
                    0
                </h1>

                <button>
                    +
                </button>
            </div>
        )
    }
}

export default Counter