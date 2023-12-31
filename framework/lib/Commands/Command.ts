import { CommandInteraction, TextChannel } from "oceanic.js";
import { NReaderClient } from "../Client";
import { ICommandRunPayload } from "../Interfaces";
import * as CommandModules from "./Modules";

export class NReaderCommand {
    /**
     * NReader client
     */
    private client: NReaderClient;

    /**
     * Oceanic command interaction
     */
    private interaction: CommandInteraction<TextChannel>;

    constructor(payload: ICommandRunPayload) {
        this.client = payload.client;
        this.interaction = payload.interaction;
    }

    /**
     * Executes a `bookmark` command
     * @returns {Promise<void>}
     */
    public bookmarkCommand() {
        return CommandModules.bookmarkCommand(this.client, this.interaction);
    }

    /**
     * Executes a `config` command
     * @returns {Promise<void>}
     */
    public configCommand() {
        return CommandModules.configCommand(this.client, this.interaction);
    }

    /**
     * Executes a `donate` command
     * @returns {Proise<void>}
     */
    public donateCommand() {
        return CommandModules.donateCommand(this.client, this.interaction);
    }

    /**
     * Executes a `eval` command
     * @returns {Promise<void>}
     */
    public evalCommand() {
        return CommandModules.evalCommand(this.client, this.interaction);
    }

    /**
     * Executes a `help` command
     * @returns {Promise<void>}
     */
    public helpCommand() {
        return CommandModules.helpCommand(this.client, this.interaction);
    }

    /**
     * Executes a `ping` command
     * @returns  {Promise<void>}
     */
    public pingCommand() {
        return CommandModules.pingCommand(this.client, this.interaction);
    }

    /**
     * Executes a `premium` command
     * @returns {Promise<void>}
     */
    public premiumCommand() {
        return CommandModules.premiumCommand(this.client, this.interaction);
    }

    /**
     * Executes a `profile` command
     * @returns {Promise<void>}
     */
    public profileCommand() {
        return CommandModules.profileCommand(this.client, this.interaction);
    }

    /**
     * Executes a `profile-edit` command
     * @returns {Promise<void>}
     */
    public profileEditCommand() {
        return CommandModules.profileEditCommand(this.client, this.interaction);
    }

    /**
     * Executes a `read` command
     * @returns {Promise<void>}
     */
    public readCommand() {
        return CommandModules.readCommand(this.client, this.interaction);
    }

    /**
     * Executes a `search` command
     * @returns {Promise<void>}
     */
    public searchCommand() {
        return CommandModules.searchCommand(this.client, this.interaction);
    }

    /**
     * Executes a `search-similar` command
     * @returns {Promise<void>}
     */
    public searchSimilarCommand() {
        return CommandModules.searchSimilarCommand(
            this.client,
            this.interaction
        );
    }

    /**
     * Executes a `stats` command
     * @returns {Promise<void>}
     */
    public statsCommand() {
        return CommandModules.statsCommand(this.client, this.interaction);
    }
}
