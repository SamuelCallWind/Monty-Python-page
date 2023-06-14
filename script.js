function playAudio(id) {
    var sound = document.getElementById(id);
    sound.play();
}

var quotes = [
    "Your lineage is so muddled, even a town crier couldn't announce it!",
    "You're about as useful as a chocolate battering ram!",
    "You have the courage of a slightly perturbed chicken!",
    "You're as sharp as a marble!",
    "Your swordplay is so poor, you couldn't out-duel a blind pigeon!",
    "You couldn't tell a dragon from a duckling, you half-witted herald!",
    "Thou art an artless, beetle-headed flax-wench!",
    "Your jousting skills are so pathetic, even a donkey would refuse to be your steed!",
    "You're the village idiot's less impressive cousin!",
    "Your charm is only surpassed by a dung heap!",
    "Thy face is so foul; the plague turns from thee in disgust!",
    "Your attempts at wit are as dry as the desert!",
    "Thou art so vacant, the village crier announced your brain for sale!",
    "Your mother was a hamster and your father smelt of elderberries!",
    "You silly English knnnnniggets!",
    "I fart in your general direction!",
    "Your mother was a llama and your father smelt of cabbages!",
    "You're as intimidating as a slug with a salt shaker!",
    "You have all the appeal of a paper cut!",
    "I laugh at your pitiful attempts at existence!",
    "You couldn't scare a leaf off a tree, you sad specimen!",
    "Your presence is as welcome as a skunk at a lawn party!",
    "You couldn't fight your way out of a damp paper bag!",
    "Thou art a boil-brained, flap-mouthed codpiece!",
    "Your idea of strategy is like a minstrel without a tune!",
    "Thou art a pribbling, onion-eyed maggot-pie!",
    "Your chivalry is as noticeable as a knight without armor!",
    "Thou art as useful as a second drawbridge on a castle!",
    "Thy wits are as dull as a blunted sword!",
    "Your singing would scare off a siren!",
    "Thou art a roguish, bat-fowling moldwarp!",
    "You have the charisma of a plague rat!",
    "Thou art as intimidating as a kitten in a suit of armor!",
    "Your wisdom is as profound as a court jester's!",
    "Thou art a folly-fallen, sheep-biting skainsmate!",
    "Your company is as delightful as a nest of hornets!",
    "Thou art as cunning as a fox with its head stuck in a pot!",
    "Your cooking would make a troll lose its appetite!",
    "Thou art a gorbellied, elf-skinned malt-worm!",
    "You're as brave as a snail facing a salt shaker!",
    "Thou art an ill-breeding, pottle-deep canker-blossom!",
    "Your horse riding skill is comparable to a chicken on a tightrope!",
    "Thou art a swag-bellied, toad-spotted giglet!",
    "You have the charm of a gargoyle with halitosis!",
    "Thou art a pox-marked, flap-mouthed fustilarian!",
    "Your conversation is as sparkling as a dungeon wall!",
    "Thou art a gleeking, boil-brained nut-hook!",
    "You're about as fearsome as a rabbit with a bell!"
];


document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('randomButton').addEventListener('click', function() {
    
        var randomQuoteText = document.getElementById('boxRandomQuote');
        
        var random = Math.floor(Math.random() * quotes.length);
        
        randomQuoteText.innerHTML = quotes[random];
    });
})

