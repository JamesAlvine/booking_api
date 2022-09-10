import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    sharing: {
      type: Number,
      require: true,
    },
    desc: {
      type: String,
      require: true,
    },
    roomNumber: [{Number:Number,unavailableDates:[{type:[Date]}]}],
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);
