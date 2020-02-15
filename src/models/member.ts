import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
    id: String,
    guildId: String,
    xp: Number,
    level: Number,
    muted: Boolean,
    muteTime: Number
});

export const Member = mongoose.model("Member", memberSchema);