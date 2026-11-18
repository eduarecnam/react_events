import { useState } from "react";
import { produce } from "immer";
import { Trash, RefreshCcw, ArrowDownWideNarrow } from "lucide-react";

const animalOptions = [
  { name: "Peregrine falcon", speed: 242 },
  { name: "Golden eagle", speed: 200 },
  { name: "Gyrfalcon", speed: 130 },
  { name: "White-throated needletail swift", speed: 105 },
  { name: "Mexican free-tailed bat", speed: 100 },
  { name: "Black marlin", speed: 82 },
  { name: "Cheetah", speed: 75 },
  { name: "Sailfish", speed: 68 },
  { name: "Pronghorn antelope", speed: 61 },
  { name: "Swordfish", speed: 60 },
  { name: "Springbok", speed: 55 },
  { name: "American quarter horse", speed: 55 },
  { name: "Lion", speed: 50 },
  { name: "Blue wildebeest", speed: 50 },
  { name: "Shortfin mako shark", speed: 45 },
  { name: "Greyhound", speed: 45 },
  { name: "Ostrich", speed: 45 }
];



const App = () => {
  const [animals, setAnimals] = useState([
    {id: 1, name: "Cheetah", speed: 130},
    {id: 2, name: "African Elephant", speed: 48},
    {id: 3, name: "Rabbit", speed: 40},
    {id: 4, name: "Horse", speed: 70},
    {id: 5, name: "Lion", speed: 80},
  ]);

  //Incorrect way of adding an animal
  const addAnimalIncorrect = () =>{
    //newAnimals points to the same array in memory
    const newAnimals = animals;
    //push mutates animals since newAnimals point to animals (hence no re-rendering triggered)
    newAnimals.push({ id: Date.now(), name: "Lion", speed: 80 });
    setAnimals(newAnimals);
  }

  //adding a new animal (The correct way)
  const addAnimal = () =>{
    setAnimals([
      //bubilding a new array that is a copy of the animals array usingg the spread operator
      ...animals,
      {id: Date.now(), name: "Greyhound", speed: 72}
    ])
  }
  //replacing an animal with a random one
  const replaceAnimal = (id) => {
    //find the animal being replaced
    const currentAnimal = animals.find((a) => a.id === id);
    //filter out the current animal from animalOptions
    const availableAnimals = animalOptions.filter(
      (a) => a.name !== currentAnimal.name
    );
    //picking an animal (random) from the filtered list
    const newAnimal = availableAnimals[
          Math.floor(Math.random() * availableAnimals.length)
        ];

    /*updating the animals list by mapping through the animals
    and matching animal with the newly selected one 
    updating the relevant entry in the animals array without
    mutating the original state*/
    setAnimals(animals.map (
      /* Starts with a copy of the existing matching aniamls, then
      we merge it with the new animal to change only the animal name
      and speed, keeping the animal ID */
      (a) => (a.id === id ? { ...a, ...newAnimal } : a)
    ));
  };

  /* With immer we're allowed to use mutating methods on the draft array
  which stores a copy of the animal sate*/
  const addAnimalWithImmer = () =>{
    setAnimals(
      produce(animals, (draft) => {
        const newAnimal = animalOptions[
          Math.floor(Math.random() * animalOptions.length)
        ];
        //pushing a new animal into the copy (draft)
        draft.push(newAnimal);
      })
    )
  }

  const removeAnimal = (id) => {
    setAnimals(animals.filter((a) => a.id !== id));
  };

  //Sorting animals by speed
  const sortBySpeed = () => {
    /*Using the spread operator to create a copy of the state before sorting,
    then we're using a comparisson function to sort the animals on descending order
    of speed */
    setAnimals([...animals].sort((a, b) => b.speed - a.speed));
  };

  return (
      <div style={{padding: "20px", fontFamily: "Arial"}}>
        <h2> Animals and Their Speeds</h2>
        <div style={{ marginTop: "20px", display: "flex", gap: "10px"}}>
          <button
            onClick={addAnimal}
            style={{
              padding: "10px 20px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}  
          >
            Add Greyhound
          </button>
          <button
            onClick={addAnimalWithImmer}
            style={{
              padding: "10px 20px",
              backgroundColor: "#2196F3",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}  
          >
            Add random animal with Immer
          </button>

          <button
            onClick={sortBySpeed}
            style={{
              padding: "10px 20px",
              backgroundColor: "#FF9800",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}  
          >
            <ArrowDownWideNarrow />
          </button>

        </div>
        <ul style={{ padding: 0, listStyle: "none"}}>
            {animals.map((a) => (
              <li
                key={a.id}
                style={{
                  padding: "10px 0",
                  borderBottom: "1px solid #ddd",
                  fontSize: "16px",
                }}
              >
                  <div>
                    {a.name} - {a.speed} km/h
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <RefreshCcw 
                          onClick={() => replaceAnimal(a.id)}
                          style={{
                            cursor: "pointer",
                            marginLeft: "10px",
                            color: "blue",
                            fontSize: "18px"
                          }}  
                        />
                        <Trash 
                        onClick={() => removeAnimal(a.id)}
                        style={{
                            cursor: "pointer",
                            marginLeft: "10px",
                            color: "red",
                            fontSize: "18px"
                          }} 
                        />
                    </div>
                  </div>
              </li>
            ))}
        </ul>
      </div>
    );
};


export default App;
