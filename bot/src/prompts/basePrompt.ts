import { PromptValidator, TextPrompt } from 'botbuilder-dialogs';

export class BasePrompt extends TextPrompt {

	constructor(dialogId: string, validator?: PromptValidator<string>) {
		super(dialogId, validator);
	}
}