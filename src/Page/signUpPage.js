import React, { Component } from 'react';
import ItemSignUp from '../Container/SignUpContainer'
class SignUpPage extends Component {
  render() {
    
    return (
      <div className="HomePage">
        <ItemSignUp/>  
        <p>Nếu đã có tài khoản <a href='/'>Đăng nhập</a> ở đây !!!</p>
      </div>
    );
  }
}

export default SignUpPage;
