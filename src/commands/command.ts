import {Message} from "discord.js";
import ServerConstants from "../server-constants";

export default class Command {
    public commandArgs: string[];

    constructor(private userMessage: Message) {
        this.commandArgs = this.userMessage.content.slice(ServerConstants.PREFIX.length).trim().split(' ');
    }

    public get firstMentionedUserId(): string {
        return this.userMessage.mentions.users.first().id;
    }
}
