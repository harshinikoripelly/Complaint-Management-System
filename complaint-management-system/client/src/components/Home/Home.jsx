import React,{useState} from 'react'
import Navbar from './../Navbar/Navbar'
import './Home.scss'
import img from './complaint2.png'
import img2 from './dot.png'

import DropdownMenu from '../Menu/DropdownMenu'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='content'>
            <DropdownMenu />
            <div class="head">
                    <div>
                    <h1 class="heading2">Welcome to Complaint Management System(CMS)</h1>
                    <div class="one">
                    <div>
                    <hr class="rule2"/>
                    </div>
                    {/* <div>
                    <img src={img2} class="image2" />
                    </div> */}
                    </div>
                    </div>
            
            <div class="home-main">
                <div>
                <h1 class="heading">Guidelines to register a complaint</h1>
              
                <ol class="list-main">
                    <li class="list-item1">Visit the "Register a Complaint" page.</li>
                    <li class="list-item">Fill in the details</li>
                    <li class="list-item">Click on submit, then your complaint will be registered successfully</li>
                    <li class="list-item">Check the status of your complaint in "Complaints history" page</li>
                </ol>
                </div>
                <div>
                <img src={img} class="image1" alt="" />
                </div>
                </div>
           
            </div>
            </div>
        </>
    )
}


export default Home