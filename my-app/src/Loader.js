import React from 'react'

const Loader = ({show}) => {
    return show ? <div className="loader"></div> : "";
}

export default Loader