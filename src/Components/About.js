import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Birthday Letter Icon" />
         </div>
         <div className="nine columns main-col">
            <h2>Lauren,</h2>

            <p>As I begin writing this letter, I'm slowly beginning to realize how extra {'\n'}
            this whole thing is LOL. But it's too late to turn back now. I'll go back to {'\n'}
            handwritten letters starting next year, so please bear with me just this one time HAHA. </p>

            <p>With that being said, I'm sorry I can't physically be there to celebrate with you, but {'\n'}
            happiest of birthdays, Lauren! :) I know I say this {'\n'}
            every year, but I'm always SO thankful for you. It's been 4 years since the first time we've met, which {'\n'}
            can be both a short and long time, depending on how you look at it. {'\n'}
            Regardless, the time we spent together in those 4 years are all memories that I feel truly grateful for,{'\n'}
            whether that's ordering bubble tea together (lowkey yikes because this happened too many times), {'\n'}
            waking each other up in the mornings, watching the stars during a night walk, going on group trips or {'\n'}
            accidentally having deep talks until 8am. You teach me so much just by being you, and you make me realize the importance/power of{'\n'}
            having a strong sisterhood/friendship :). </p>

            <p>To be able to call a wise, encouraging, empathetic, supportive, beautiful sister in Christ {'\n'}
            like you as my best friend is one of the biggest blessings I've had in my life.{'\n'}
            Thank you for being my best friend, and I'm excited to see what the future holds for both of us!{'\n'}
            Gosh this is getting too cheesy, so I'll end it right here LOL. Lauren I love you so very much, and once again, happy birthday!!! </p>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
