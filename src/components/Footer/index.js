import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="Footer appleFont">
            Copyright &#169; {currentYear}, WebDevWes. All rights reserved.
        </div>
    )
}
