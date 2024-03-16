import React, { useState } from "react";
import "./App.css";

import { Rating, RatingValueType } from "./components/Rating/Rating";
import { UncontrolledRating } from "./components/UncontrolledRating/UncontrolledRating";
import Accordion from "./components/Accordion/Accordion";
import OnOffFromLesson from "./components/OnOffFromLesson/OnOffFromLesson";

function hello() {
  alert("IT-KAMASUTRA");
}
// hello();
function App() {
  console.log("App is rendering");

  let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
  let [on, setOn] = useState(false);

  return (
    <div className={"App"}>
      <OnOffFromLesson onClick={() => setOn(!on)} on={on} />
      <Rating value={ratingValue} onClick={setRatingValue} />
      <UncontrolledRating />
      <Accordion
        titleValue="Menu"
        collapsed={accordionCollapsed}
        onClick={() => setAccordionCollapsed(!accordionCollapsed)}
      />
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
