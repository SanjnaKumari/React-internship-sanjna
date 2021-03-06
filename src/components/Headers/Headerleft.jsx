import React from 'react'

function Headerleft(props){
    return(
        <>
            <section id="inner-banner" className="index-3">
            <div className="container">
                <div className="col-lg-12 col-md-12 col-xs-12">
                <div className="inner-heading">
                    <h2>{props.heading}</h2>
                    <div className="separator left-align">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    </div>
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="javascript:void(0)" title="Home">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">{props.l1}</li>
                    </ol>
                    </nav>
                </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default Headerleft;