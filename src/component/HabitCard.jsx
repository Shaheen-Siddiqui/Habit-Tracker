import { useContext } from "react";
import { HabitAtions } from "./HabitAction";
import { HabitContext } from "../context/HabitContext";
import toast from "react-hot-toast";

export const HabitCard = (props) => {
  const { setArchiveHabitCase } = useContext(HabitContext);
  const { name, repeat, goal, timeOfDay, startDate, id } = props.item;

  const deleteArchiveHabit = () => {
    setArchiveHabitCase((archiveHabitCase) =>
      archiveHabitCase.filter((item) => item.id !== id)
    );
    toast.error("Deletd!!");
  };
  return (
    <ul className="list-group">
      <li className="list-group-item active" aria-current="true">
        <h5>{name}</h5>
      </li>
      <li className="list-group-item">
        <strong>goal</strong>&nbsp; {goal}
      </li>
      <li className="list-group-item">
        <strong>timeOfDay</strong>&nbsp; {timeOfDay}
      </li>
      <li className="list-group-item">
        <strong>startDate</strong>&nbsp; {startDate}
      </li>
      <li className="list-group-item">
        <strong>repeat</strong>&nbsp; {repeat}
      </li>
      {!props.dontShowActions ? (
        <HabitAtions editHabit={props.item} />
      ) : (
        <button className="btn btn-danger btn-sm" onClick={deleteArchiveHabit}>
          delete
        </button>
      )}
    </ul>
  );
};
