import { NReaderCommand, NReaderInterface } from "nreader-framework/lib";

export const command: NReaderInterface.ICommand = {
    description: "Ping the bot",
    name: "ping",
    type: 1,
    run: async (payload) => {
        return new NReaderCommand(payload).pingCommand();
    }
};
