const ObjectId = require('./validators/objectid');
const uuid = require('./validators/uuid');
const EmailAddress = require('./validators/email');
const PAN_IN = require('./validators/PAN_IN');
const AadhaarNumber = require('./validators/Aadhaar_IN');
const DrivingLC_IN = require('./validators/DRIVING_LC_IN');
const Passport = require('./validators/passport');
const SSN_US = require('./validators/SSN_US');
const phone_IN = require('./validators/phone_IN');

module.exports = {
	ObjectId,
	EmailAddress,
	uuid,
	PAN_IN,
	AadhaarNumber,
	DrivingLC_IN,
	Passport,
  	SSN_US,
	Phone_IN
};
