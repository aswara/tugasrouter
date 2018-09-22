import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
        <nav className="navbar navbar-expand-lg navbar-light nav-trans">
                <a className="navbar-brand" href="#">Welcome</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item dropdown">
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#contact">Contact</a>
                    </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0">
                
                    <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Programmer</button>
                  </form>
                </div>
              </nav>

    <div className="container-fluid bg-danger text-center py-5">
      
          <div className="typewriter">
            <h1>I'am a Programmer, Designer and Freelancer</h1>
          </div>

    </div>

    <div className="bg-image">
        <div className="row">
            <div className="col-md-4 text-center">
                <img className="img-fluid bulat" src="https://belajar3.netlify.com/aku.jpg" alt="aku" />
            </div>
            <div className="col-md-8">
                <ul className="list-group">
                    <li className="shadow btn btn-danger"><h1>Adi Aswara</h1></li>
                    <li className="shadow btn btn-primary"><h4>Tulungagung</h4></li>
                    <li className="shadow btn btn-danger"><h2>Indonesia</h2></li>
                    <li className="shadow btn btn-primary"><h3>Muslim</h3></li>
                    <li className="shadow btn btn-danger"><h4>Santri Pondok IT</h4></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="container-fluid bg-primary  text-center">
      <div className="typewriter">
       <h1>My Skills</h1>
      </div>
      <div className="row baru">
        <img src="https://belajar3.netlify.com/CSS3_Logo.svg" alt="" />
        <img src="https://belajar3.netlify.com/2.png" alt="" />
        <img src="https://belajar3.netlify.com/4.png" alt="" />
        <img src="https://belajar3.netlify.com/4.svg" alt="" />
        <img src="https://belajar3.netlify.com/5.svg" alt="" />
        <img src="https://belajar3.netlify.com/php.png" alt="" />
      </div>
    </div>

 

    <div className="container text-center" id="contact">
      <div className="row">
        <div className="col-md-6">
          <h1>About</h1>
          <ul className="list-group">
              <li className="shadow btn btn-primary ">PHP</li>
              <li className="shadow btn btn-danger ">HTML</li>
              <li className="shadow btn btn-primary ">React</li>
              <li className="shadow btn btn-danger ">CSS</li>
              <li className="shadow btn btn-primary ">Bootstrap</li>
              <li className="shadow btn btn-danger ">Javascript</li>
          </ul>
          
        </div>
        <div className="col-md-6">
          <h1>Contact</h1>
          <ul className="list-group">
              <li className="shadow btn btn-danger">Facebook</li>
              <li className="shadow btn btn-primary">Github</li>
              <li className="shadow btn btn-danger">G-mail</li>
              <li className="shadow btn btn-primary">Instagram</li>
              <li className="shadow btn btn-danger">Youtube</li>
              <li className="shadow btn btn-primary">WA 0819237897</li>
          </ul>
          </div>
      </div>
    </div>

    <div className="container-fluid bg-danger text-center">
      <h5> Copyright 2018 by Adi Aswara</h5>
    </div>
            </div>
        );
    }
}

export default About;