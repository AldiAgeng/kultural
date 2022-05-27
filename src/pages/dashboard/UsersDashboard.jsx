import React from "react";
import { NavigationBarDashboard, SidebarDashboard } from "../../components/dashboard";
import { Button, Table } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";
export default function UsersDashboard() {
  return (
    <div>
      <NavigationBarDashboard />
      <SidebarDashboard />
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-3">
        <h1>Users</h1>
        <hr />
        <LinkContainer to="/dashboard/users/create">
          <Button className="mb-3" variant="success">
            <i class="bi bi-plus-circle"></i> Add User
          </Button>
        </LinkContainer>
        <Table striped bordered hover className="text-center">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <div className="d-flex justify-content-around">
                  <LinkContainer to="/dashboard/users/edit">
                    <Button variant="primary">Edit</Button>
                  </LinkContainer>
                  <Button variant="danger">Delete</Button>
                </div>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>
                <div className="d-flex justify-content-around">
                  <LinkContainer to="/dashboard/users/edit">
                    <Button variant="primary">Edit</Button>
                  </LinkContainer>
                  <Button variant="danger">Delete</Button>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </main>
    </div>
  );
}
