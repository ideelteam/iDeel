# iDeel

## Description
- File will be uploaded soon

## Contributors
- Riley : riley.du@gmail.com 
- Benson : li_benson12@hotmail.com
- Roger : lhyroger@gmail.com

## Reference
* Github Markdown Syntax: [Link](https://drive.google.com/drive/folders/0BxoXWWKb_tfoYXZ4cUVBVkJJNTQ)

## Initial Setup
- Download Install Node js
- Download MongoDB
- Clone repo
- run `npm install --save`
- Go to the folder that mongo was installed and run "mongod.exe"
- run `npm start`

## Additional Info
If you created a new folder, make sure you add a path for it in the `tsconfig.json` file so that it will transpile the .ts to .js files.

Open `localhost:3000` in your browser

## Load Data Into DB Scipt
- **Assume that we alreay have ideel db creater and local user created**
- Start up `mongod.exe`
- Open Mongo Shell
- run `load("/Users/youruserprofile/iDeel/createDB/createiDeelData.js")

### Routes:
**GET**     /dashboard/:jobid <br>
**GET**     /dashboard/jobs  <br>
**POST**    /dashboard/:jobid <br>
**POST**    /dashboard/:jobid/apply <br>
**DELETE**  /dashboard/:jobid <br>

**GET**     /user/:id/info <br>
**POST**    /user/:id <br>
**GET**     /user/:id <br>
**DELETE**  /user/:id <br>