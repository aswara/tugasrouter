import React, { Component } from 'react';

class Bootsrtap extends Component {
    render() {
        return (
            <div>
                    <nav className="header">
        <a className="icon" href="">B</a>
        <div className="teks">
            <a href="">Home</a>
            <a href="">Documentation</a>
            <a href="">Examples</a>
            <a href="">Examples</a>
            <a href="">Themes</a>
            <a href="">Expo</a>
            <a href="">Blog</a>
        </div>
        <a className="download" href="">Download</a>

        <div className="dropdown">
                <a id="myBtn" className="dropbtn" href="#">v4.1</a>
                  <div id="myDropdown" className="dropdown-content">
                    <a href="#home">Latest (4.1.x)</a>
                    <a href="#about">v4.0.0</a>
                    <a href="#contact">v4 Alpha</a>
                  </div>
        </div>
                

    </nav>

    <div className="menu">
        <div className="menusatu">
            <span className="judul">Bootstrap</span>
            <p className="isi">Build responsive, mobile-first projects on the web with the world's most popular front-end component library.</p>
            <p className="isi">Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery.</p>
            <a href=""><button className="get">
                Get started
            </button></a>
            <a href=""><button className="down">Download</button></a>
            <p className="cur">Currently v4.1.3</p>
        </div>
        <div className="menudua">
            <img src="https://getbootstrap.com/docs/4.1/assets/img/bootstrap-stack.png" alt="" />
        </div>
    </div>

    <div className="colom">
        <div className="col">
            <h1>Installation</h1>
            <p>Include Bootstrap's source Sass and JavaScript files via npm, Composer or Meteor. Package managed installs don't include documentation, but do include our build system and readme.</p>
            <p>$ npm install bootstrap</p>
            <p>$ gem install bootstrap -v 4.1.3</p>

            <a href=""><button className="read">Read Installation docs</button></a> 
        </div>
        <div className="col">
            <h1>BootstrapCDN</h1>
            <p>When you only need to include Bootstrap's compiled CSS or JS, you can use BootstrapCDN</p>
            <h3>CSS only</h3>

            <h3>JS, Popper.js, and jQuery</h3>

            <a href=""><button className="read">Explores the docs</button></a> 
        </div>
        <div className="col">
            <h1>Official Themes</h1>
            <p>Take Bootstrap 4 to the next level with official premium themes—toolkits built on Bootstrap with new components and plugins, docs, and build tools.</p>
            <img src="1.png" alt="" />

            <a href=""><button className="read">Browse themes</button></a>
        </div>
    </div>

    <div className="footer">
        <a href="">GitHub</a>
        <a href="">Twitter</a>
        <a href="">Examples</a>
        <a href="">About</a>
        <p>Designed and built with all the love in the world by @mdo and @fat. Maintained by the core team with the help of our contributors.</p>
        <p>Currently v4.1.3. Code licensed MIT, docs CC BY 3.0.</p>
    </div>
            </div>
        );
    }
}

export default Bootsrtap;