import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data, "1234");
      setPost(response.data);
    });
  }, []);

  console.log(post, "123");

  if (!post) return null;

  return (
    <div>
      {post.map((item) => (
        <ol>
          <b>ID</b>&nbsp;{item.userId}&nbsp;
          <br />
          <b>title:</b> &nbsp;{item.title}<br /> <b>body:</b> &nbsp;{item.body}
        </ol>
      ))}
      {/* <table class="border-separate border border-slate-500 ...">
  <thead>
    <tr>
      <th class="border border-slate-600 ...">State</th>
      <th class="border border-slate-600 ...">City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-slate-700 ...">Indiana</td>
      <td class="border border-slate-700 ...">Indianapolis</td>
    </tr>
 
  </tbody>
</table> */}
    </div>
  );
}
