const m = require("mithril");
const root = document.getElementById("app");

// styling
// import "./index.css";

// import App from "./components/layouts/App.jsx";

m.render(
  root,
  //   <App>
  <div>
    <h1>Welcome to our Mithril page!</h1>
    <p> We're using JSX to render all these things like: </p>
    <h3>this list</h3>
    <ul>
      <li>item1</li>
      <li>item2</li>
      <li>item3</li>
    </ul>

    <h3>and this image</h3>
    <img
      src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fforbestechcouncil%2Ffiles%2F2019%2F01%2Fcanva-photo-editor-8-7.jpg"
      width="400"
    />

    <h3>and this form</h3>
    <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
  </div>
  {/* //   </App> */}
);
