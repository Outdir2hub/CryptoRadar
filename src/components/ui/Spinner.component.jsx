import React from 'react';
import spinnerImg from '../../assets/images/spinner.gif'

const SpinnerComponent = () => {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <img src={spinnerImg} alt="" />
        </div>
    )
}

export default SpinnerComponent;