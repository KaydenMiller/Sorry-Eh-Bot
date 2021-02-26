import Command from "./command";
import CommandManager from "./command-manager";
import GameCommandManager from "./game-command-manager";
import UserCommandManager from "./user-command-manager";

export default class PrimaryCommandManager implements CommandManager {
    public routeCommand(command: Command): void {
        switch (command.commandArgs.shift().toLowerCase()) {
            case 'user':
                new UserCommandManager().routeCommand(command);
                break;
            case 'game':
                new GameCommandManager().routeCommand(command);
                break;
            default:
                console.log("invalid primary command used");
        }
    }
}
