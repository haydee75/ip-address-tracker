import React from "react";

const Form = (props) => {
  return (
    <div className="Form">
      <h1>IP Address Tracker</h1>
      <form className="input-form" onSubmit={props.handleSubmit}>
        <label>
          <input
            type="text"
            value={props.ipAddress}
            onChange={props.handleChange}
            placeholder={props.placeholder}
          />
        </label>
        <span className="primary">
          <input type="submit" value="" />
        </span>
      </form>
    </div>
  );
};

export default Form;
