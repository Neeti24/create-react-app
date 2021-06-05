import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
    const [count, setCount] = useState(props.count);
    const [text, setText] = useState('');
    // combination of componentDidMount and componentDidUpdate

    // this will ran onluy one time because there is nothing to change useEffect
    useEffect(() => {
        console.log('this should only ran once!')
    }, [])

    useEffect(() => {
        console.log('useEffect ran');
        document.title = count //chnage tab name and name will be whatever have count state
    }, [count])

    return (
        <div>
            <p>The current {text || 'count'} is {count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(props.count)}>Reset</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="type something" />
        </div>
    )
}

App.defaultProps = {
    count : 0
}

