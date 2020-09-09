import React, { Component } from 'react';
import HTML5 from '../images/HTML5.png';
import CSS3 from '../images/CSS3.png';
import WordPress from '../images/WordPress.png';
import JavaScript from '../images/JavaScript.png'
import Reactl from '../images/React.png'
import Node from '../images/Node.png'
import MySQL from '../images/MySQL.png'
import Python from '../images/Python.png'
import Swift from '../images/Swift.png'
import Scrum from '../images/Scrum.png'
import Angular from '../images/Angular.svg'

export default  class Resume extends Component {
  constructor(props){
    super(props)
    this.state = {
    bgimg: "vide",
    }
  }
  
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Formations</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Expériences</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>

        <div className={`bgcomp ${this.state.bgimg}`}>
        <div className={`row skill `}>
          
            <div className="three columns header-col">
              <h1><span><span id="COMP">Comp</span>étences</span></h1>
            </div>

            <div className={`nine columns main-col`}>
            
   				<div className="skillsList">

                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    const img = item.skillname === 'HTML5' ? HTML5 : item.skillname === 'CSS3' ? CSS3 : item.skillname === 'WordPress' ? WordPress : item.skillname === 'JavaScript' ? JavaScript : item.skillname === 'React' ? Reactl : item.skillname === 'Node' ? Node : item.skillname === 'MySQL' ? MySQL : item.skillname === 'Python' ? Python : item.skillname === 'Swift' ? Swift : item.skillname === 'Scrum' ? Scrum : item.skillname === 'Angular' ? Angular :""
                    return(
                      <div onMouseEnter={() => this.setState({ bgimg: item.skillname })} onMouseLeave={() => this.setState({ bgimg: "vide" })} className="skillItem">
                        <img className='skilllogo' src={img} alt={item.skillname} />
                        <p align='center'>{item.skillname}</p>
                      </div>
                    )
                  })
                }
            

   				</div>
          </div>
   			</div>
         </div>

      </section>
    );
  }
}
