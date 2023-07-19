import { createContext, useContext, useState } from "react";
import { SuperHabits } from "../database/HabitData";
import { v4 as uuid } from "uuid";

export const HabitContext = createContext(useContext);
export const HabitContextProvider = ({ children }) => {
  const [habit, setHabit] = useState(SuperHabits);
  const [archiveHabitCase, setArchiveHabitCase]=useState([])
  const [showModal, setShowModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState({
    id: uuid(),
    name: "",
    repeat: "monthly",
    goal: "1 time daily",
    timeOfDay: "morning",
    startDate: "today"
  });

  

  return (
    <HabitContext.Provider
      value={{
        input,
        setInput,
        habit,
        setHabit,
        edit,
        setEdit,
        showModal,
        setShowModal,
        archiveHabitCase, setArchiveHabitCase
      }}
    >
      {children}
    </HabitContext.Provider>
  );
};
