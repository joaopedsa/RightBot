import {
    WaterfallDialog,
    WaterfallStepContext
} from 'botbuilder-dialogs'

import Activities from '../../helpers/activities';
import BaseDialog from '../baseDialog';

const NAME_WATERFALL_DIALOG = 'nameWaterfallDialog';


class NameDialog extends BaseDialog {

    activities: Activities

    constructor(dialogId) {
        super(dialogId);
        this.activities = new Activities()

        this.addDialog(new WaterfallDialog(NAME_WATERFALL_DIALOG, [
            this.introStep.bind(this),
            this.proximostep.bind(this)
        ]));
    }

    private async introStep(stepContext: WaterfallStepContext): Promise<any> {
        await stepContext.context.sendActivity('INTRO')
        return await stepContext.next()
    }

    private async proximostep(stepContext: WaterfallStepContext): Promise<any> {
        await stepContext.context.sendActivity('PROXIMO')
        return await stepContext.endDialog()
    }
}

export default NameDialog
