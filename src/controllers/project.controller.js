const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');


const generateVoiceFromText = catchAsync(async (req, res) => {
  
  res.status(httpStatus.CREATED).send({ url: "https://aws.s3.com/cloned_voice.mp3" });
});


module.exports = {
  generateVoiceFromText,
};