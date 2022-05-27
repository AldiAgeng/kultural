import React, { useState, useRef } from "react";
import { NavigationBarDashboard, SidebarDashboard } from "../../components/dashboard";
import { Form, Button, Image } from "react-bootstrap";
import imgBlank from "../../assets/images/blank.png";
export default function EditDestinations() {
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
        <h1>Edit Destinations</h1>
        <hr />
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="name destinations" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Adress</Form.Label>
            <Form.Control type="text" placeholder="adress destinations" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
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
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Form.Group>
        </Form>
      </main>
    </div>
  );
}
