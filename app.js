function talk(){   
    var know = {   
    "Who are you" : "Hello, Cleiton here",   
    "How are you" : "Good :)",    
    "What's your favourite Football Team" : "My favorite football team is Vasco.",   
    "ok" : "Thank You So Much ",   
    "Bye" : "Okay! Will meet soon..",  
    "Are you a duck" : "Yes, I'm a little yellow duck!",
    "What's your favourite color" : "Yellow, of course",
    "What do you like to do" : "Swim! and say QUACK!",
    "Did you know Donald Duck" : "Yes!!!! That's my Grandpa. Did you know him?",
    "What do you like to eat" : "Pacha's food of course!",
    "What are you afraid of" : "Hawk's give me chills...",
    "Cleiton, what do you think about work in holidays" : "It's suck, but I dont work, do you?"
    };   
    var user = document.getElementById('userBox').value;   
    document.getElementById('chatLog').innerHTML = user + "<br>";   
    if (user in know) {   
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";   
    }else{   
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";   
    }   
   } 