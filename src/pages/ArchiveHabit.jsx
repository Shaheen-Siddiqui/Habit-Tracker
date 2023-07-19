import { useNavigate } from "react-router-dom";
import { HabitCard } from "../component/HabitCard";
import { useContext } from "react";
import { HabitContext } from "../context/HabitContext";
import { AddHabitModal } from "../component/AddHabitModal";

export const ArchiveHabits = () => {
  const { archiveHabitCase } = useContext(HabitContext);
  const navigate = useNavigate();
  return (
    <>
      <button
        className="btn btn-sm btn-outline-secondary not-allowed"
        onClick={() => navigate("/")}
      >
        go back
      </button>
      <div className="d-flex gap-2 flex-wrap m-2">
        {archiveHabitCase.map((item, index) => {
          return <HabitCard key={index} item={item} dontShowActions={true} />;
        })}
      </div>
    </>
  );
};
