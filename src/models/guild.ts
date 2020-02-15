import mongoose from "mongoose";

const guildSchema = new mongoose.Schema({
    id: String,
    prefix: String,
    logs: {
        enabled: Array,
        channel: String
    },
    features: {
        enabled: Array,
        disabled: Array,
        all: Boolean
    }
});

export const Guild = mongoose.model("Guild", guildSchema);