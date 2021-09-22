import mongoose, { Schema } from 'mongoose'

const hunterSchema = new Schema({
	name: String,
	origin: String
})

const bountySchema = new Schema({
	name: { type: String, require: true },
	wantedFor: { type: String, minlength: 10, maxlength: 200 },
	client: String,
	reward: { type: Number, min: 1000, max: 1000000 },
	ship: String,
	hunters: [hunterSchema],
	captured: { type: Boolean, default: false },
	lastSeen: String
})

const Bounty = mongoose.model('Bounty', bountySchema)

export default Bounty
