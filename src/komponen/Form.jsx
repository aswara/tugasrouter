import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div className="px-5">
       <form action="" className="mx-5 py-5 px-5 shadow-lg border">
       <h3 className="text-primary text-center mb-3">Silahkan Masuk</h3>
        <input type="text" className="form-control mb-2" placeholder="Username" />
        <input type="password" className="form-control mb-3" placeholder="Password" />
        <button className="btn btn-primary px-5">Login</button>
       </form>
      </div>
    );
  }
}

export default Form;
