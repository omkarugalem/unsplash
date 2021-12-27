// import React, { createContext, Component } from "react";
// let access_key = "_DBMXNB8jGFL2dy3aGMgdkPNUX96_Vr84W-YOyM6lyE";

// export let GalleryContextApi = createContext(null);

// class GalleryProvider extends Component {
//   state = {
//     unsplashPhotos: [],
//   };
//   async componentDidMount() {
//     let base_url = "https://api.unsplash.com";
//     let photos = await window.fetch(
//       `${base_url}/photos/?client_id=${access_key}`
//     );
//     let finalPhotos = await photos.json();
//     this.setState({ unsplashPhotos: finalPhotos });
//   }
//   render() {
//     return (
//       <GalleryContextApi.Provider value={this.state.unsplashPhotos}>
//         {this.props.children}
//       </GalleryContextApi.Provider>
//     );
//   }
// }
// export default GalleryProvider;

import React, { useEffect, createContext, useState } from "react";

let access_key = "_DBMXNB8jGFL2dy3aGMgdkPNUX96_Vr84W-YOyM6lyE";

export let GalleryContextApi = createContext(null);

const GalleryProvider = ({ children }) => {
  let [state, setState] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      let data = await window.fetch(
        `https://api.unsplash.com/photos/?client_id=${access_key}`
      );
      let finalData = await data.json();
      setState(finalData);
    };
    fetchData();
  }, [state]);
  return (
    <div>
      <GalleryContextApi.Provider value={state}>
        {children}
      </GalleryContextApi.Provider>
    </div>
  );
};

export default GalleryProvider;
