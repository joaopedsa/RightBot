import BaseDialog from "../baseDialog";
import Activities from "../../helpers/activities";
import { WaterfallDialog, WaterfallStepContext } from "botbuilder-dialogs";

const AI_WATERFALL_DIALOG = 'AI_WATERFALL_DIALOG'

class AiDialog extends BaseDialog{

    activities: Activities
    userProfile: any

    constructor(dialogId, userProfile) {
        super(dialogId)
        this.activities = new Activities()
        this.userProfile = userProfile

        this.addDialog(new WaterfallDialog(AI_WATERFALL_DIALOG, [
            this.promptsMenu.bind(this)
        ]));
    }

    async getMenus(stepContext: WaterfallStepContext): Promise<void> {
        stepContext.context.sendActivities(this.activities.typing())
        stepContext.context.sendActivities([{type: 'message', text: 'text'}])
    }

    async promptsMenu(stepContext: WaterfallStepContext) {
        await stepContext.context.sendActivities([{type: 'message', text: 'TOMA NO CU'}])
        return await stepContext.endDialog()
    }

}

export default AiDialog