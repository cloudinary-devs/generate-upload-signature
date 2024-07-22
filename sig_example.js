const cloudinary = require('cloudinary').v2;
require('dotenv').config();

// Get the timestamp in seconds
const timestamp = Math.round((new Date).getTime()/1000);

// Show the timestamp
console.log('Timestamp:',timestamp);

const optionsForSignature = {
    timestamp,
    eager: 'w_400,h_300,c_pad|w_260,h_200,c_crop',
    public_id: 'sample_image',
  };

// Get the signature using the Node.js SDK method api_sign_request
const signature = cloudinary.utils.api_sign_request(
    optionsForSignature,
    process.env.API_SECRET
);
  
// Show the signature
console.log('Signature:', signature);

// ====================================================================================================

// Having got the timestamp and signature of the parameters to sign, we can now build the curl command.

// URL of the file to upload
const file = 'https://upload.wikimedia.org/wikipedia/commons/b/b1/VAN_CAT.png';

// Build the curl command
const curl_command = `curl -d "file=${file}&api_key=${process.env.API_KEY}&eager=w_400,h_300,c_pad|w_260,h_200,c_crop&public_id=sample_image&timestamp=${timestamp}&signature=${signature}" -X POST http://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/image/upload`;

// Show the curl command
console.log('curl command:', curl_command);
