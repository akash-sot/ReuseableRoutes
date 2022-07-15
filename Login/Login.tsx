import "./Login.scss";
import { Button, Divider, Input } from "antd";
import { useState } from "react";
import { login } from "../../Helper/Apis";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/user/userAction";
import Logo from "../../Assets/Icons/LogoWithText.png";
import {
  AppstoreFilled,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";

function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleInputChange(event: any) {
    const { type, value } = event.target;
    switch (type) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  }

  async function handleFormSubmit() {
    if (!email || !password) return;
    // making a method api call
    await login({
      email: email,
      password: password,
    }).then((data) => {
      dispatch(setUser(data));
      localStorage.setItem("userInfo", JSON.stringify(data));
    });
    setEmail("");
    setPassword("");
  }


  return (
    <div>
      <div className="signin">
        <img src={Logo} alt="logo" />
        <form className="signin-form">
          <h1>Login</h1>
          <Input
            size="large"
            placeholder="Email"
            prefix={<UserOutlined className="input-icon" />}
            type="email"
            className="input"
            onChange={handleInputChange}
            value={email}
          />
          <Input
            size="large"
            placeholder="Password"
            prefix={<SearchOutlined className="input-icon" />}
            type="password"
            className="input"
            onChange={handleInputChange}
            value={password}
          />
          <Button
            type="primary"
            className="btn"
            size="large"
            block={true}
            onClick={handleFormSubmit}
          >
            Signin
          </Button>
          <h4>Forgot Password?</h4>
          <Divider>OR</Divider>
          <Button
            type="default"
            icon={<AppstoreFilled />}
            className="microsoft-btn"
            size="large"
          >
            Signin with Microsoft
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
