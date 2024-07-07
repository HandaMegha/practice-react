// import { useState } from "react";
// import SearchExample from "./searchExample";
// import { Context } from "./Context";
// import IncrementCount from "./IncrementCount";
// import IncrementCountOnHover from "./IncrementCountOnHover";
// import ChildComponent from "./ChildComponent";
// import CountReducer from "./CountReducer";
// import ParentCallback from "./ParentCallback";
// import ParentMemo from "./ParentMemo";
// import FetchExample from "./fetchExample";
// import ToggleComponent from "./ToggleComponent";
// import Timer from "./Timer";
import Form from "./form";

const App = () => {
  // const [text, setText] = useState("");

  return (
    //Context and HOC example
    // <Context.Provider value={{ text, setText }}>
    //   <IncrementCount name="IncrementCounter" />
    //   <IncrementCountOnHover name="IncrementCountOnHover" />
    //   <ChildComponent />
    // </Context.Provider>
    //UserReducer example
    // <div>
    //   <CountReducer />
    // </div>
    //Usecallback
    // <div>
    //   <ParentCallback />
    // </div>
    //Usememo
    // <div>
    //   <ParentMemo />
    // </div>
    //Fetch API example
    // <FetchExample />
    //SearchExample
    // <SearchExample />
    //Custom hook
    // <ToggleComponent />
    //Start and Stop Timer
    // <Timer />
    //Create a form value as name and radio button and onsubmit list should be shown below
    <Form />
  );
};

export default App;