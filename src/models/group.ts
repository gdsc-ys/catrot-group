import mongoose from 'mongoose'

const groupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    lead: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    members: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
});

const Group = mongoose.model('Group', groupSchema)

export default Group;