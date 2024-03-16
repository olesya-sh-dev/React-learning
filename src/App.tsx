import React, { useState } from "react";
import "./App.css";

import { Rating, RatingValueType } from "./components/Rating/Rating";

function hello() {
  alert("IT-KAMASUTRA");
}
// hello();
function App() {
  console.log("App is rendering");

  let [ratingValue, setRatingValue] = useState<RatingValueType>(0);

  return (
    <div className={"App"}>
      <Rating value={ratingValue} onClick={setRatingValue} />
    </div>
  );
}

type PageTitlePropsType = {
  title: string;
};
function PageTitle(props: PageTitlePropsType) {
  console.log("PageTitle is rendering");
  return <h1>{props.title}</h1>;
}
export default App;
