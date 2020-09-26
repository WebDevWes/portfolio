import React from 'react'
import "./style.css"

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="Footer">
            <p>Copyright {currentYear}</p>
        </div>
    )
}
