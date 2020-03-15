import { ActivityTypes, ConversationState, TurnContext, UserState, MessageFactory } from 'botbuilder';
import { DialogContext, DialogSet } from 'botbuilder-dialogs';

import MainDialog from './dialogs/mainDialog/mainDialog'

const DIALOG_STATE_PROPERTY = 'dialogState';

const MAIN_DIALOG = 'MAIN_DIALOG'

class Bot {
    conversationState: ConversationState;
    userState: UserState;
    dialogState: any;
    dialogs: DialogSet;

    constructor(conversationState: ConversationState, userState: UserState) {
        this.conversationState = conversationState;

        this.userState = userState;

        this.dialogState = this.conversationState.createProperty(DIALOG_STATE_PROPERTY);

        // Create a dialog set to include the dialogs used by this bot.
        this.dialogs = new DialogSet(this.dialogState);

        // Create the main user onboarding dialog.
        this.dialogs.add(new MainDialog(MAIN_DIALOG));
    }

    async onTurn(turnContext: TurnContext) {
        const id = await turnContext.activity.conversation.id.split('|')[0];

        const dc = await this.dialogs.createContext(turnContext);

        await this.begin(id, dc, turnContext);

        // Save changes to the user state.
        await this.userState.saveChanges(turnContext);

        // End this turn by saving changes to the conversation state.
        await this.conversationState.saveChanges(turnContext);
    }

    async begin(id: string, dc: DialogContext, turnContext: TurnContext) {
        await dc.beginDialog(MAIN_DIALOG);
    }
}

export default Bot
