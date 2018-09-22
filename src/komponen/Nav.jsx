import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div>
                <Link to='/'>Counter</Link> &nbsp;
                <Link to='/bootstrap'>Bootstrap</Link> &nbsp;
                <Link to='/about'>About</Link>
            </div>
        );
    }
}

export default Nav;