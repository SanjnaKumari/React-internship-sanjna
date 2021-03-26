import React from 'react'
import BlogPost from '../sections/BlogPost'
import Header from '../components/Headers/Header'
import {Headerdata} from '../Data/Home_Data'
import Counter from '../sections/Counter'
import Servfooter from '../components/Servfooter'




const BlogRightSidebar = () => {
    return(
        <>
         <div className="wraper"> 
        <Header
        heading = {Headerdata[7].heading}
        l1 = {Headerdata[7].l1}
        />
        <BlogPost/>

        <section id="counter" className="counter-inner">
        <Counter/>
        <div className="overlay"></div>
        </section>
        </div>
        <Servfooter/>
        </>
    )
}

export default BlogRightSidebar