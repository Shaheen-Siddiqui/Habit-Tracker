import { v4 as uuid } from "uuid";

export const SuperHabits = [
  {
    id: uuid(),
    name: "set timer for talks",
    repeat: "monthly",
    goal: "3 time daily",
    timeOfDay: "any time",
    startDate: "today",
    isArchive: false
  },
  {
    id: uuid(),
    name: "Exercise",
    repeat: "daily",
    goal: "1 time daily",
    timeOfDay: "morning",
    startDate: "today",
    isArchive: false
  },
  {
    id: uuid(),
    name: "Reading",
    repeat: "daily",
    goal: "1 time daily",
    timeOfDay: "evening",
    startDate: "today",
    isArchive: false
  },
  {
    id: uuid(),
    name: "Gardening",
    repeat: "weekly",
    goal: "1 time weekly",
    timeOfDay: "morning",
    startDate: "yesterday",
    isArchive: false
  }
];
