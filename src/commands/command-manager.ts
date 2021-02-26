import Command from "./command";

export default interface CommandManager {
    routeCommand(command: Command): void;
}
