const mongoose = require("mongoose");
const { Schema } = mongoose;

const sessionSchema = new Schema(
  {
    userId: { type: String, required: true },
    status: { type: String, required: true, enum: ["active", "disabled"] }
  },
  {
    timestamps: true
  }
);

sessionSchema.virtual("user", {
  ref: "User",
  localField: "userId",
  foreignField: "_id",
  justOne: true
});

sessionSchema.statics.createSession = createSession;
sessionSchema.statics.getSessionByIdWithUser = getSessionByIdWithUser;
sessionSchema.statics.disableSession = disableSession;

async function createSession(userId) {
  return this.create({ userId, status: "active" });
}

async function getSessionByIdWithUser(sessionId) {
  return this.findById(sessionId).populate("user");
}

async function disableSession(sessionId) {
  return this.updateOne(
    { _id: sessionId },
    {
      status: "disabled"
    }
  );
}


exports.sessionModel = mongoose.model("Session", sessionSchema);