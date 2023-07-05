import { useState } from "react";
import "./App.css";
import Button from "./components/button/Button";
import Form from "./components/form/Form";
import Input from "./components/input/Input";

function App() {
  const [user, setUser] = useState({ name: "", password: "" });

  const handleChange = (e) => {
    if (e.target.type === "text") {
      setUser({ ...user, name: e.target.value });
      console.log(user);
    } else if (e.target.type === "password") {
      setUser({ ...user, password: e.target.value });
      console.log(user);
    }
  };

  const handleClick = () => {
    if (user.name === "") {
      alert("You must write the USERNAME");
    } else if (user.password === "") {
      alert("You must write the YOUR PASSWORD");
    } else {
      alert(
        "Username :" +
          " " +
          user.name +
          " " +
          "Your password :" +
          " " +
          user.password
      );
    }
  };

  return (
    <div className="App">
      <h1>Entry Form</h1>
      <Form>
        <Input
          type={"text"}
          value={user.name}
          placeHolder={"Enter Username"}
          onChange={handleChange}
        />
        <Input
          type={"password"}
          value={user.password}
          placeHolder={"Enter Your Password"}
          onChange={handleChange}
        />
        <Button onClick={handleClick} />
      </Form>
    </div>
  );
}

export default App;
