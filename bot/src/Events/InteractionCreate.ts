import { CommandInteraction, TextableChannel } from "eris";
import { ReaderEvent, ReaderInterface } from "reader-framework";

export const event: ReaderInterface.IEvent = {
    name: "interactionCreate",
    run: (client, interaction: CommandInteraction<TextableChannel>) => {
    return new ReaderEvent(client, interaction).interactionCreateEvent();
    }
}