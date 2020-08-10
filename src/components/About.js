import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        
        <div className="row slide" id="first-slide" >

            <div className="three columns">

            <img className="profile-pic one columns" src="https://media-exp1.licdn.com/dms/image/C4D35AQFfv_ALaEceIQ/profile-framedphoto-shrink_100_100/0?e=1596812400&v=beta&t=eAT987M5W_TTgT8dJzGcMOv_2SmMxoU1iZFeX25NIb4" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>A propos</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

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