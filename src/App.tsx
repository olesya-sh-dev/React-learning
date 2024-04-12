import React, { useState } from "react";
import "./App.css";

import { Rating, RatingValueType } from "./components/Rating/Rating";
import { UncontrolledRating } from "./components/UncontrolledRating/UncontrolledRating";
import { Accordion } from "./components/Accordion/Accordion";
import { OnOffFromLesson } from "./components/OnOffFromLesson/OnOffFromLesson";
import { UnControlledOnOff } from "./components/UncontrolledOnOff/UncontrolledOnOff";
import { Select } from "./components/Select/Select";

function hello() {
  alert("IT-KAMASUTRA");
}
// hello();
function App() {
  console.log("App is rendering");

  let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
  let [switchOn, setSwitchOn] = useState(false);

  const RatingMemo = React.memo(Rating);
  const UnControRatingMemo = React.memo(UncontrolledRating);
  const AccordionMemo = React.memo(Accordion);
  const OnOffFromLessonMemo = React.memo(OnOffFromLesson);
  const UnControlledOnOffMemo = React.memo(UnControlledOnOff);

  return (
    <div className={"App"}>
      {/* <Select
        value={ratingValue}
        onChange={setRatingValue}
        items={[
          { title: "1", value: 1 },
          { title: "2", value: 2 },
          { title: "3", value: 3 },
        ]}
      /> */}
      <RatingMemo value={ratingValue} onClick={setRatingValue} />
      <UnControRatingMemo onChange={setRatingValue} />
      <AccordionMemo
        titleValue="Menu"
        collapsed={accordionCollapsed}
        onChange={() => setAccordionCollapsed(!accordionCollapsed)}
        onClick={(value) => console.log(value)}
        items={[]}
      />
      <OnOffFromLessonMemo on={switchOn} onChange={setSwitchOn} />
      <UnControlledOnOffMemo onChange={setSwitchOn} />
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
