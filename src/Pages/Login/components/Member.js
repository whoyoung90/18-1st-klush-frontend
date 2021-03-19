import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

class Member extends Component {
  render() {
    return (
      <div className="loginContainer">
        <div className="loginInput">
          <div className="loginInputId">
            <input
              type="text"
              id="id"
              name="email"
              placeholder="이메일"
              onChange={this.props.handleOnChange}
            />
            <FaUserAlt className="inputIcon" />
          </div>
          <div className="loginInputPwd">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="비밀번호"
              onChange={this.props.handleOnChange}
            />
            <FaLock className="inputIcon" />
          </div>
        </div>
        <div className="saveId">
          <input type="checkbox" className="checkBox" />
          <label for="checkBox">아이디 저장</label>
        </div>
        <button
          className="btnLogin"
          type="submit"
          onClick={this.props.loginSubmit}
        >
          <em>로그인 </em>
        </button>
        <div className="loginMenu">
          <Link to="/signup" className="btnSignup">
            <em>회원가입</em>
          </Link>
          <button className="btnFindId">
            <em>아이디 찾기 </em>
          </button>
          <button className="btnFindPwd">
            <em>비밀번호 찾기 </em>
          </button>
        </div>
      </div>
    );
  }
}

export default Member;
