import React, { Component } from "react";
import DaumPostcode from "react-daum-postcode";
import "./SignUp.scss";

const WIDTH = 595;
const HEIGHT = 450;
const EMAIL_LIST = [
  "naver.com",
  "hanmail.net ",
  "daum.net ",
  "nate.com ",
  "hotmail.com ",
  "gmail.com",
  "icloud.com",
];

const TABLE_ROW = {
  data: [
    {
      name: "비밀번호",
      type: "password",
      text: "passwordValue",
      token: "■",
    },
    {
      name: "비밀번호 확인",
      type: "password",
      text: "rePasswordValue",
      token: "■",
    },
    {
      name: "이름",
      type: "text",
      text: "nameValue",
      token: "■",
    },
    {
      name: "닉네임",
      type: "text",
      text: "nickName",
      token: "",
    },
  ],
};
class SignUp extends Component {
  state = {
    id: 1,
    emailValue: "",
    passwordValue: "",
    rePasswordValue: "",
    nameValue: "",
    nickName: "",
    phoneVlaue: "",
    addressValue: "",
    isSubmitClicked: false,
    zoneCode: "",
    fullAddress: "",
    isDaumPost: false,
    isRegister: false,
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleOpenPost = () => {
    this.setState({
      isDaumPost: true,
    });
  };
  handleAddress = data => {
    let AllAddress = data.address;
    let extraAddress = "";
    let zoneCodes = data.zonecode;
    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      AllAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    this.setState({
      fullAddress: AllAddress,
      zoneCode: zoneCodes,
    });
  };

  onCheck = e => {
    e.preventDefault();
    const {
      emailValue,
      passwordValue,
      rePasswordValue,
      nameValue,
      phoneVlaue,
    } = this.state;
    const { signUpFinish } = this;
    const emailCheck = /^[A-Za-z0-9][A-Za-z0-9._-]+[@]{1}[a-z]+[.]{1}[a-z]{1,4}$/;
    if (!emailValue) {
      alert("이메일을 입력 해 주세요.");
      return;
    }
    if (!emailCheck.test(emailValue)) {
      alert("이메일을 형식에 맞게 작성해 주세요.");
      return;
    }
    if (!passwordValue) {
      alert("패스워드를 입력 하세요.");
      return;
    }
    if (passwordValue.length < 10) {
      alert("비밀번호 길이는 10자리 이상과 특수문자 1개를 포함해 주세요.");
      return;
    }
    if (!rePasswordValue) {
      alert("비밀번호 확인을 입력 해 주세요.");
      return;
    }
    if (passwordValue !== rePasswordValue) {
      alert("비밀번호와 비밀번호 확인이 틀립니다.");
      return;
    }
    if (!nameValue) {
      alert("이름을 입력 해주세요.");
      return;
    }
    if (!phoneVlaue) {
      alert("휴대폰 번호를 입력해 주세요.");
      return;
    }
    signUpFinish();
  };

  signUpFinish = () => {
    const { emailValue, passwordValue, nameValue, phoneVlaue } = this.state;
    fetch("http://10.58.3.238:8000/user/signup", {
      method: "POST",
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue,
        name: nameValue,
        phone_number: phoneVlaue,
      }),
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        if (res.message === "SUCCESS") {
          alert("회원가입 성공");
          this.props.history.push("/login");
        } else {
          alert("회원가입 실패");
        }
      });
  };
  render() {
    const { isDaumPost, fullAddress, zoneCode } = this.state;

    const modalStyle = {
      position: "fixed",
      top: "100px",
      left: "300px",
      zIndex: "100",
      border: "1px solid #000000",
      overflow: "hidden",
    };
    const { handleInputChange, handleOpenPost, onCheck, handleAddress } = this;
    return (
      <div className="signUp">
        <form className="join" method="post">
          <div className="joinStep">
            <div className="stepTitle">
              <h2>JOIN US</h2>
            </div>
            <div className="stepStage">
              <span className="stepOne">약관동의</span>
              <span className="stepIcon">></span>
              <span className="stepTwo">정보입력</span>
              <span className="stepIcon">></span>
              <span className="stepThree">가입완료</span>
            </div>
          </div>
          <div className="tableTitle">
            <h3>기본정보</h3>
            <div className="titleRight">
              <div className="token">■</div>
              <div className="titleInfo">
                표시는 반드시 입력하셔야 하는 항목입니다.
              </div>
            </div>
          </div>
          <div className="tableSignUp">
            <table>
              <colgroup>
                <col width="25%" />
                <col width="75%" />
              </colgroup>
              <tbody>
                <tr>
                  <th className="tableRow ">
                    <div className="token">■</div>
                    <div>이메일</div>
                  </th>
                  <td>
                    <div className="textFieldEmail">
                      <input
                        type="text"
                        className="textEmail"
                        name="emailValue"
                        onChange={handleInputChange}
                      />

                      <select className="email">
                        <option value="insert" selected="selected">
                          직접입력
                        </option>
                        {EMAIL_LIST.map(name => {
                          return <option value="naver">{name}</option>;
                        })}
                      </select>
                      <input type="checkBox" className="checkBox" />
                      <label for="checkBox" className="label">
                        정보/이벤트 메일 수신에 동의합니다.
                      </label>
                    </div>
                  </td>
                </tr>
                {TABLE_ROW.data.map(data => {
                  return (
                    <tr>
                      <th className="tableRow">
                        <div className="token">{data.token}</div>
                        <div> {data.name}</div>
                      </th>
                      <td>
                        <div className="textField">
                          <input
                            type={data.type}
                            className="text"
                            name={data.text}
                            onChange={handleInputChange}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <th className="tableRow">
                    <div className="token">■</div>
                    <div>휴대폰번호</div>
                  </th>
                  <td>
                    <div className="textFieldPhone">
                      <input
                        type="text"
                        name="phoneVlaue"
                        className="text"
                        onChange={handleInputChange}
                      ></input>
                      <input type="checkBox" className="checkBox" />
                      <label for="checkBox" className="label">
                        정보/이벤트 메일 수신에 동의합니다.
                      </label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="tableRow">
                    <div className="token"></div>
                    <div>주소</div>
                  </th>
                  <td>
                    <div className="textFieldAddress">
                      <div className="textFieldAddressTop">
                        <input
                          className="inputAddress"
                          type="text"
                          value={zoneCode}
                        />
                        <input
                          type="button"
                          className="inputAddressButton"
                          onClick={handleOpenPost}
                          value="우편번호 검색"
                        />
                      </div>
                      <div className="textFieldAddressBottom">
                        <div>
                          <input
                            className="inputAddressBottom"
                            type="text"
                            value={fullAddress}
                            onClick={handleInputChange}
                          />
                        </div>
                        <div className="addressDetail">
                          <input type="text" className="inputAddressBottom" />
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
        <div className="dividerBottom"></div>
        <div className="btn">
          <button className="btnSignUp" onClick={onCheck}>
            회원가입
          </button>
          {isDaumPost && (
            <DaumPostcode
              onComplete={handleAddress}
              autoClose
              width={WIDTH}
              height={HEIGHT}
              style={modalStyle}
              isDaumPost={isDaumPost}
            />
          )}
        </div>
      </div>
    );
  }
}

export default SignUp;
