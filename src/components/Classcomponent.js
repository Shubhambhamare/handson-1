import React from 'react';

class Classcomponent extends React.Component {
    render(){
        return(
            <div className='classcomponent'>
                <h1>
                    Created Using Class Component
                </h1>
                <div>
                    <p>
                        Created using external CSS
                    </p>
                    <p>
                        Created Using Inline CSS
                    </p>
                </div>
            </div>
        )
    }
}

export default Classcomponent;