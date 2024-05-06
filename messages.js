const generateMessage = () => {
    const begin = 'You are a ';
    const adjectives = ['silly goober', 'goofy guy', 'hot shot', 'biggity baller'];
    const middle = ' who ';
    const endings = ['loves cheese!', 'has lots of friends!', 'is famous!', 'has a big head!'];
    
    let rand1 = Math.floor(Math.random() * adjectives.length);
    let rand2 = Math.floor(Math.random() * adjectives.length);

    return begin + adjectives[rand1] + middle + endings[rand2];
}

console.log(generateMessage());