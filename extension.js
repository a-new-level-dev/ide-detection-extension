const vscode = require("vscode");

function activate() {
   console.log('Congratulations, "ide-detection-extension" is now active!', {
      ideName: vscode.env.appName,
   });

   vscode.commands.executeCommand("setContext", "ideName", vscode.env.appName);
}

module.exports = {
   activate,
};
