const h1 = React.createElement('h1', { style :{
    color: 'Orange',
    fontSize: '80px',
    fontWeight: 'Bold'
},
}, 'Topics Covered');

const firstPara = React.createElement("firstPara", { style :{
    fontSize: '25px',
    fontWeight: 'Medium'
}}, 'The following is a list of all the topics we cover in MDN learning area');

const firstDiv = React.createElement("div", {}, [h1, firstPara]);

const h2 = React.createElement('h2', { style: {
    color: 'Blue',
    opacity: '0.5',
    fontSize: '35px',
    textDecoration: 'underline'
},
}, "Getting Start with the Web" );

const secondPara = React.createElement("secondPara", { style: {
    fontSize: '25px'
}}, "Provides a practical introduction to web development for complete beginners.");

const secondDiv = React.createElement("div", {}, [h2, secondPara]);

const h3 = React.createElement('h3', { style: {
    color: 'Blue',
    opacity: '0.5',
    fontSize: '35px',
    textDecoration: 'underline'
},
}, "HTML :- Structuring the Web" );

const thirdPara = React.createElement("thirdPara", { style: {
    fontSize: '25px'
}}, "HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.");

const thirdDiv = React.createElement("div", {}, [h3, thirdPara]);

const h4 = React.createElement('h4', { style: {
    color: 'Blue',
    opacity: '0.5',
    fontSize: '35px',
    textDecoration: 'underline'
},
}, "CSS :- Styling the Web" );

const fourthPara = React.createElement("secondPara", { style: {
    fontSize: '25px'
}}, "CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.");

const fourthDiv = React.createElement("div", {}, [h4, fourthPara]);

const div = React.createElement("div",{},[firstDiv,secondDiv, thirdDiv, fourthDiv]);

ReactDOM.render(div, document.getElementById('root'));