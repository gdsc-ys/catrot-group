import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    groups_in: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Group'
        }
    ],
});

const User = mongoose.model('User', userSchema)

export default User;