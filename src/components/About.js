import React, { Component } from 'react';
import Moi from '../images/Moi.jpeg';
import LogoMoi from '../images/logoTranspCT.svg'
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        
        <div className="row slide" id="first-slide" >

            <div className="three columns">

            <img className="profile-pic one columns" src={`${Moi}`} alt="moi" />
            <img className="profile-pic one columns" src={`${LogoMoi}`} alt="logomoi" />

            </div>

            <div id='AboutTxt' className="nine columns main-col">
              <div>
               <h2>A propos</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>
              </div>
               <div className="row">

                  <div className="columns contact-details">

                  <h2>Fiche de contact</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}