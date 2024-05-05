import { useEffect, useState } from "react";

export default {
  title: "useEffect demo",
};

export const SimpleExample = () => {
  const [fake, setFake] = useState(1);
  const [counter, setCounter] = useState(1);

  console.log("SimpleExample");

  useEffect(() => {
    //debugger
    console.log("useEffect every render");
    document.title = counter.toString();
  });

  useEffect(() => {
    console.log("useEffect only first render (componentDidMount)");
    document.title = counter.toString();
  }, []);

  useEffect(() => {
    console.log("useEffect first render and every counter change");
    document.title = counter.toString();
  }, [counter]);

  return (
    <>
      Hello, {counter} {fake}
      <button onClick={() => setFake(fake + 1)}>fake+</button>
      <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
  );
};

export const SetIntervalExample = () => {
  const [fake, setFake] = useState(1);
  const [counter, setCounter] = useState(1);

  console.log("SetIntervalExample");

  // useEffect(() => {
  //     setTimeout(() => {
  //         console.log('setTimeout')
  //         document.title = counter.toString()
  //         console.log('useEffect every render')
  //     }, 1000)
  // }, [counter])

  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log("tick" + counter);
      setCounter((state) => state + 1);
    }, 1000);

    return () => {
      clearInterval(intervalID);
      console.log("Unmount");
    };
  }, []);

  return (
    <>
      Hello, counter: {counter} fake: {fake}
      {/* <button onClick={() => setFake(fake + 1)}>fake+</button>
      <button onClick={() => setCounter(counter + 1)}>counter+</button> */}
    </>
  );
};

export const ResetEffectExample = () => {
  const [counter, setCounter] = useState(1);

  console.log("Component render with counter = " + counter);

  useEffect(() => {
    console.log("effect occured " + counter);
    return () => {
      console.log("RESET EFFECT" + counter);
    };
  }, [counter]);

  const increase = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      Hello, counter: {counter} <button onClick={increase}>+</button>
    </>
  );
};

export const KeysTrackerExample = () => {
  const [text, setText] = useState("");
  console.log("Component rendered with " + text);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      console.log(e.key);
      setText((state) => state + e.key);
    };
    window.addEventListener("keypress", handler);
    return () => {
      window.removeEventListener("keypress", handler);
    };
  }, []); 

  return <div>Typed text: {text}</div>;
};

export const SetTimeoutExample = () => {
  const [text, setText] = useState("");
  console.log("Component rendered with " + text);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log("Timeout expired");
      setText("3 second passed");
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []); 

  return <div>{text}</div>;
};
