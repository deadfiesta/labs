import React from 'react'
import SeaLogo from './LogoSeaBranding'
import LinkedIn from './LogoLinkedIn'
import { footer } from './Data'

const Footer = () => {

    return (
        <footer>
            <div className="wrapper">
                <div className="footer__container">
                    <div className="branding__container">
                        <div className="sea__container">
                            <SeaLogo />
                            <p>1 Fusionopolis Place, #17-10, Galaxis, Singapore 138522</p>
                            <p>Tel:+65 6270 8100</p>
                        </div>
                        <LinkedIn />
                    </div>
                    <div className="directory__container">
                        {footer.map((direct, i) => (
                            <ul key={i}>
                                <li className="directory">{direct.name}</li>
                                {direct.menu.map((item, i) => (
                                    <li className="directory__sub" key={i}><a href={item.link}>{item.name}</a></li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>
                <div className="copyright__container center">
                    <p>
                        Copyright &copy; Sea Limited. Trademarks belong to their respective owners. All rights reserved. | <a href="/#">Terms of Service</a> | <a href="/#">Privacy Policy</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
