import React from 'react'

const Hello = () => {
    //jsx

    // return(
    //     <div>
    //         <h1> hello shivangi</h1>
    //     </div>
    // )

    //without jsx
    return React.createElement(
        'div', {id:'Hello', className: 'dummyClass'}, React.createElement('h1', null, 'hello shivangi')

    )

}
export default Hello