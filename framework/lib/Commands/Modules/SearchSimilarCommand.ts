import { NReaderClient } from "../../Client";
import { CommandInteraction, Constants, TextableChannel } from "eris";
import { Utils } from "givies-framework";
// import { createSearchPaginator } from "../../Modules/SearchPaginator";
// import { GuildModel } from "../../Models";
// import { setTimeout } from "node:timers/promises";

export async function searchSimilarCommand(client: NReaderClient, interaction: CommandInteraction<TextableChannel>) {
    const args: { id?: number } = {};
    // const guildData = await GuildModel.findOne({ id: interaction.guildID });
    // const book = (await client.api.getBook(args.id));
    // const tags = book.tags.filter((tag) => tag.url.startsWith("/tags")).map((tag) => tag.name);

    for (const option of interaction.data.options) {
        args[option.name] = (option as any).value as string;
    }

    return interaction.createMessage({
        embeds: [
            new Utils.RichEmbed()
                .setColor(client.config.BOT.COLOUR)
                .setDescription("We're sorry but this command is unavailable at the moment!")
        ],
        flags: Constants.MessageFlags.EPHEMERAL
    });

    /* API is still broken (#_<-) */

    // if (Utils.Util.findCommonElement(tags, client.config.API.RESTRICTED_TAGS) && !guildData.settings.whitelisted) {
    //     const embed = new Utils.RichEmbed()
    //         .setColor(client.config.BOT.COLOUR)
    //         .setDescription(client.translate("main.tags.restricted", { channel: "[#info](https://discord.com/channels/763678230976659466/1005030227174490214)", server: "https://discord.gg/b7AW2Zkcsw" }));

    //     return interaction.createMessage({
    //         embeds: [embed],
    //         flags: Constants.MessageFlags.EPHEMERAL
    //     });
    // }

    // await interaction.defer();
    // await setTimeout(2000);

    // client.api.searchAlike(args.id).then(async (search) => {
    //     if (search.books.length === 0) {
    //         const embed = new Utils.RichEmbed()
    //             .setColor(client.config.BOT.COLOUR)
    //             .setDescription(client.translate("main.search.empty"));

    //         return interaction.createMessage({
    //             embeds: [embed],
    //         });
    //     }

    //     const title = search.books.map((book, index) => `\`⬛ ${(index + 1).toString().length > 1 ? `${index + 1}`  : `${index + 1} `}\` - [\`${book.id}\`](https://nhentai.net/g/${book.id}) - \`${book.title.pretty}\``);

    //     const embed = new Utils.RichEmbed()
    //         .setColor(client.config.BOT.COLOUR)
    //         .setDescription(title.join("\n"))
    //         .setTitle(client.translate("main.page", { firstIndex: search.page, lastIndex: search.pages }));

    //     const component: ActionRow = {
    //         components: [
    //             {
    //                 custom_id: `see_more_${interaction.id}`,
    //                 label: client.translate("main.detail"),
    //                 style: 1,
    //                 type: 2
    //             },
    //             {
    //                 custom_id: `stop_result_${interaction.id}`,
    //                 label: client.translate("main.stop"),
    //                 style: 4,
    //                 type: 2
    //             }
    //         ],
    //         type: 1
    //     };

    //     createSearchPaginator(client, search, interaction);
    //     interaction.createMessage({
    //         components: [component],
    //         embeds: [embed]
    //     });
    // }).catch((err: Error) => {
    //     if (err.message === "Request failed with status code 404") {
    //         const embed = new Utils.RichEmbed()
    //             .setColor(client.config.BOT.COLOUR)
    //             .setDescription(client.translate("main.read.none", { id: args.id }));

    //         return interaction.createMessage({
    //             embeds: [embed],
    //         });
    //     } else {
    //         const embed = new Utils.RichEmbed()
    //             .setColor(client.config.BOT.COLOUR)
    //             .setDescription(client.translate("main.error"));

    //         interaction.createMessage({
    //             embeds: [embed],
    //         });
    //     }

    //     return client.logger.error({ message: err.message, subTitle: "NHentaiAPI::SearchALike", title: "API" });
    // });
}
