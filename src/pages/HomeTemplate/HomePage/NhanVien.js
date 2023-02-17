import React from "react";

export default function NhanVien() {
  return (
    <>
      <div className="form-group">
        <label>Ma NV</label>
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
        <label>Ten NV</label>
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
        <label>Email</label>
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
