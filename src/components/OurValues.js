import React from 'react'
import Subheader from './Subheader'
import SectionTitle from './SectionTitle'

const content = [
    {
        title: "Our people define us",
        paragraph: "Sea shall be a place where talented people thrive at scale, enjoy freedom of ideas, and achieve the unimaginable. It shall be a magnet for the smartest, the most creative, and the most driven."
    },
    {
        title: "Our products and services differentiate us",
        paragraph: "We aspire to better every life we touch and make the world an even more connected community through innovative products and services."
    },
    {
        title: "Our institution will outlast us",
        paragraph: "We strive to build an institution that will last for generations and evolve with time and that is founded upon our core values."
    }
]

const corevalues = [
    {
        title: "We Serve",
        paragraph: "Our customers are the sole arbiter of the value of our products and services. We strive to meet unmet needs and serve the underserved."
    },
    {
        title: "We Adapt",
        paragraph: "Rapid change is the only constant in the digital age of ours. We embrace change, celebrate it, and always strive to be a thought leader that influences it."
    },
    {
        title: "We Run",
        paragraph: "We are in a constant race to success while grappling with rapidly shifting forces. We move faster, better, and with more urgency each day."
    },
    {
        title: "We Commit",
        paragraph: "Our work is our commitment. We commit to our values, institution, customers, and partners. We commit to each other. Above all, we commit to doing the best we can and being the best we are."
    },
    {
        title: "We Stay Humble",
        paragraph: "We have traveled a long way from our humble beginning and yet, we never lose our humility in our continual quest for greater heights."
    },
    
]

const OurValues = () => {
    return (
        <>
            <Subheader title="Our Values" bg="our-values" />
            <main>
                <section id="values">
                    <div className="wrapper">
                        <SectionTitle title="We Believe" p="Our mission is to better the lives of consumers and small businesses with technology." maxwidth="612px" />
                        {content.map((item, i) => (
                            <div key={i} className="text__container">
                                <h2>{item.title}</h2>
                                <p>{item.paragraph}</p>
                            </div>
                        ))}
                        <div className="corevalues__container">
                            <h2>Our Core Values are the foundation of it all</h2>
                            <ul className="corevalues">
                                {corevalues.map((value, i)=> (
                                    <li key={i}>
                                        <div className="value__container">
                                            <h3>{value.title}</h3>
                                        </div>
                                        <div className="description__container">
                                            <p>{value.paragraph}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default OurValues
