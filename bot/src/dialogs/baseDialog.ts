import { ComponentDialog } from 'botbuilder-dialogs';

class BaseDialog extends ComponentDialog {

    constructor(dialogId: string) {
        super(dialogId);
    }
}

export default BaseDialog