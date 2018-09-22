import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            angka: 0
        }
    }

    setStates() {
        console.log('ssss')
    }

    tambah() {
        this.setState({
            angka : this.state.angka += 1
        })
    }

    kurang() {
        this.setState({
            angka : this.state.angka -= 1
        })
    }

    render() {
        return (
            <div className="bg-success">

                <div className="container text-center">
                    <div className="kotak bg-success shadow-lg">
                        <h1 style={{ fontSize: '200px' }} id="angka">{this.state.angka}</h1>
                        <button className="btn btn-primary mx-3 btn-lg" onClick={()=>this.tambah()}>
                            tambah
            </button>
                        <button className="btn btn-danger mx-3 btn-lg" onClick={this.kurang.bind(this)}>
                            kurang
            </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Counter; 