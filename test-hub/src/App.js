import React, {useState} from 'react';
import Axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Col, Row, Container, Card} from 'react-bootstrap';
import './App.css';

function App() {

  const [email, setemail] = useState('')
  const [fullname, setfullname,] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [address, setAddress] = useState('')
  const [postcode, setPostCode,] = useState('')
  const [ttncode, setTtnCode] = useState('')
  const [testresult, setTestResult] = useState('')

  const submit =()=>{
    Axios.post('http://localhost:3000/result', {
      email: email, 
      fullname: fullname,
      age: age,
      gender: gender,
      address: address,
      postcode: postcode,
      ttncode: ttncode,
      testresult: testresult
    }).then((response) =>{
      console.log(response);
    })
  };


  return (

    <div className="App">
<Container>
<Card className = "cardz" >
  <Card.Header>MYCOVTEST HUB</Card.Header>
  <Card.Body style={{ width: '35rem'}}>
    <Card.Title><h2>Enter your test result details</h2></Card.Title>
    

    
      {/* <Row >
        <p>Enter Test Results</p>
      </Row> */}
      
      <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="enter your email" onChange={(e)=>{
      setemail(e.target.value);
    }}/>
  </Form.Group>

  <Form.Group controlId="fullname">
    <Form.Label>Full Name</Form.Label>
    <Form.Control type="text" placeholder="enter your full names" onChange={(e)=>{
      setfullname(e.target.value);
    }}/>
  </Form.Group>

  <Form.Group controlId="age">
    <Form.Label>Age</Form.Label>
    <Form.Control type="text" placeholder="entert your age" onChange={(e)=>{
      setAge(e.target.value);
    }}/>
  </Form.Group>

  <Form.Group controlId="gender">
    <Form.Label>Gender</Form.Label>
    <Form.Control as="select" placeholder ="enter gender" onChange={(e)=>{
      setGender(e.target.value);
    }}>
      <option>female</option>
      <option>male</option>
      <option>other</option>
    </Form.Control>
  </Form.Group>

  <Form.Group controlId="address">
    <Form.Label>Address</Form.Label>
    <Form.Control type="text" placeholder="enter your address" onChange={(e)=>{
      setAddress(e.target.value);
    }}/>
  </Form.Group>

  <Form.Group controlId="postcode">
    <Form.Label>Post Code</Form.Label>
    <Form.Control type="text" placeholder="enter post code" onChange={(e)=>{
      setPostCode(e.target.value);
    }}/>
  </Form.Group>

  <Form.Group controlId="ttncode">
    <Form.Label>TTN Code</Form.Label>
    <Form.Control type="text" placeholder="Enter TTN Code" onChange={(e)=>{
      setTtnCode(e.target.value);
    }}/>
  </Form.Group>

  <Form.Group controlId="testresults">
    <Form.Label>Test Results</Form.Label>
    <Form.Control as="select" placeholder="enter test results" onChange={(e)=>{
      setTestResult(e.target.value);
    }}>
      <option>Positive</option>
      <option>Negative</option>
      <option>Inconclusive</option>
    </Form.Control>
  </Form.Group>

  
  <Button variant="primary" type="submit" onClick={submit}>
    Submit
  </Button>
</Form>

  </Card.Body>
</Card>
</Container>

    
    </div>
  );
}


//     <div className="App">
//       <div className="registration">
//         <h1>Enter Your Details</h1>
//         <label>email</label>
//         <input type="text" 
//          onChange ={(e)=> {
//           setemail(e.target.value);
//         }} /> <br />
//         <label>fullname</label>
//         <input type="text" 
//          onChange ={(e)=> {
//           setfullname(e.target.value);
//         }} /> <br />
//         <label>age</label>
//         <input type="text" 
//          onChange ={(e)=> {
//           setAge(e.target.value);
//         }} /> <br />
//         <label>gender</label>
//         <input type="text" 
//          onChange ={(e)=> {
//           setGender(e.target.value);
//         }} /> <br />
//         <label>address</label>
//         <input type="text" 
//          onChange ={(e)=> {
//           setAddress(e.target.value);
//         }} /> <br />
//         <label>postcode</label>
//         <input type="text" 
//          onChange ={(e)=> {
//           setPostCode(e.target.value);
//         }} /> <br />
//         <label>ttncode</label>
//         <input type="text" 
//          onChange ={(e)=> {
//           setTtnCode(e.target.value);
//         }} /> <br />
//         <label>testresults</label>
//         <input type="text" 
//          onChange ={(e)=> {
//           setTestResult(e.target.value);
//         }} /> <br />
//         <button onClick={submit}>Register</button>
//       </div>

//     </div>
//   );
// }

export default App;
