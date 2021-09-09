import React from 'react'
import loading from '../images/loading.gif'

const Spinner = () => {

    return (
        <div className="text-center" style={{ margin: '50px 0px' }}>
            <img src={loading} alt="loading" />
        </div>
    )
}

export default Spinner
