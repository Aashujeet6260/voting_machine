const moongose = require('mongoose');


const candidateSchema = new moongose.Schema({
    name: {
        type: String,
        required: true
    },
    party: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    votes: [
        {
            user: {
                type: moongose.Schema.Types.ObjectId,
                ref: 'User',
                required: true,
            },
            votedAt: {
                type: Date,
                default: Date.now
            }
        }
    ],

    voteCount: {
        type: Number,
        default: 0
    },

});


const Candidate = moongose.model('Candidate', candidateSchema);
module.exports = Candidate;