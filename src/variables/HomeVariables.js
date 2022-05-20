export const quote = [
    {
        author: "Edsger W. Dijkstra",
        text: "Computer Science is no more about computers than astronomy is about telescopes.",
    },
    {
        author: "Norman Augustine",
        text: "Software is like entropy: It is difficult to grasp, weighs nothing, and obeys the Second Law of Thermodynamics; i.e., it always increases.",
    },
    {
        author: "Socrates",
        text: "The more you know, the more you realize you know nothing.",
    },
    {
        author: "Lucrezio",
        text: "Non saranno la luce e il chiarore del sole a farci uscire dalle tenebre, ma la conoscenza delle cose.",
    },
    {
        author: "Lucrezio",
        text: "Anche se ignoro come il mondo ebbe origine, dagli stessi moti del cielo e da molte altre cose ancora io sono certo che il mondo non è stato creato per noi da una volontà divina: tanto esso è pieno di male.",
    },
]

export function getRandomQuote(){
    return quote[Math.floor(Math.random() * quote.length)];
}