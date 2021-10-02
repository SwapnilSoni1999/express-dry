const ObjectId = require('./validators/objectid');
const uuid = require('./validators/uuid');
const EmailAddress = require('./validators/email');
const PAN_IN = require('./validators/PAN_IN');
const AadhaarNumber = require('./validators/Aadhaar_IN');
const DrivingLC_IN = require('./validators/DRIVING_LC_IN');
const SIN_CA= require('./validators/SIN_CA');
const GST_IN=require('./validators/GST_IN');
const VoterID_IN=require('./validators/VoterID_IN');
const Passport = require('./validators/passport');
const SSN_US = require('./validators/SSN_US');
const HexColor = require('./validators/HexColor')

module.exports = {
	ObjectId,
	EmailAddress,
	uuid,
	PAN_IN,
	AadhaarNumber,
	DrivingLC_IN,
  SIN_CA,
  Passport,
	GST_IN,
	VoterID_IN,
	Passport,
  SSN_US,
  	HexColor,
};
