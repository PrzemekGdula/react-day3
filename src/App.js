import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Counter from './Counter'
import TypeName from './TypeName'
import Lifecycle from './Lifecycle';


const App = (props) => (
    <div>
        <Router>
            <Link to="/">Home</Link>
            <Link to="/Lifecycle">Lifecycle</Link>
            <Route path={'/Lifecycle'} component={Lifecycle} />
        </Router>
        <Counter number={5} />
        <Counter />
        <TypeName />
    </div>
)

export default App