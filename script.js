const possibleEmotions = [ 'emo', 'sad', 'angry', 'happy' ];

const emo = [ 'This could be the one last chance to make you understand', 'I know it\'s nothing personal, it\'s just business as usual', 'What we got\'s unbreakable', 'We both knew it couldn\'t last forever', 'I\'m trying to forget that I\'m addicted to you' ];

const sad = [ 'Sick of all these words that will never matter', 'And it feels like I\'m at an all-time low', 'Don\'t look too hard for what you want', 'We\'re kept together by highways and telephone lines', 'You\'re colder than winter' ];

const angry = [ 'This is for the kids with the beaten in lips', 'What\'s the point of existence with this incurable sickness', 'I\'m nothing but sick and disgusting', 'Rejoice in your sickness', 'It\'s seeping into my blood and I can taste it' ];

const happy = [ 'I see your name in lights', 'I\'m sure as hell the happiest I\'ve ever been', 'Let\'s drink to feelings of temptation', 'I\'m gonna party like it\'s my civil right', 'Wake up, sunshine' ]

const randomizeLyrics = () => {
    const emotion = Math.floor(Math.random() * 4);
    const rand = Math.floor(Math.random() * 5);
    if (emotion === 0) {
        return 'You\'re so emo Simple Plan would be proud! Sing it loud: ' + emo[rand];
    } else if (emotion === 1) {
        return 'Drown your sorrows with New Found Glory: ' + sad[rand];
    } else if (emotion === 2) {
        return 'Let out that rage with Beartooth: ' + angry[rand];
    } else {
        return 'You\'re as cheery as All Time Low! Party on, friend: ' + happy[rand];
    };
};

const emotion1 = randomizeLyrics();







