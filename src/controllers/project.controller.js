const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const config = require('../config/config');

const generateVoiceFromText = catchAsync(async (req, res) => {
  const data = req.body["data"]
  const response = await fetch('https://ttsfree.com/api/v1/tts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': config.ttsfree_apikey
    },
    body: JSON.stringify(
      {
        "text": data.reduce((result, item) => item.rate === -10 ? result : `${result}${item.text}`, ''),
        "voiceService": "servicebin",
        "voiceID": "en-US",
        "voiceSpeed": "0"
      }
    ),
  });
  const jsonRes = await response.json()

  if (jsonRes.status === "success")
    res.status(httpStatus.CREATED).send({ audioData: jsonRes.audioData });
  else
    res.status(httpStatus.EXPECTATION_FAILED).send({ message: "Failed" })
});


module.exports = {
  generateVoiceFromText,
};