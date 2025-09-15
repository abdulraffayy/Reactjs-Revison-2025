import React, { useState } from "react";

export default function Taskinput() {
  const [form, setForm] = useState({
    field1: "",
    field2: "",
    field3: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // show data in console
    console.log("Form data:", form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Field 1:</label>
        <input
          name="field1"
          value={form.field1}
          onChange={handleChange}
          placeholder="Enter field 1"
        />
      </div>

      <div>
        <label>Field 2:</label>
        <input
          name="field2"
          value={form.field2}
          onChange={handleChange}
          placeholder="Enter field 2"
        />
      </div>

      <div>
        <label>Field 3:</label>
        <input
          name="field3"
          value={form.field3}
          onChange={handleChange}
          placeholder="Enter field 3"
        />
      </div>

      <button type="submit">Show in Console</button>
    </form>
  );
}
