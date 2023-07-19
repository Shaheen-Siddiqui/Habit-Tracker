import { useContext, useState } from "react";
import { HabitContext } from "../context/HabitContext";
import toast from "react-hot-toast";
import { v4 as uuid } from "uuid";

export const AddHabitModal = () => {
  const { setHabit, setShowModal, input, setInput, edit, setEdit } =
    useContext(HabitContext);

  const formHandler = (event) => {
    event.preventDefault();

    if (edit) {
      setHabit((dbHabit) =>
        dbHabit.map((item) => (item.id === input.id ? input : item))
      );
      setEdit(false);
      toast.success("Habit Edited!");
    } else {
      setHabit((habit) => [input, ...habit]);
      toast.success("New Habit Created!");
    }
    setInput({
      id: uuid(),
      name: "",
      repeat: "monthly",
      goal: "1 time daily",
      timeOfDay: "morning",
      startDate: "today",
    });
    setShowModal(false);
  };

  const formSubscriber = (event) => {
    const { name, value } = event.target;
    setInput((input) => ({ ...input, [name]: value }));
  };

  return (
    <form id="modal" onSubmit={formHandler}>
      <div id="modal-content">
        <label htmlFor="name">Name</label>
        <input
          required
          value={input.name}
          name="name"
          autoComplete="off"
          type="text"
          className="form-control mb-2"
          id="name"
          onChange={formSubscriber}
        />
        <div className="d-flex gap-2 m-1">
          <div className="selects">
            <label htmlFor="repeat">Repeat</label>
            <select
              value={input.repeat}
              name="repeat"
              id="repeat"
              className="form-select"
              aria-label="Default select example"
              onChange={formSubscriber}
            >
              <option value="monthly">monthly</option>
              <option value="daily">daily</option>
              <option value="weekly">weekly</option>
            </select>{" "}
          </div>

          <div className="selects">
            <label htmlFor="goal">Goal</label>
            <select
              value={input.goal}
              name="goal"
              id="goal"
              className="form-select"
              aria-label="Default select example"
              onChange={formSubscriber}
            >
              <option value="1 time daily">1 time daily</option>
              <option value="1 time weekly">1 time weekly</option>
              <option value="1 time monthly">1 time monthly</option>
            </select>
          </div>
        </div>
        <div className="d-flex gap-2 m-1">
          <div className="selects">
            <label htmlFor="timeOfDay">Time Of Day</label>
            <select
              value={input.timeOdDay}
              name="timeOfDay"
              id="timeOfDay"
              className="form-select"
              aria-label="Default select example"
              onChange={formSubscriber}
            >
              <option value="morning">morning</option>
              <option value="evening">evening</option>
              <option value="night">night</option>
            </select>{" "}
          </div>

          <div className="selects">
            <label htmlFor="startDate">Start Date</label>
            <select
              value={input.startDate}
              name="startDate"
              id="startDate"
              className="form-select"
              aria-label="Default select example"
              onChange={formSubscriber}
            >
              <option value="today">today</option>
              <option value="yesterday">yesterday</option>
              <option value="tomorrow">tomorrow</option>
            </select>
          </div>
        </div>
        <hr />
        <button type="submit" className="btn btn-success m-2">
          SAVE
        </button>
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => setShowModal((showModal) => !showModal)}
        >
          DISCARD
        </button>
      </div>
    </form>
  );
};
