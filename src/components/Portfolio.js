import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class Porfolio extends Component {
  
  render() {
    let resumeData = this.props.resumeData;
    
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Un coup d'oeil sur mes réalisations.</h1>
            <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} autoPlay={true} useKeyboardArrows={true} swipeable={true}>
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div style={{ padding: 20, height: 500}}>
                  <img style={{ height: 400, width: 'auto'}} alt={item.name} src={`${item.imgurl}`} className="item-img"/>
                  <h5><a href={item.url} target='blank'>{item.name}</a></h5>
                  <p>{item.description}</p>
                </div>
              )
            })
          }
          </Carousel>
        </div>
      </div>
  </section>
        );
  }
}