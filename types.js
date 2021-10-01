const ObjectId = require('./validators/objectid');
const uuid = require('./validators/uuid');
const EmailAddress = require('./validators/email');
const PAN_IN = require('./validators/');
const AadhaarNumber = require('./validators/Aadhaar_IN.js');
const DrivingLC_IN = require('./validators/DRIVING_LC_IN');
const SSN = require('./validators/ssn_us.js');

module.exports = {
	ObjectId,
	EmailAddress,
	uuid,
	PAN_IN,
	AadhaarNumber,
	DrivingLC_IN,
  SSN,
};
