import React from 'react'
import { Link } from 'react-router-dom'

export default function OtherPage() {
    return (
        <div>
            I'm not the right page!
            <Link to="/">Go back home!</Link>
        </div>
    )
}