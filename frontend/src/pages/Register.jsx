import { FaUser } from "react-icons/fa";
import { useState, useEffect } from "react";

function Register() {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setformData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    window.alert("Chutiya banaya");
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              onChange={onChange}
              value={name}
            />
            <input
              className="form-control"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              onChange={onChange}
              value={email}
            />
            <input
              className="form-control"
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              onChange={onChange}
              value={password}
            />
            <input
              className="form-control"
              type="password"
              name="password2"
              id="password2"
              placeholder="Confirm password"
              onChange={onChange}
              value={password2}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
