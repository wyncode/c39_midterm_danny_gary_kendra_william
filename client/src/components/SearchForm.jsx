import React from 'react';

import '../App.css';

import Form from 'react-bootstrap/Form';

const SearchForm = ({ handleSubmitProp }) => {
  return (
    <Form
      className="searchForm"
      onSubmit={handleSubmitProp}
      style={{ margin: '3rem' }}
    >
      <Form.Row>
        <Form.Control
          id="searchbar"
          type="text"
          size="lg"
          placeholder="What Beatles Song Would You Like to Learn Today?"
        ></Form.Control>
      </Form.Row>
    </Form>
  );
};

export default SearchForm;
