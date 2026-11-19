import { useState } from "react";
import { produce } from "immer";
import { Trash, RefreshCcw, ArrowDownWideNarrow } from "lucide-react";
import ShoppingCart from "./ShoppingCart";

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



const App = () => <ShoppingCart />

export default App;
