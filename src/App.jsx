import React, { Component } from "react";
import GalleryComponents from "./Components/GalleryComponents";
import { GalleryContextApi } from "./ContextApi/Gallery";

class App extends Component {
  render() {
    let data = this.context;
    console.log(data);
    return (
      <section id="mainBlock">
        <article>
          <GalleryComponents />
        </article>
      </section>
    );
  }
}
export default App;
App.contextType = GalleryContextApi;
