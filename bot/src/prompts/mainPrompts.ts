import Ai from '../helpers/ai';
import { TextPrompt } from 'botbuilder-dialogs';

class MainPrompt extends TextPrompt {
    constructor(dialogId) {
        super(dialogId, async (prompt: any) => {
            console.log(prompt, 'prompt')
            console.log('entrei')
            if (!prompt.recognized.succeeded) {
                await prompt.context.sendActivity('Por favor, informe a opção.')
                return false

            } else {

                const options = prompt.options.prompt  /* Array of mongo documents */
                const value = prompt.recognized.value
                const regExMatch = Ai.regEx(value)

                // restart
                if (regExMatch === 'restart' || regExMatch === 'affirmative' || regExMatch === 'greeting') {
                    prompt.recognized.value = {
                        flow: 'RESTART'
                    }
                    return true
                }

                // no more questions
                if (regExMatch === 'negative') {
                    await prompt.context.sendActivities([{ type: 'message', text: 'texto' }])
                    return false
                }

                // appreciate
                if (regExMatch === 'appreciate') {
                    await prompt.context.sendActivities([{ type: 'message', text: 'texto' }])
                    return false
                }

                // goodbye
                if (regExMatch === 'goodbye') {
                    await prompt.context.sendActivity('')
                    return false
                }
            }
            return prompt.context.next()
        })
    }
}

export default MainPrompt;