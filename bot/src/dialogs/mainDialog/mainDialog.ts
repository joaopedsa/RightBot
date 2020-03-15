import {
    WaterfallDialog,
    WaterfallStepContext
} from 'botbuilder-dialogs'

import Activities from '../../helpers/activities';
import BaseDialog from '../baseDialog';
import AiDialog from '../aiDialog/aiDialog';
import MainPrompt from '../../prompts/mainPrompts';
import { BotStatePropertyAccessor } from 'botbuilder';

const MAIN_WATERFALL_DIALOG = 'mainWaterfallDialog';
const AI_DIALOG = 'AI_DIALOG'
const MAIN_PROMPT = 'MAIN_PROMPT';

class MainDialog extends BaseDialog {

    activities: Activities
    userProfile: BotStatePropertyAccessor

    constructor(dialogId, userProfile) {
        super(dialogId);
        this.userProfile = userProfile
        this.activities = new Activities()

        this.addDialog(new WaterfallDialog(MAIN_WATERFALL_DIALOG, [
            this.introStep.bind(this),
            this.menuStep.bind(this)
        ]));
        
        this.addDialog(new AiDialog(AI_DIALOG, this.userProfile))

        // Prompts
        this.addDialog(new MainPrompt(MAIN_PROMPT))
    }

    private async introStep(stepContext: WaterfallStepContext): Promise<any> {
        await stepContext.context.sendActivities(this.activities.typing())
        await stepContext.context.sendActivities(this.activities.delay('Olá'))
        return await stepContext.beginDialog(AI_DIALOG)
    }

    private async menuStep(stepContext: WaterfallStepContext): Promise<any> {
        await stepContext.context.sendActivities(this.activities.typing())
        return await stepContext.context.sendActivities(this.activities.delay('Olá'))
    }
}

export default MainDialog
