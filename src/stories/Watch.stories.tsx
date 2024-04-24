import { useEffect, useState } from "react";

export default {
  title: "useEffect Watch",
  // component: Watch
};
export const WatchExample = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setNow(new Date());
      //console.log("time was changed");
      //console.log(new Date());
    }, 1000);
  }, []);

  return (
    <div>
      Actual time <time>{now.toLocaleTimeString()}</time>
    </div>
  );
};
