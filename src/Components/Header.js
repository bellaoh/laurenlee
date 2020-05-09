import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Introduction</a></li>
            <li><a className="smoothscroll" href="#about">Letter</a></li>
            <li><a className="smoothscroll" href="#portfolio">Collage</a></li>
            <li><a className="smoothscroll" href="#testimonials">Meaningful Verses</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">Lauren's Birthday Webpage</h1>
            <h3>Lauren, happy 22nd birthday!!!!! I was initially planning to mail you a regular
            handwritten letter, but COVID-19 gave me inspiration to make it virtual by
            building a website instead HAHA. Hope you enjoy! :)</h3>
            <hr />
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
