import "./styles.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { ArchiveHabits } from "./pages/ArchiveHabit";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div className="App">
      <Toaster
        position="top-center"
        
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 1000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <h1 className="header-text">Habit Tracker</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<ArchiveHabits />} />
      </Routes>
    </div>
  );
}
