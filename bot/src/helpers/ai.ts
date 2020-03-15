import Wit from 'node-wit'
import * as removeAccents from 'remove-accents'

class Nlu {
    client: Wit
    constructor() {
        this.client = new Wit({
            accessToken: 'BSCFB6HK2Q5EZ3XLTJR6HHD4PLQC5WVC',
        })
    }
    
    async getIntent(utterance) {
        let assuntos = []
        let intent = ''
        const result = await this.client.message(utterance)
        if (result && result.entities) {
            const entities = result.entities
            
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

    async getMatches(nluResponse, answers) {

        const exactMatch = answers.filter((elem) => {
            if (nluResponse.intent === elem.intent) {
                // Accept
            } else {
                return false
            }
            for (let i = 0; i < nluResponse.assuntos.length; i++) {
                if (elem.assuntos.includes(elem.assuntos[i])) {
                    // Accept
                } else {                    
                    return false
                }
            }
            for (let i = 0; i < elem.assuntos.length; i++) {
                if (nluResponse.assuntos.includes(elem.assuntos[i])) {
                    // Accept
                } else {                    
                    return false
                }
            }
            return true
        })
        if (exactMatch.length > 0) return exactMatch
        
        const atLeastOneAssunto = answers.filter((answerEl) => {
            for (let i = 0; i < nluResponse.assuntos.length; i++) {
                return answerEl.assuntos.some((assAttEl) => {
                    return removeAccents(assAttEl).trim().toLowerCase() == removeAccents(nluResponse.assuntos[i]).trim().toLowerCase()
                })
            }
        })

        if (atLeastOneAssunto.length > 0) return atLeastOneAssunto

        const intentMatch = answers.filter((elem) => {
            if (nluResponse.intent === elem.intent) return true
        })
        if (intentMatch.length > 0) return intentMatch
        return []
    }

    regEx(text) {
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

module.exports = { Nlu }