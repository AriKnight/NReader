import { NReaderClient } from "../Client";
import * as EventModules from "./Modules";

export class NReaderEvent<F, S, T, L> {

    /**
     * NReader client
     */
    private client: NReaderClient;

    /**
     * First paramter passed in the event
     */
    private firstParam?: any;

    /**
     * Second paramter passed in the event
     */
    private secondParam?: any;

    /**
     * Third paramter passed in the event
     */
    private thirdParam?: any;

    /**
     * Fourth paramter passed in the event
     */
    private fourthParam?: any;

    /**
     * NReader's Gateway event class
     * @param client NReader client
     * @param args Parameters passed for gateway events
     */
    constructor(client: NReaderClient, firstParam?: F, secondParam?: S, thirdParam?: T, fourthParam?: L) {
        this.client = client;
        this.firstParam = firstParam;
        this.secondParam = secondParam;
        this.thirdParam = thirdParam;
        this.fourthParam = fourthParam;
    }

    /**
     * Fires a `debug` event
     * @returns {void}
     */
    public debugEvent(): void {
        return EventModules.debugEvent(this.client, this.firstParam, this.secondParam);
    }

    /**
     * Fires a `error` event
     * @returns {void}
     */
    public errorEvent(): void {
        return EventModules.errorEvent(this.client, this.firstParam, this.secondParam);
    }

    /**
     * Fires a `guildCreate` event
     * @returns {Promise<void>}
     */
    public guildCreateEvent(): Promise<void> {
        return EventModules.guildCreateEvent(this.client, this.firstParam);
    }

    /**
     * Fires a `interactionCreate` event
     * @returns {Promise<void>}
     */
    public interactionCreateEvent(): Promise<void> {
        return EventModules.interactionCreateEvent(this.client, this.firstParam);
    }

    /**
     * Fires a `ready` event
     * @returns {void}
     */
    public readyEvent(): void {
        return EventModules.readyEvent(this.client);
    }

    /**
     * Handle TypeScript unhandled rejection error
     * @returns {void}
     */
    public tsError(): void {
        return EventModules.tsError(this.firstParam);
    }
}
