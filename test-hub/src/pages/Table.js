import React, { Component } from "react";
import { Spinner } from 'react-bootstrap';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: false,
      isError: false,
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });

    const response = await fetch("http://localhost:3000/result");

    if (response.ok) {
      const users = await response.json();
      console.log(users);
      this.setState({ users, isLoading: false });
    } else {
      this.setState({ isError: true, isLoading: false });
    }
  }

  renderTableHeader=()=>{
      return Object.keys(this.state.users[0]).map(
        attr=><th key={attr}>
          {attr.toUpperCase()}
        </th>
      )
  }
  renderTableRows=()=>{
    return this.state.users.map(user=>{
      return (
        <tr key={user.fullname}>
             <td style={{border: '1px solid black'}}>{user.email}</td>
            <td style={{border: '1px solid black'}}>{user.fullname}</td>
            <td style={{border: '1px solid black'}}>{user.age}</td>
            <td style={{border: '1px solid black'}}>{user.gender}</td>
            <td style={{border: '1px solid black'}}>{user.address}</td>
            <td style={{border: '1px solid black'}}>{user.postcode}</td>
            <td style={{border: '1px solid black'}}>{user.ttncode}</td>
            <td style={{border: '1px solid black'}}>{user.testresult}</td>
            
        </tr>
      )
    })
  }

  render() {
    const { users, isLoading, isError } = this.state;

    if (isLoading) {
      return <div style={{ padding: '40px'}}>
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="success" />
        <br />
        Loading Your Data
        </div>;
      
    }
    if (isError) {
      return <div>Error</div>;
    }
    return users.length > 0 ? (
      <table class="table-test"  style={{border: '1px solid black'}}> 
        <thead style={{border: '1px solid black'}}>
        <tr style={{border: '1px solid black'}}>{this.renderTableHeader()}</tr>
        </thead>
        <tbody style={{border: '1px solid black'}}>
          {this.renderTableRows()}
        </tbody>
      </table>
    ) : (
      <div>No Users</div>
    );
  }
}

export default Table;
