import { ConversationState, TurnContext, UserState } from 'botbuilder';
import { DialogContext, DialogSet } from 'botbuilder-dialogs';

import MainDialog from './dialogs/mainDialog/mainDialog'

const DIALOG_STATE_PROPERTY = 'DIALOG_STATE_PROPERTY';

const MAIN_DIALOG = 'MAIN_DIALOG'

const USER_PROFILE_PROPERTY = 'USER_PROFILE_PROPERTY'

class Bot {

    conversationState: ConversationState;
    userState: UserState;
    dialogState: any;
    dialogs: DialogSet;
    userProfile: any

    constructor(conversationState: ConversationState, userState: UserState) {
        this.conversationState = conversationState;

        this.userState = userState;

        this.dialogState = this.conversationState.createProperty(DIALOG_STATE_PROPERTY);

        // Create properties used to store values from the user.
        this.userProfile = this.userState.createProperty(USER_PROFILE_PROPERTY);

        // Create a dialog set to include the dialogs used by this bot.
        this.dialogs = new DialogSet(this.dialogState);

        // Create the main user onboarding dialog.
        this.dialogs.add(new MainDialog(MAIN_DIALOG, this.userProfile));
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
        await dc.beginDialog(MAIN_DIALOG, {turnContext});
    }
}

export default Bot
