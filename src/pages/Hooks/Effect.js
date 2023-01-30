import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

/**
 * MOUNTING: component khởi tạo
 * - render
 * - effect callback
 *
 * UPDATING: state hoặc props thay đổi
 * - render
 * - cleanup effect (nếu có) khi depedencies (các giá trị được truyền vào array) bị thay đổi
 * - effect callback khi depedencies bị thay đổi
 *
 * - UNMOUNTING: component bị huỷ bỏ
 * - cleanup effect (nếu có)
 */

function Effect() {
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState("");

  const fetchData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts", {
        params: {
          userId: userId || undefined,
        },
      })
      .then((response) => {
        // Gọi API thành công
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // useEffect với tham số thứ 2 là 1 array rỗng sẽ chạy 1 lần duy nhất sau lần render đầu tiên (tương tự componentDidMount)
  // Nếu trong effect callback có return về một function, nó sẽ được chạy trước khi component bị huỷ bỏ (tương tự componentWillUnmount)
  // Thường dùng để call API hoặc tương tác với DOM
  // useEffect(() => {
  //   console.log("Effect run");
  //   fetchData();

  //   return () => {
  //     // Dọn dẹp các tác vụ: removeEventListener, clearTimeout,...
  //     console.log("Cleanup effect run");
  //   };
  // }, []);

  // useEffect với tham số thứ 2 là 1 array có chứa giá trị sẽ chạy sau lần render đầu tiên và được chạy sau các lần render tiếp theo NẾU các giá trị bên trong array bị thay đổi.
  // Nếu trong effect callback có return về một function, được chạy trước khi component bị huỷ bỏ và từ lần chạy thứ 2 trở đi nó sẽ được chạy trước effect callback
  useEffect(() => {
    console.log("Effect run");
    fetchData();

    return () => {
      console.log("Cleanup effect run");
    };
  }, [userId]);

  console.log("Render run");
  return (
    <div className="container" style={{ height: "3000px" }}>
      <Link to="/hooks-state">State</Link>

      <h1>Posts</h1>
      <select onChange={(evt) => setUserId(evt.target.value)}>
        <option value="">Select User</option>
        <option value={1}>User 1</option>
        <option value={2}>User 2</option>
        <option value={3}>User 3</option>
        <option value={4}>User 4</option>
      </select>
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Effect;
