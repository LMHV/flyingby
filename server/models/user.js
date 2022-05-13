//const mongoose = require('mongoose');
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
        },
    email: {
        type: String, 
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    age: {
        type: Number, 
    }
})

export default mongoose.model('User', UserSchema);