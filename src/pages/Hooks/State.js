// snippet: rfce
import React, { useState } from "react";

function State() {
  // useState nhận vào tham số là giá trị khởi tạo và return về 1 array gồm 2 phần tử
  // Phần tử 1: giá trị của state
  // Phần tử 2: Hàm dùng để cập nhật giá trị của state
  const [message, setMessage] = useState("Hello BC39");
  const handleSetMessage = () => {
    const value = prompt("Input your message:");
    setMessage(value);
  };

  // Nếu muốn tạo nhiều state ta gọi hàm useState nhiều lần
  const [count, setCount] = useState(0);

  // State là array
  const [colors, setColors] = useState(["red", "green", "blue"]);
  const handleAddColor = () => {
    const color = prompt("Input your color:");
    setColors([...colors, color]);

    // Quá trình thay đổi state là bất đồng bộ, ta nên viết dạng function nếu cần cập nhật state liên tục và cần dùng giá trị state hiện tại đó để tính toán ra giá trị state mới (Ví dụ thay đổi state trong vòng lặp)
    // setColors((prevColors) => [...prevColors, color]);
    // setColors((prevColors) => [...prevColors, color]);
  };
  const handleRemoveColor = () => {
    const color = prompt("Input your color:");
    const newColors = colors.filter((item) => {
      return item !== color;
    });
    setColors(newColors);
  };

  // State là object
  const [form, setForm] = useState({ username: "", email: "" });
  const handleChangeForm = (evt) => {
    const { name, value } = evt.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <h1>State</h1>

      <p>Message: {message}</p>
      <button onClick={handleSetMessage}>Set Message</button>

      <br />
      <br />

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <br />
      <br />

      <p>Colors: {colors.join(", ")}</p>
      <button onClick={handleAddColor}>Add color</button>
      <button onClick={handleRemoveColor}>Remove color</button>

      <br />
      <br />

      <p>
        User Form: {form.username} - {form.email}
      </p>
      <input
        className="form-control"
        placeholder="Username"
        name="username"
        value={form.username}
        onChange={handleChangeForm}
      />
      <input
        className="form-control"
        placeholder="Email"
        name="email"
        value={form.email}
        onChange={handleChangeForm}
      />
    </div>
  );
}

export default State;
