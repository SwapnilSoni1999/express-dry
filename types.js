const ObjectId = require('./validators/objectid');
const uuid = require('./validators/uuid');
const EmailAddress = require('./validators/email');
const PAN_IN = require('./validators/');
const AadhaarNumber = require('./validators/Aadhaar_IN.js');

module.exports = {
	ObjectId,
	EmailAddress,
	uuid,
	PAN_IN,
	AadhaarNumber,
};
