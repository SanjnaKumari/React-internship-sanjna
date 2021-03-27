import React from 'react'
import Header from '../components/Headers/Header'
import {Headerdata} from '../Data/Home_Data'
import FaqDetail from '../sections/faqDetail'
import Counter from '../sections/Counter'
import Servfooter from '../components/Servfooter'


const Faq = () => {
    return (
        <>
        <div className = 'wraper'>
          <Header
              heading = {Headerdata[9].heading}
              l1 = {Headerdata[9].l1}
          />
          <FaqDetail/>

          <section id="counter" className="counter-inner">
            <Counter/>
            <div className="overlay"></div>
          </section>

        </div>
        <Servfooter/>
        </>
    )
}

export default Faq;