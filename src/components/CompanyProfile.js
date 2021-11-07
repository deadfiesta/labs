import React from 'react'

const CompanyProfile = () => {
    return (
        <section id="company-profile">
                    <div className="wrapper">
                        <div className="company__container">

                            <div className="profile__container">
                                <h3>Company Profile</h3>
                                <p><strong>Sea Limited</strong>  is a leading global consumer internet company founded in Singapore. Our mission is to better the lives of consumers and small businesses with technology. We operate three core businesses across digital entertainment, e-commerce, as well as digital payments and financial services, known as Garena, Shopee, and SeaMoney, respectively. Garena is a leading global online games developer and publisher. Shopee is the largest pan-regional e-commerce platform in Southeast Asia and Taiwan. SeaMoney is a leading digital payments and financial services provider in Southeast Asia.</p>
                            </div>

                            <div className="stock__container">
                                <h2>NYSE: SE</h2>
                                <div className="figure__container">
                                    <div className="flex__container">

                                        <div className="left">
                                            <p className="label">09/21/21 4:00PM ET</p>
                                            <div className="figure large">
                                                $329.62
                                            </div>
                                        </div>

                                        <span className="divider vertical"></span>

                                        <div className="right">
                                            <div className="change">
                                                <p className="label">Change</p>
                                                <span className="figure">-$10.19 (-3.00%)</span>
                                            </div>

                                            <div className="cap">
                                                <p className="label">Market Cap</p>
                                                <span className="figure">181.48B</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="text__container">
                                    <p>
                                        Stock trading information is delayed by 15-20 mins, provided by a third party service and for informational purposes only.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    )
}

export default CompanyProfile
