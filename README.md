Web app that can generate a list of next steps for Zoom meeting participants. During your Zoom meeting, press record and assign tasks verbally by saying "Hey Godzilla, assign [task] to [participant]. Thanks Godzilla". 

After the meeting is over, pass in the Google speech to text credentials as follows in the command line: 

export GOOGLE_APPLICATION_CREDENTIALS=/Users/admin/Downloads/erudite-justice-292723-2ee1b5b7203f.json 

Then start up a local webserver by running the server code in Node.JS. 

Then open up the client application and generate your list of next steps! 
