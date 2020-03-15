import { config } from 'dotenv';
import * as path from 'path';
import * as restify from 'restify';

import { BotFrameworkAdapter, MemoryStorage, ConversationState, UserState } from 'botbuilder';
import Bot from './bot';
import Ai from './helpers/ai';
import ApiWit from './services/api-wit';

const ENV_FILE = path.join(__dirname, '..', 'config/development.env');
config({ path: ENV_FILE });

class App {

    adapter: BotFrameworkAdapter
    server: restify.Server
    bot: Bot
    memoryStorage: MemoryStorage

    constructor() {

        this.adapter = new BotFrameworkAdapter({
            appId: process.env.MicrosoftAppID,
            appPassword: process.env.MicrosoftAppPassword
        });

        this.server = restify.createServer();
        this.memoryStorage = new MemoryStorage();
        this.bot = new Bot(new ConversationState(this.memoryStorage), new UserState(this.memoryStorage));

        // Connection to Artificial Inteligence
        new Ai()

        // Service to wit
        new ApiWit()

        this.turnOnServer()

        this.adapter.onTurnError = async (context, error) => {
            // This check writes out errors to console log .vs. app insights.
            console.error(`\n [onTurnError]: ${error}`);
            // Send a message to the user
            await context.sendActivity(`Oops. Algo de errado aconteceu!`);
            // Clear out state
            // await conversationState.delete(context);x
        };
    }


    private turnOnServer() {
        this.server.listen(process.env.port || process.env.PORT || 3978, () => {
            console.log(`\n${this.server.name} listening to ${this.server.url}`);
        });

        // Listen for incoming activities and route them to your bot main dialog.
        this.server.post('/api/messages', (req, res) => {
            // Route received a request to adapter for processing
            this.adapter.processActivity(req, res, async (turnContext) => {
                await this.bot.onTurn(turnContext)
            });
        });
    }

}

export default App;
