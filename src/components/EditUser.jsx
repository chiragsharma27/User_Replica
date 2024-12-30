import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';

const EditUser = ({ user, onClose, onSave }) => {
  const [editedUser, setEditedUser] = useState(user);
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({ ...prev, [name]: value }));
    setShowAlert(false); // Dismiss alert on change
  };

  const handleSave = () => {
    const { name, email, phone, website } = editedUser;

    // Check if all fields are filled
    if (!name || !email || !phone || !website) {
      setShowAlert(true);
      return;
    }

    onSave(editedUser);
  };

  return (
    <Modal show onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {showAlert && (
          <Alert variant="danger">All fields are required. Please fill them out.</Alert>
        )}
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>
              <span style={{ color: 'red' }}>*</span> Name
            </Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={editedUser.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              <span style={{ color: 'red' }}>*</span> Email
            </Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={editedUser.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              <span style={{ color: 'red' }}>*</span> Phone
            </Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={editedUser.phone}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              <span style={{ color: 'red' }}>*</span> Website
            </Form.Label>
            <Form.Control
              type="text"
              name="website"
              value={editedUser.website || ''}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditUser;
