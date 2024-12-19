import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { BsSave } from 'react-icons/bs'; // Save icon için

function App() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <Form className="p-4 bg-secondary rounded">
        {/* Purpose */}
        <Form.Group controlId="purpose" className="mb-3">
          <Form.Label className="text-white fw-bold">Purpose</Form.Label>
          <div className="d-flex gap-3">
            <Form.Check
              type="radio"
              label="Client"
              name="purpose"
              id="purpose_client"
              value="client"
            />
            <Form.Check
              type="radio"
              label="Group"
              name="purpose"
              id="purpose_group"
              value="group"
            />
            <Form.Check
              type="radio"
              label="Agent"
              name="purpose"
              id="purpose_agent"
              value="agent"
            />
          </div>
        </Form.Group>

        {/* Label */}
        <Form.Group controlId="label" className="mb-3">
          <Form.Label className="text-white fw-bold">Label</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Please write label to here." 
            name="label" 
          />
        </Form.Group>

        {/* Key */}
        <Form.Group controlId="key" className="mb-3">
          <Form.Label className="text-white fw-bold">Key</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Please write key to here." 
            name="key" 
          />
        </Form.Group>

        {/* Status */}
        <Form.Group controlId="status" className="mb-3">
          <Form.Label className="text-white fw-bold">Status</Form.Label>
          <div className="d-flex gap-3">
            <Form.Check
              type="radio"
              label="Active"
              name="status"
              id="status_active"
              value="active"
            />
            <Form.Check
              type="radio"
              label="Passive"
              name="status"
              id="status_passive"
              value="passive"
            />
          </div>
        </Form.Group>

        {/* Save Button */}
        <Button 
          variant="success" 
          type="submit" 
          className="w-100 d-flex align-items-center justify-content-center gap-2"
        >
          <BsSave /> Save
        </Button>
      </Form>
    </div>
  );
}

export default App;
