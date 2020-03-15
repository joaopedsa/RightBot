import { Wit } from 'node-wit'
import ApiWit from '../services/api-wit'

class Ai {
    static client: Wit
    constructor() {
        Ai.client = new Wit({
            accessToken: process.env.AccessTokenWit,
        })
    }

    static async getIntent(utterance) {
        let assuntos = []
        let intent = ''
        const result = await Ai.client.message(utterance, {})
        if (result && result.entities) {
            const entities = result.entities
            // const response = await ApiWit.api.put('/entities/intent', {value: "quero", expressions: ['quero']})
            // console.log(response)
            console.log(entities)

            if (entities.assunto && entities.assunto.length > 0) {
                entities.assunto.forEach(elem => {
                    return assuntos.push(elem.value)
                })
            }
            if (entities.intent && entities.intent.length > 0) {
                intent = entities.intent[0].value
            }
        }
        return { assuntos, intent }
    }

    static async getMatches(nluResponse, answers) {
    }

    static regEx(text) {
        const affirmative = /^sim.?$|^aim.?$|^yes.?$|^conseguiu.?$|^respondeu.?$|^foi.?$|^satisfaz.?$|^gostaria.?$|^quero.?$|^tenho.?$|^desejo.?$/i
        const appreciate = /^obrigad.?.?$|^muito obrigad.?.?$|^valeu.?$/i
        const goodbye = /^tchau|^vlw.?$|^flw.?$|^fls.?$|^falost.?$|^bye|^at.? mais.?$|^at.? logo.?$|^at.?.?$/i
        const greeting = /^oi.?$|^olá.?$|^ola.?$|^opa.?$|^e ai.?$|^e aí.?$|tudo bem.?$/i
        const negative = /^n.?o.?$|^n.?o respondeu|^n.?o conseguiu|^conseguiu mais ou menos.?$|^n.?o foi|^foi mais ou menos.?$|^mais ou menos.?$|^respondeu mais ou menos.?$|^n.?o exatamente.?$|^n.?o quero.?$|^n.?o tenho.?$|^tenho n.?o.?$|^quero n.?o.?$|^n.?o desejo.?$/i
        const restart = /^in.?cio.?$|^reiniciar.?$|^come.?o.?|^volta.? pro come.?o.?|^volta.? pro in.?cio|menu inicial|^recome.?ar.?$/i
        if (affirmative.test(text)) return 'affirmative'
        if (appreciate.test(text)) return 'appreciate'
        if (goodbye.test(text)) return 'goodbye'
        if (greeting.test(text)) return 'greeting'
        if (negative.test(text)) return 'negative'
        if (restart.test(text)) return 'restart'
        return ''
    }
}

export default Ai