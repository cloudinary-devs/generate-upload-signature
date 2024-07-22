# generate-upload-signature
Node.js example of generating an upload signature

## Install packages

```
npm i
```

## Set .env file

Create a .env file with the following contents (replacing the 'YOUR' placeholders):

```
CLOUD_NAME='YOUR_CLOUD_NAME'
API_SECRET='YOUR_API_SECRET'
API_KEY='YOUR_API_KEY'
```

## Run

```
node sig_example.js
```

Copy and paste the curl command to upload the image to your product environment using the Cloudinary Upload API.
