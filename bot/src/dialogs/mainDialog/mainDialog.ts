import {
    WaterfallDialog,
    WaterfallStepContext
} from 'botbuilder-dialogs'

import Activities from '../../helpers/activities';
import BaseDialog from '../baseDialog';
import NameDialog from '../nameDialog/nameDialog';

const MAIN_WATERFALL_DIALOG = 'mainWaterfallDialog';
const NAME_DIALOG = 'NAME_DIALOG'

class MainDialog extends BaseDialog {

    activities: Activities

    constructor(dialogId) {
        super(dialogId);
        this.activities = new Activities()

        this.addDialog(new WaterfallDialog(MAIN_WATERFALL_DIALOG, [
            this.introStep.bind(this),
            this.proximostep.bind(this)
        ]));

        this.addDialog(new NameDialog(NAME_DIALOG))
    }

    private async introStep(stepContext: WaterfallStepContext): Promise<any> {
        await stepContext.context.sendActivity('INTRO')
        return await stepContext.next()
    }

    private async proximostep(stepContext: WaterfallStepContext): Promise<any> {
        await stepContext.context.sendActivity('PROXIMO')
        return await stepContext.beginDialog(NAME_DIALOG)
    }
}

export default MainDialog
