import mongoose from "mongoose";

const bugSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: {
      type: String,
      enum: ["open", "in-progress", "resolved"],
      default: "open",
    },
    project: { type: String, default: "SDG 1 - No Poverty" },
  },
  { timestamps: true }
);

export default mongoose.model("Bug", bugSchema);
