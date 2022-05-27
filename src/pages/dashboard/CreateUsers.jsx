import React, { useState, useRef } from "react";
import { NavigationBarDashboard, SidebarDashboard } from "../../components/dashboard";
import { Form, Button, Image } from "react-bootstrap";
import imgBlank from "../../assets/images/blank-user.jpg";
export default function CreateUsers() {
  const [imageFile, setImageFile] = useState(imgBlank);
  const fileRef = useRef();

  function handleChange() {
    const image = fileRef.current.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      setImageFile(reader.result);
    });

    reader.readAsDataURL(image);
  }

  return (
    <div>
      <NavigationBarDashboard />
      <SidebarDashboard />
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-3">
        <h1>Create User</h1>
        <hr />
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="name destinations" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>User Level</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">Member</option>
              <option value="2">Admin</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Address</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Image style={{ maxWidth: "250px", maxHeight: "250px" }} src={imageFile} />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control ref={fileRef} onChange={handleChange} type="file" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Button variant="success" type="submit">
              Save
            </Button>
          </Form.Group>
        </Form>
      </main>
    </div>
  );
}
