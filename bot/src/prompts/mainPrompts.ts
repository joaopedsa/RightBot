import { TextPrompt } from 'botbuilder-dialogs';

class MainPrompts extends TextPrompt {
    constructor(dialogId) {
        super(dialogId, async (prompt) => {
            await prompt.context.sendActivity('Por favor, informe a opção.')
            return false
        })
    }
}

export default MainPrompts