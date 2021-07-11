import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets__headers">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("React is good", "Top news - 10000 readers")}
            {newsArticle("Coronavirus: Update", "Top news - 8552 readers")}
            {newsArticle("Tesla hits new high", "Cars & auto - 4000 readers")}
            {newsArticle("Bitcoin Break 22k", "Crypto - 3500 readers")}
        </div>
    )
}

export default Widgets
