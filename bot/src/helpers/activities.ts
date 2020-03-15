class Activities {

    delay = (text) => {
        return [
            { type: "typing" },
            { type: "delay", value: 1000 },
            { type: "message", timestamp: new Date(), text }
        ]
    }

    typing = () => {
        return [
            { type: "typing" },
            { type: "delay", value: 1000 }
        ]
    }
}

export default Activities