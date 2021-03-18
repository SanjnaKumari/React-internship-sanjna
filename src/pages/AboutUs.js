import React from 'react'
import Aboutbanner from '../sections/Aboutbanner'
import About_content from '../components/About_content'
import Aboutqualities from '../sections/Aboutqualities'
import Aboutdetail from '../sections/Aboutdetail'
import Counter from '../sections/Counter'
import Ourteam from '../sections/Ourteam'

const AboutUs = () =>{
    return(
        <>
        <div className="wraper-v2-inner">
        <Aboutbanner/>
        <About_content />
        <Aboutqualities />
        <Aboutdetail />
        <section id="counter" className="counter-inner">
        <Counter/>
        <div className="overlay"></div>
        </section>
        <Ourteam/>
        </div>
        </>
    )
}

export default AboutUs;