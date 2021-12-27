import React, { useContext, Fragment } from "react";
import { GalleryContextApi } from "./../ContextApi/Gallery";
import ListOfGallery from "./ListOfGallery";

const GalleryComponents = () => {
  let GalleryData = useContext(GalleryContextApi);

  return (
    <Fragment>
      {GalleryData.map(x => {
        console.log(x);
        return <ListOfGallery key={x.id} {...x} />;
      })}
    </Fragment>
  );
};

export default GalleryComponents;
