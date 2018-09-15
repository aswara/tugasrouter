import React, { Component } from 'react';
import { connect } from 'react-redux';



class Footer extends Component {
    render() {
        return (
            <div className="text-light container mt-5 py-4 bg-primary text-center">
                <p>&copy; Copyright 2018 by Adi Aswara</p>
            </div>
        );
    }
}

export default Footer;
