import { useState } from "react";
import Page1 from "./page1";
useState;

export default function Dropbox() {
  const [images, setImages] = useState([]);
  const photoCard =
    (images.length > 1 &&
      images.map((item) => {
        return <Page1 key={item._id} item={item} />;
      })) ||
    " no images yet";

  function handleDrop(e) {
    let updateFile;
    e.preventDefault();
    e.stopPropagation();
    //  setDragOverStyle({
    //    width: "200px",
    //    bg: "brand.green",
    //    color: "brand.offwhite",
    //  });
    const data = e.dataTransfer.getData("files");
    console.log(data);
    console.log(e.dataTransfer);

    if (data) {
      const imageDetails = JSON.parse(data);
      updateFile = [...images, imageDetails];
      console.log(updateFile);
      setImages(updateFile);
    }
    console.log(images);
  }
  return (
    <div
      className="w-full h-44 bg-slate-400"
      onDrop={(e) => {
        handleDrop(e);
      }}
    >
      <div>Drop items</div>
      <div>{photoCard}</div>
    </div>
  );
}
