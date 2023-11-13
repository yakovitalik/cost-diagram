import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, {useState} from "react";

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2021, 2, 12),
    description: "Холодильник",
    amount: 39000
  },
  {
    id: 'c2',
    date: new Date(2021, 11, 25),
    description: "Ноутбук",
    amount: 42000
  },
  {
    id: 'c3',
    date: new Date(2021, 3, 1),
    description: "Джинсы",
    amount: 990
  },
  {
    id: 'c4',
    date: new Date(2023, 1, 16),
    description: "Консоль Xbox",
    amount: 49990
  },
  {
    id: 'c5',
    date: new Date(2023, 8, 12),
    description: "Велосипед",
    amount: 44690
  },
  {
    id: 'c6',
    date: new Date(2022, 4, 11),
    description: "Кросовки",
    amount: 2990
  },
  {
    id: 'c7',
    date: new Date(2022, 7, 23),
    description: "Костюм",
    amount: 990
  },
  {
    id: 'c8',
    date: new Date(2022, 9, 25),
    description: "Принтер",
    amount: 4350
  }
];

function App() {

  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...costs];
    });
  };

  return (
   <div>
    <NewCost onAddCost={addCostHandler} />
    <Costs costs={costs} />
   </div>
  );
}

export default App;
