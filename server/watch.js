const fs = require("fs");
const os = require('os');
const cors = require('cors');
const express = require('express');
const speech = require('@google-cloud/speech');
const linear16 = require('linear16');



var global_dic;
var path = `/Users/${os.userInfo().username}/Documents/Zoom/`
var files = fs.readdirSync(path);
meeting = files[files.length-1];
final_path = path + meeting + '/audio_only.m4a';
final_path2 = path + meeting + '/audio_only.mp3';

(async () => {
 try {
const outPath = await linear16(final_path, final_path2);
console.log(outPath); // Returns the output path, ex: ./output.wav
} catch(e) {
  console.log('error:' + e);
}
})();

async function main() {

  // Creates a client
  const client = new speech.SpeechClient();

  // The name of the audio file to transcribe
  const fileName = final_path2;

  // Reads a local audio file and converts it to base64
  const file = fs.readFileSync(fileName);
  const audioBytes = file.toString('base64');

  // The audio file's encoding, sample rate in hertz, and BCP-47 language code
  const audio = {
    content: audioBytes,
  };
  const config = {
    encoding: 'LINEAR16',
    sampleRateHertz: 16000,
    languageCode: 'en-US',
  };
  const request = {
    audio: audio,
    config: config,
  };

  // Detects speech in the audio file
  const [response] = await client.recognize(request);
  const transcription = response.results
    .map(result => result.alternatives[0].transcript)
    .join('\n');
  //console.log(`Transcription: ${transcription}`);

  var trigger = "Godzilla";
  var stop = "thanks Godzilla"
  var arr = transcription.split(trigger);

  var clean_arr = [];

  var task_dic = {}

  for (let x of arr){
    var split_task = x.split(' ');
    if (split_task[1] == "assign" || split_task[1] == "reassign"){
      var assignee = split_task[split_task.length-3];
      var action = split_task[1];
      var task = split_task.slice(2, split_task.length-4).join(' ');
      task_dic[task] = assignee;
    }
  }

  console.log(task_dic);

  return task_dic;
}
main().catch(console.error);

async function name() {
  try {
    global_dic = await main();

    var jason = JSON.stringify(global_dic);
    //express
    var app = express();
    app.use(cors());
    
    app.get('/', function (req, res) {
        res.send(jason);
        //res.json(jason);
    });

    var server = app.listen(5000, function () {
        console.log('Node server is running..');
    });
  } catch(e) {
      console.log(e);
  }
}
name().catch(console.error);
