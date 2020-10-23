import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
    return (
        <div>
            I'm not the right page!
            <Link to="/">Go back home!</Link>
        </div>
    )
}