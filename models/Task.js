import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true, default: "" },
    dateTime: { type: Date, required: true },
    priority: { type: String, enum: ["", "Low", "Medium", "High"], default: "" },
    status: { type: String, enum: ["In Progress", "Completed"], default: "In Progress" },
  },
  { timestamps: true }
);

export default mongoose.model("Task", taskSchema);
