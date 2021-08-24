const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What is your nickname? \n`, (nickname) => {

  rl.question(`What's an activity you like doing? \n`, (activity) => {

    rl.question(`What do you listen to while doing that? \n`, (music) => {
      
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) \n`, (favMealTime) => {

        rl.question(`What's your favourite thing to eat for that meal? \n`, (favMeal) => {
        
          rl.question(`Which sport is your absolute favourite? \n`, (sport) => {
            
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at! \n`, (superpower) => {
            
              console.log(`My nickname is ${nickname} and I love to play ${sport}. My favorite music to listen to while ${activity} is ${music}. My favorite meal to eat during ${favMealTime} is ${favMeal}. My superpower is: ${superpower}.`)
            
              rl.close();
            });
            
          });

        });
        
      });
      
    });
  
  });

});











