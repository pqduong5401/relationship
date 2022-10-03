import React, { Component } from "react";
import * as Validate from '../../Validate/validate'
class ComponentLogin extends Component {
    state = {
        username: '',
        password: '',
        a: '',
        validate: ''
    }
    handleLogin() {
        this.state.validate === true && this.state.password.length > 6
            ? this.props.login({ username: this.state.username, password: this.state.password })
            : alert('Xin mời nhập đúng định dạng đang nhap')
    }
    handleValidate(e) {
        this.setState({ username: e.target.value })
        this.setState({ validate: Validate.ValidateEmail(e) })
    }
    render() {

        return (
            <div>
                <div>
                    TRANG ĐĂNG NHẬP
                    <br></br>
                    <input placeholder="username" onChange={(e) => this.handleValidate(e)} ></input>
                    <p style={{ color: 'red' }}>{this.state.validate === true || this.state.username.length === 0 ? "" : "ten dang nhap phai co @gmail"}</p>
                    <input type='password' placeholder="password" onChange={(e) => this.setState({ password: e.target.value })} ></input>
                    <p style={{ color: 'red' }}>{this.state.password.length > 6 || this.state.password.length === 0 ? '' : 'password >6 ki tu'}</p>
                    <button onClick={() => this.handleLogin()}>Login</button>
                    <br></br>
                    bạn chưa có tài khoản?<a href="/signup">Đăng kí</a>
                </div>
            </div>
        )
    }
}
export default ComponentLogin
