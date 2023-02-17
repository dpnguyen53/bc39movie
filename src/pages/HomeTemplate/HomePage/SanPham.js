import React from "react";

export default function SanPham() {
  return (
    <>
      <div className="form-group">
        <label>Ma SP</label>
        <input
          type="text"
          name
          id
          className="form-control"
          placeholder
          aria-describedby="helpId"
        />
      </div>
      <div className="form-group">
        <label>Ten SP</label>
        <input
          type="text"
          name
          id
          className="form-control"
          placeholder
          aria-describedby="helpId"
        />
      </div>
    </>
  );
}
