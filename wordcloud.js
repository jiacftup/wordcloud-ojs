var words = [
    ['Artificial Intelligence', 50],
    ['Machine Learning', 45],
    ['Cyber Security', 40],
    ['Big Data', 35],
    ['Software Engineering', 30],
    ['Cloud Computing', 25],
    ['Data Science', 20]
];

WordCloud(document.getElementById('wordCloud'), {
    list: words,
    gridSize: 10,
    weightFactor: 3,
    fontFamily: 'Arial',
    color: 'random-dark',
    backgroundColor: '#ffffff'
});
