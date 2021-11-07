import React from 'react'
import MediaIcon from './MediaIcon'
import FileTypeIcon from './FileTypeIcon'

const ListRowDocument = ({ title }) => {
    return (
        <div className="list document flex__container">

            <div className="report__title inline">
                <MediaIcon icon={"calendar"} /><h2>{title}</h2>
            </div>

            <div className="icon__container center">
                <FileTypeIcon />
            </div>
        </div>
    )
}

export default ListRowDocument
