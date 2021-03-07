import React from 'react'
import batman from '../../images/batman.png'

const txtStyle = {
    textAlgin : 'center',
    marginTop : '50px'
}

const imgStyle = {
    display: 'block',
    margin : '40px auto'
}

const ErrorPage = () => {
    return (
        <div className="quiz-bg">
            <div className="container">
                <h2 style={txtStyle} >Oups, cette page n'existe pas !</h2>
                <img style={imgStyle} src={batman} alt="error page" />
            </div>
        </div>
    )
}

export default ErrorPage
