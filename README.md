# iDeel

## Description
- File will be uploaded soon

## Contributors
- Riley : riley.du@gmail.com 
- Benson : 
- Roger :

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


### Routes:
**GET**     /dashboard/:jobid <br>
**GET**     /dashboard/jobs  <br>
**POST**    /dashboard/:jobid <br>
**POST**    /dashboard/:jobid/apply <br>
**DELETE**  /dashboard/:jobid <br>

**GET**     /user/info <br>
**POST**    /user/:id <br>
**GET**     /user/:id <br>
**DELETE**  /user/:id <br>