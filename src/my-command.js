// const webfontsGenerator = require('webfonts-generator');
// import WebUI from 'sketch-module-web-view'
// import webfontsGenerator from 'webfonts-generator'

export default function(context) {

  var sketch = context.api()

  var options = {"overwrite":"true", "formats" : "svg", "output":"~/Desktop"}

  sketch.selectedDocument.selectedLayers.iterate(function(layer){
    layer.export(options)
  })

  // if(svgicon2svgfont()) {
  //       log('✅ compression ok')
  //       log(svgicon2svgfont())
  //     } else {
  //       log('❌ compression error')
  //       log (svgicon2svgfont())
  //     }

  log(svgicon2svgfont())

}

function svgicon2svgfont(){

  var args = [

    "svgicons2svgfont --fontname=hello -o ~/Desktop ~/Desktop/*.svg"
  ]

  // var args = [
  //   "svgicons2svgfont --fontname = hello",
  //   "-o ~/Desktop",
  //   "~/Desktop/*.svg"
  // ]

  return runCommand("/Users/pranusarna/.nvm/versions/node/v8.4.0/bin/svgicons2svgfont", ["svgicons2svgfont --fontname=hello -o ~/Desktop ~/Desktop/*.svg"])
}

function runCommand(command, args) {
  var task = NSTask.alloc().init();
  task.launchPath = command;
  task.arguments = args;
  task.launch();
  task.waitUntilExit();
  return (task.terminationStatus() == 0)
}
