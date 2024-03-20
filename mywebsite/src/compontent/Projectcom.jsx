import React from 'react'
import '../project.css';
import kk from './image/kk.png';
import icon from './image/loc.jpg';
import vino from './image/img2.jpg';
import car from './image/car4.jpg';
function Projectcom() {
  return (
    <>
     <h2 className='text_content'> my proj<span>ect list</span></h2>

    <div id ="Project" className='disflex'>
    
         <div className="myCard">
        <div className="innerCard">
            <div className="frontSide">
                <p className="title">WELCOME TO THE PROJECT</p>
                <p>Hover Me</p>
            </div>
            <div className="backSide">
            <img src={icon}    className='myimg' alt=''/>
                <p className="title">Reactnative Plant App </p>
                <p>Leave Me</p>
            </div>
        </div>
    </div>

    <div className="myCard">
        <div className="innerCard">
            <div className="frontSide">
                <p className="title">WELCOME TO THE PROJECT</p>
                <p>Hover Me</p>
            </div>
            <div className="backSide">
            <img src={car}    className='myimg' alt=''/>
                <p className="title">Car website using MernStack</p>
                <p>Leave Me</p>
            </div>
        </div>
    </div>
    <div className="myCard">
        <div className="innerCard">
            <div className="frontSide">
                <p className="title">WELCOME TO THE PROJECT</p>
                <p>Hover Me</p>
            </div>
            <div className="backSide">
            <img src={kk}   className='myimg' alt='' />
                <p className="title">Paddy Website using Mern Stack</p>
                <p>Leave Me</p>
            </div>
        </div>
    </div>
    <div className="myCard">
        <div className="innerCard">
            <div className="frontSide">
                <p className="title">WELCOME TO THE PROJECT</p>
                <p>Hover Me</p>
            </div>
            <div className="backSide">
            <img src={vino}  className='myimg' alt=''/>
                <p className="title">Karna using Reactnative</p>
            
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Projectcom;