const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["Self-knowledge is a life long process",
					 "Your talents will be recognized and suitably rewarded",
					 "Your dreams are worth your best efforts to achieve them",
           "Fearless courage is the foundation of victory",
           "Believe in yourself and others will too",
          "Every wise man began by asking many questions",
          "The only people that never fail are those that never try"
  ];

  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortunes = fortunes[randomIndex];

  res.status(200).send(randomFortunes);
  
});

app.get("/api/superhero", (req, res) => {
  const supers = [
    "Today you are Superman", 
    "Today you are Batman", 
    "Today you are Wonder Woman", 
    "Today you are Ironman", 
    "Today you are Captain America", 
    "Today you are Hulk", 
    "Today you are Thor", 
    "Today you are Black Panther", 
    "Today you are Csptain Marvel", 
    "Today you are Black Widow",
    "Today you are Doctor Strange"
  ];
  let randomIndex = Math.floor(Math.random() * supers.length);
  let randomSupers = supers[randomIndex];

  res.status(200).send(randomSupers);
})

app.get("/api/Hogwarts", (req, res) => {
  const hogwartsHouses = ["You are a member of house Gryffindor", 
"You are a member of house Hufflepuff",
"You are a member of house Ravenclaw",
"You are a member of house Slytherin",];

let randomIndex = Math.floor(Math.random() * hogwartsHouses.length);
let randomHogwartsHouses = hogwartsHouses[randomIndex];

res.status(200).send(randomHogwartsHouses);
});

app.get("/api/yoda", (req, res) => {
  const yodaQuotes = ["In a dark place we find ourselves in coding, and a little more knowledge lights our way", 
"Always pass on what you have learned in coding",
"Powerful you have become in coding, the dark side I sense in you",
"Fear of coding leads to anger. Anger leads to hate of coding. Hate leads to suffering in coding",
"Patience you must have my young Web Dev",
"Code or code not, there is no try",
"Truly wonderful the mind of a Web Dev is",
];

let randomIndex = Math.floor(Math.random() * yodaQuotes.length);
let randomYodaQuotes = yodaQuotes[randomIndex];

res.status(200).send(randomYodaQuotes);
});

//I know this only needs a small fix and I tried a lot of different things but I couldn't quite get this to work.
app.post("/api/user", (req, res) => {
  console.log(req.body)
  let username = req.body.username;
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;

  res.status(200).send(`Congratulations ${firstName} you have been entered for a free trip to Hawaii!`)
});

app.listen(4000, () => console.log("Server running on 4000"));
