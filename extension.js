import * as vscode from "vscode";

export async function activate() {
   console.log('Congratulations, "ide-detection-extension" is now active!', {
      ideName: vscode.env.appName,
   });

   await vscode.commands.executeCommand("setContext", "ideName", vscode.env.appName);
}
