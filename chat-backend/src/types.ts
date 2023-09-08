import { Types } from "mongoose";

export type ID = string | Types.ObjectId;

export type GroupFilter = {
  year: { $year: "$updatedAt" };
  month: { $month: "$updatedAt" };
  day: { $dayOfMonth: "$updatedAt" };
  hour: { $hour: "$updatedAt" };
};
