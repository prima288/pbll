import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:8080/api/register', {
        name: name,
        email: email,
        password: password
      });
  
      // Handle successful response
      console.log('Data Inserted', response.data);
      
      // Show success alert
      window.alert('Registration successful!');
  
      // Redirect after successful registration
      navigate("/");
    } catch (error) {
      // Handle error
      console.error('Error inserting data', error);
    }
  };
  

  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="m-auto text-center">
            <form className="form mb-5" onSubmit={saveUser}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </form>
            <Link to="/login">Already have an account? Login</Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Signup;