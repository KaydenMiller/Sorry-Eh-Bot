import CommandManager from "./command-manager";
import Command from "./command";

export default class GameCommandManager implements CommandManager {
    public routeCommand(command: Command): void {
        switch (command.commandArgs.shift().toLowerCase()) {
            case 'poker':
                console.log("play poker");
                break;
            case 'bet':
                console.log("bet a player");
                break;
            default:
                console.log("invalid game command used");
        }
    }
}
