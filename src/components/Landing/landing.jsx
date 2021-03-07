import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './landing.css'

const Landing = () => {

    const mainRef = useRef(null)
    const [btn, setBtn] = useState(false)

    useEffect(() => {
        mainRef.current.classList.add('startingImg')
        const timer = setTimeout(() => {
            mainRef.current.classList.remove('startingImg')
            setBtn(true)
        }, 500)
        return function() {
            clearTimeout(timer)
        }
    }, [])

    const toggleLeftClaw = () => {
        if(mainRef.current.classList.contains('leftImg')) {
            mainRef.current.classList.remove('leftImg')
        } else mainRef.current.classList.add('leftImg')
    }

    const toggleRightClaw = () => {
        if(mainRef.current.classList.contains('rightImg')) {
            mainRef.current.classList.remove('rightImg')
        } else mainRef.current.classList.add('rightImg')
    }

    const showBtn = () => {
        return btn && (
            <>
                <div className="left-box" onMouseOver={toggleLeftClaw} onMouseOut={toggleLeftClaw}>
                    <Link to="/signup" className="btn-welcome">Inscription</Link>
                </div>
                <div className="right-box" onMouseOver={toggleRightClaw} onMouseOut={toggleRightClaw}>
                    <Link to="/signin" className="btn-welcome">Connexion</Link>
                </div>
            </>
        )
    }

    return (
        <main ref={mainRef} className="home-container">
            { showBtn() }
        </main>
    )
}

export default Landing
