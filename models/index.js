import mongoose from 'mongoose'

let connectionString

if (process.env.NODE_ENV === 'production') {
	connectionString = process.env.DB_URL
} else {
	connectionString = process.env.MONGO_URI
}

mongoose.connection(connectionString, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: true,
	useCreateIndex: true
})

const db = mongoose.connection

db.once('open', () => {
	console.log('🧚🏽‍♂️ -------------------------------------------------')
	console.log(`🧚🏽‍♂️ ~ connected to MongDB on ${db.host}:${db.port}`)
	console.log('🧚🏽‍♂️ -------------------------------------------------')
})

db.on('error', (error) => {
	console.log('🧚🏽‍♂️ -----------------------------')
	console.log('🧚🏽‍♂️ ~ db.on ~ error', error)
	console.log('🧚🏽‍♂️ -----------------------------')
})

export default {
	// models
}
