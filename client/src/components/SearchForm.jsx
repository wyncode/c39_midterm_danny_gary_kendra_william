import React from 'react';
import '../App.css';
import Form from 'react-bootstrap/Form';
const SearchForm = ({ search, onChange }) => {
  return (
    <Form.Control
      onChange={onChange}
      id="searchbar"
      type="text"
      value={search}
      size="lg"
      placeholder="What Beatles Song Would You Like to Learn Today?"
    />
  );
};
export default SearchForm;