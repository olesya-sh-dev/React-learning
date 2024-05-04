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
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  return (
    <div>
      <div>Actual time <time>{now.toLocaleTimeString()}</time>
      </div>
      <div style={{ position: 'relative', height: 200, width: 200, borderRadius: '50%', border: '1px solid black' }}>
      <div style={{
        position: 'absolute',
        height: '50%',
        width: 1,
        background: 'black',
        transformOrigin: 'bottom',
        bottom: '50%',
        left: '50%',
        transform: `rotate(${seconds * 6}deg)`
      }}></div>
      <div style={{
        position: 'absolute',
        height: '40%',
        width: 3,
        background: 'blue',
        transformOrigin: 'bottom',
        bottom: '50%',
        left: '50%',
        transform: `rotate(${minutes * 6}deg)`
      }}></div>
      <div style={{
        position: 'absolute',
        height: '30%',
        width: 5,
        background: 'red',
        transformOrigin: 'bottom',
        bottom: '50%',
        left: '50%',
        transform: `rotate(${hours * 30}deg)`
      }}></div>
    </div>


    </div>
  );
};
