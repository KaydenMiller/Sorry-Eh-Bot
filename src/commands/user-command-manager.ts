import CommandManager from "./command-manager";
import Command from "./command";
import UserManager from "../user-manager";

export default class UserCommandManager implements CommandManager {
    public routeCommand(command: Command): void {
        switch (command.commandArgs.shift().toLowerCase()) {
            case 'addPoints':
                UserManager.addPoints(10, command.firstMentionedUserId);
                break;
            case 'removePoints':
                UserManager.removePoints(10,  command.firstMentionedUserId);
                break;
            case 'getPoints':
                console.log(UserManager.getPoints());
                break;
            default:
                console.log("invalid user command used");
        }
    }
}
