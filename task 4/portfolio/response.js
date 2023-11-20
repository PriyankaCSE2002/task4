function getBotResponse(input) {
    //rock paper scissors
    if (input == "hi") {
        return "Hi";
    } else if (input == "good morning") {
        return "good morning";
    } else if (input == "hire you") {
        return "i am pleasure to join your company";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}