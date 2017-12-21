// const webfontsGenerator = require('webfonts-generator');
// import WebUI from 'sketch-module-web-view'
// import webfontsGenerator from 'webfonts-generator'

export default function(context) {

  var sketch = context.api()

  var options = {"overwrite":"true", "formats" : "svg", "output":"/Users/pranusarna/desktop"}

  sketch.selectedDocument.selectedLayers.iterate(function(layer){
    layer.export(options);
  })

  if(svgicon2font()){
    log("man's not hot")
  }else{
    log("no ketchup")
  }

}

function svgicon2font(){

  var args = [
    "-l",
    "-c",
    " webfont /Users/pranusarna/desktop/*.svg -d /Users/pranusarna/desktop/font -t css -n zombats-regular -f zombats-regular "
  ]

  return runCommand("/bin/bash", args)
}


function runCommand(command, args) {
  var task = NSTask.alloc().init();
  task.launchPath = command;
  task.arguments = args;
  task.launch();
  task.waitUntilExit();
  return (task.terminationStatus() == 0)
}
