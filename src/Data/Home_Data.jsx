import React from 'react'
import img1 from '../img/team-member-pic.jpg'
import img2 from '../img/team-member-pic2.jpg'
import img3 from '../img/team-member-pic4.jpg'
import img4 from '../img/team-member-pic3.jpg'

const Sdata = [  
    {
        pic: img1,
        name: "Alec Thompson" ,
        position:"Developer" ,
        content:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
        pic: img4,
        name: "Tania Andrew" ,
        position:"Designer" ,
        content:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
        pic:img3,
        name: "Christian Mike" ,
        position:"Developer" ,
        content:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
        pic:img2,
        name: "Rebecca Stormville" ,
        position:"Designer" ,
        content:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
]

const Heading_data = [
    {
        title1:"Our ",
        title2:"Team",
        headingcontent:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
]

const C_data = [
    { 
        c_icon:"flat flaticon-happiness",
        count:"200",
        c_title:"Happy Client",
    },
    { 
        c_icon:"flat flaticon-coffee-cup",
        count:"750",
        c_title:"Cups of Coffee",
    },
    { 
        c_icon:"flat flaticon-like",
        count:"1800",
        c_title:"Projects Done",
    },
    { 
        c_icon:"flat flaticon-building",
        count:"15",
        c_title:"Office Locations",
    },
]
export {Sdata, Heading_data, C_data}