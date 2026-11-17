import { useState } from "react";
import { produce } from "immer";

const App = () => {
  // state for the counter
  const [user, setUser] = useState({
    name: "Alice",
    details: {
      age: 25,
      location: "New York",
    }
  });
 
  //Incorrect: Mutatin the existing state directly
  const updateNameIncorrect = () =>{
    //Directly modifying state (WRONGG)
    user.name = "Bob";
    /* Setting the same object reference, it won't work as React state updates depends
    on detecting new object references. 
    */
    setUser(user);
  };

  //Correctly updating the object state (without mutation)
  const updateName = () => {
    //Creating a new object copying the existing user detaisl
    setUser({ ...user, name:"Bob"})
  };

  //Updating the nested details object
  const updateLocation = () => {
    setUser({
      ...user,
      //creating a new details object
      details:{
        //Copy existing details with the spread syntax
        ...user.details,
        location: "San Francisco",
      },
    })
  };

//using immer to simplify updates
const updateAgeWithImmer = () => {
  setUser(
    produce(user, (draft) => {
      //immer allows direct updates without breaking immutability
      draft.details.age = 30;
    })
  );
};

  return (
      <div style={{padding: "20px", fontFamily: "Arial"}}>
        <button onClick={updateName}> Change Name to Bob</button>
        <button onClick={updateLocation}> Change location to San Francisco</button>
        <button onClick={updateAgeWithImmer}> Change Age to 30 (With Immer)</button>
        <p>
            <strong>
              Name:
            </strong>
            {user.name}
        </p>
        <p>
            <strong>
              Age:
            </strong>
            {user.details.age}
        </p>
        <p>
            <strong>
              Location:
            </strong>
            {user.details.location}
        </p>
      </div>
    );
};


export default App;
