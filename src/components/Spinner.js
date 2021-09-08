import React, { Component } from 'react'
import loading from '../images/loading.gif'

export class Spinner extends Component {
    render() {
        return (
            <div className="text-center" style={{ margin: '50px 0px' }}>
                <img src={loading} alt="loading" />
            </div>
        )
    }
}

export default Spinner
