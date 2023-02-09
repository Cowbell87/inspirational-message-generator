//Random Opening
const returnOpening = () => {
    const openingArr = [
        "Don’t let today just be another day, because you have purpose.", 
        "Today is a new day!", 
        "Today you are ALIVE, motivated and ready to slay the day!", 
        "Don’t waste the next 24 hours.", 
        "There are 365 days this year, but today is gonna be one of the best!", 
        "Another sunrise, another day of purpose!", 
        "Here’s to the start of something great today!", 
        "Time to get rolling.", 
        "Life is some much more than what just happened yesterday.", 
        "Today is a beginning, and beginnings are pure opportunity."
    ];
    return openingArr[Math.floor(Math.random() * 10)];
};
//Random Body
const returnBody = () => {
    const bodyArr = [
        "You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction.",
        "If you believe it’ll work out, you’ll see opportunities. If you don’t believe it’ll work out, you’ll see obstacles.",
        "If opportunity doesn’t knock, build a door.",
        "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        "Great things are done by a series of small things brought together.",
        "It’s not the load that breaks you down, it’s the way you carry it.",
        "I challenge you to let every today be a Friday. Permit yourself to be happy every day.",
        "You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth.",
        "It’s no use going back to yesterday, because I was a different person then."
    ];
    return bodyArr[Math.floor(Math.random() * 10)];
};
//End Array
const returnEnd = () => {
    const endArr = [
        "So win today!",
        "Let that be your challenge until the sun goes down this evening.",
        "You can do this!",
        "Win, cause it’s your day to lose!",
        "Get pumped! It’s gonna be a good day!",
        "Go take the day by the horns!",
        "Stand tall and show you’ve got this!",
        "Make a difference in your life today!",
        "Make the change, make the difference today!",
        "So begin with an attitude that will bring your day life!"
    ];
    return endArr[Math.floor(Math.random() * 10)];
};

//Combines and prints message
const randomMessage = () => {
    return console.log(`${returnOpening()} ${returnBody()} ${returnEnd()}`)
}

randomMessage()