import React from 'react'

const SectionTitle = ( {title, p, maxwidth} ) => {
    return (
        <div className='title__container'>
            <h1 style={{ display: (title == null ? 'none' : "") }}>{title}</h1>
            <p style={{ maxWidth: (maxwidth === 'small' ? '1044px' : maxwidth), display: (p == null ? 'none' : "") }}>{p}</p>
        </div>
    )
}

SectionTitle.defaultProps = {
    maxwidth: 'small'
}

export default SectionTitle
