import React, { Component } from "react";
import Member from "./components/Member";
import NonMember from "./components/NonMember";
import "./Login.scss";

class Login extends Component {
  state = {
    email: "",
    password: "",
    currentId: 1,
  };

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  clickHandler = id => {
    this.setState = { currentId: id };
  };

  loginSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const idCheck = /^[A-Za-z0-9][A-Za-z0-9._-]+[@]{1}[a-z]+[.]{1}[a-z]{1,4}$/;
    if (!this.state.email) {
      alert("이메일을 입력해주세요");
    } else if (!idCheck.test(email)) {
      alert("입력된 이메일은(는) 잘못된 형식입니다.");
    } else if (!password) {
      alert("패스워드를 입력해주세요");
      return;
    }
    fetch("http://10.58.3.238:8000/user/signup", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        if (res.token) {
          localStorage.setItem("token", res.token);
          alert("로그인 성공");
          this.props.history.push("/main");
        } else {
          alert("로그인 실패");
        }
      });
  };

  render() {
    const { email, password, currentId } = this.state;
    const { clickHandler } = this;
    return (
      <div className="login">
        <section>
          <div className="loginInfo">
            <h2>로그인</h2>
          </div>
          <div className="loginBox">
            <div className="loginSort">
              <ul className="tabs">
                <li className="Selected" onClick={() => clickHandler(1)}>
                  <span>회원</span>
                </li>
                <li className="nonSelected" onClick={() => clickHandler(2)}>
                  <span>비회원</span>
                </li>
              </ul>
            </div>
            <form className="loginForm">
              {currentId === 1 && (
                <Member
                  loginSubmit={this.loginSubmit}
                  handleOnChange={this.handleOnChange}
                />
              )}
              {currentId === 2 && (
                <NonMember
                  loginSubmit={this.loginSubmit}
                  handleOnChange={this.handleOnChange}
                />
              )}
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
