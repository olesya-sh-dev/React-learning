import React, { useState } from "react";
import "./App.css";

import { Rating, RatingValueType } from "./components/Rating/Rating";
import { UncontrolledRating } from "./components/UncontrolledRating/UncontrolledRating";
import { Accordion } from "./components/Accordion/Accordion";
import { OnOffFromLesson } from "./components/OnOffFromLesson/OnOffFromLesson";
import { UnControlledOnOff } from "./components/UncontrolledOnOff/UncontrolledOnOff";

function hello() {
  alert("IT-KAMASUTRA");
}
// hello();
function App() {
  console.log("App is rendering");

  let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
  let [switchOn, setSwitchOn] = useState(false);

  return (
    <div className={"App"}>
      <Rating value={ratingValue} onClick={setRatingValue} />
      <UncontrolledRating onChange={setRatingValue} />
      <Accordion
        titleValue="Menu"
        collapsed={accordionCollapsed}
        onChange={() => setAccordionCollapsed(!accordionCollapsed)}
      />
      <OnOffFromLesson on={switchOn} onChange={setSwitchOn} />
      <UnControlledOnOff onChange={setSwitchOn} />
      {switchOn.toString()}
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
