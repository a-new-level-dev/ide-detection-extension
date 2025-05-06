import * as vscode from "vscode";

export function activate() {
   console.log('Congratulations, "ide-detection-extension" is now active!', {
      ideName: vscode.env.appName,
   });

   vscode.commands.executeCommand("setContext", "ideName", vscode.env.appName);
}
