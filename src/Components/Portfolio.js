import React, { Component } from 'react';
import { ReactPhotoCollage } from "react-photo-collage";

const setting = {
  width: '1000px',
  height: ['250px', '170px'],
  layout: [4,4,4,4,3],
  photos: [
    {
      "title":"Our anniversary date",
      src:"images/portfolio/IMG_7218.jpg"
    },
    {
      "title":"Omi...good ol' days",
      src:"images/portfolio/IMG_7165.jpg"
    },
    {
      "title":"Freshman year us:)",
      src:"images/portfolio/IMG_7607.jpg"

    },
    {
      "title":"Late night talk - Owen Lounge",
      src:"images/portfolio/IMG_7910.jpg"
    },
    {
      "title":"'Study' nights - Wilson Lounge",
      src:"images/portfolio/IMG_4531.jpg"
    },
    {
      "title":"Probably a selfie from the one day we went to WIC together LOL",
      src:"images/portfolio/IMG_4650.jpg"
    },
    {
      "title":"Poke bowl date",
      src:"images/portfolio/IMG_1358.jpg"
    },
    {
      "title":"GCF Candyland banquet!",
      src:"images/portfolio/IMG_7452.jpg"
    },
    {
      "title":"Candid pretty photo of you at Toronto 2019 :)",
      src:"images/portfolio/IMG_2067.jpg"
    },
    {
      "title":"'Brunch' and Bible study time at Toronto",
      src:"images/portfolio/IMG_8619.jpg"
    },
    {
      "title":"Another GCF banquet! Forgot the theme though oops..",
      src:"images/portfolio/IMG_2809.jpg"
    },
    {
      "title":"Whole Foods is the best place for dessert.",
      src:"images/portfolio/IMG_8106.jpg"
    },
    {
      "title":"GCF 2019 fall welcome BBQ!",
      src:"images/portfolio/IMG_5189.jpg"
    },
    {
      "title":"Selfie before going to the cider mill hehe",
      src:"images/portfolio/IMG_5845.jpg"
    },
    {
      "title":"During our GCF small group trip!! My friend is so pretty :,)",
      src:"images/portfolio/IMG_3093.jpg"
    },
    {
      "title":"At AA for GCF+LGM Friday night - love your pose LOL.",
      src:"images/portfolio/IMG_6144.jpg"
    },
    {
      "title":"When you willingly watched a football game with me after RY in the cold...gamsdongs",
      src:"images/portfolio/IMG_6229.jpg"
    },
    {
      "title":"GCF fall banquet 2019! Edelweiss Kingdom",
      src:"images/portfolio/IMG_6513.jpg"
    },
    {
      "title":"Thank you so much for being my photographer at graduation :,0",
      src:"images/portfolio/IMG_6766.jpg"
    }
  ],
  showNumOfRemainingPhotos: false
};

class Portfolio extends Component {

  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} height="100" />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Collage of our quality time</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>

          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
