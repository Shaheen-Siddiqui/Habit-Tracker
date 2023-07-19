import { useContext } from "react";
import { HabitContext } from "../context/HabitContext";
import toast from "react-hot-toast";

export const HabitAtions = ({ editHabit }) => {
  const { setHabit, setShowModal, setInput, setEdit, setArchiveHabitCase } =
    useContext(HabitContext);

  const deleteHabit = () => {
    setHabit((dbHabit) => dbHabit.filter((habit) => habit.id !== editHabit.id));
    toast.error("Habit Deleted!");
  };

  const updateHabit = () => {
    setShowModal((showModal) => !showModal);
    setInput(editHabit);
    setEdit(true);
  };

  const archiveHabit = () => {
    setArchiveHabitCase((archive) => [...archive, editHabit]);
    setHabit((dbHabit) => dbHabit.filter((habit) => habit.id !== editHabit.id));
    toast("Habit Archived..!");
  };

  return (
    <li className="list-group-item">
      <button className="btn btn-danger btn-sm" onClick={deleteHabit}>
        delete
      </button>
      <>
        <button className="btn btn-sm btn-success m-2" onClick={updateHabit}>
          update
        </button>
        <button className="btn btn-sm btn-outline-dark" onClick={archiveHabit}>
          archive
        </button>
      </>
    </li>
  );
};
