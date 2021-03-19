import React, { Component } from "react";
import "./Login.scss";
import Member from "./components/Member";
import NonMember from "./components/NonMember";
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
    const idCheck = /^[A-Za-z0-9][A-Za-z0-9._-]+[@]{1}[a-z]+[.]{1}[a-z]{1,4}$/;
    if (!this.state.email) {
      alert("아이디를 입력해주세요");
    } else if (!idCheck.test(this.state.email)) {
      alert("입력된 아이디은(는) 잘못된 형식입니다.");
    } else if (this.state.password === "") {
      alert("패스워드를 입력해주세요");
      return;
    }
    // fetch("http://10.58.23.162:80000/user/login", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     username: this.state.email,
    //     password: this.state.password,
    //   }),
    // })
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log(res);
    //   });
  };
  render() {
    const { email, password, currentId } = this.state;

    return (
      <div className="login">
        <section>
          <div className="loginInfo">
            <h2>로그인</h2>
          </div>
          <div className="loginBox">
            <div className="loginSort">
              <ul className="tabs">
                <li className="Selected" onClick={() => this.clickHandler(1)}>
                  <span>회원</span>
                </li>
                <li
                  className="nonSelected"
                  onClick={() => this.clickHandler(2)}
                >
                  <span>비회원</span>
                </li>
              </ul>
            </div>
            <form className="loginForm">
              {currentId === 1 && <Member />}
              {currentId === 2 && <NonMember />}
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;

// const MEMBER_OBJ = {
//   1: <Member />,
//   2: <NonMember />,
// };
//const MEMBER_ARR = ["member", "NonMember"];
