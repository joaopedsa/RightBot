import { BasePrompt } from './basePrompt';

export class NamePrompt extends BasePrompt {
    constructor(dialogId: string) {
        super(dialogId, async prompt => {
            let id = prompt.context.activity.conversation.id;
            console.log(prompt.context.activity.conversation.id)
            await prompt.context.sendActivity({ type: 'message', text: "Obrigado :D" });
            return true
        })
    }
}