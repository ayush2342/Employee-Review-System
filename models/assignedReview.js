const mongoose = require('mongoose');

const assignedReviewSchema = new mongoose.Schema({
  message: {
    type: String,
    required:true
  },
  fromUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    },
    
    toUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        }
},

 {
  timestamps: true
}
)



const AssignedReview = mongoose.model('AssignedReview', assignedReviewSchema);

module.exports = AssignedReview;