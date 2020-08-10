import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                return(
                  item.name === 'malt' ?
                    <li key={item.name}>
                      <a href={item.url} target="blank"><img src={item.image} className={item.name} alt={item.name} /></a>
                    </li>
                    :
                    <li key={item.name}>
                      <a href={item.url} target="blank"><i className={item.className}></i></a>
                    </li>
                )
              })
            }
          </ul>
          
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      </div>
    </footer>
    );
  }
}