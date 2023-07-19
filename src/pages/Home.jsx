import { useContext, useState } from "react";
import { AddHabitModal } from "../component/AddHabitModal";
import { HabitCard } from "../component/HabitCard";
import { HabitContext } from "../context/HabitContext";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { habit, setShowModal, showModal } = useContext(HabitContext);
  const navigate = useNavigate();
  return (
    <>
      <button
        className="btn btn-outline-dark mb-3"
        onClick={() => navigate("/archive")}
      >
        Check Archive
      </button>
      <br />
      <button
        className="btn mb-3 create-btn"
        onClick={() => setShowModal((showModal) => !showModal)}
      >
        create new habit
      </button>
      <div className="habit-case">
        {!habit.length ? (
          <h2 className="header-text">No Hanit Listed Here</h2>
        ) : (
          habit.map((item, index) => {
            return <HabitCard key={index} item={item} />;
          })
        )}
      </div>
      {showModal && <AddHabitModal />}
    </>
  );
};
