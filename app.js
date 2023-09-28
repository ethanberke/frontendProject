 document.querySelector('.dogeBtn').addEventListener('click', function() {
    console.log('Doge click');

    const dogeSound = document.getElementById('dogeSound');
    dogeSound.play();

    $.get('http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true', function(data) {
        if (data.length > 0) {
            const imageUrl = data[0];
            const image = document.createElement('img');
            image.src = imageUrl

            const text = document.createElement('p'); 
            text.innerHTML = "Shiba Inu Facts!<br>" +
            "1: The Shiba Inu is the most popular breed of dog in Japan.<br><br>" +
            "2:  The Shiba Inu breed is estimated to be over 9,000 years old.<br><br>" +
            "3: The American Kennel Club did not recognize Shiba Inus as a breed until 1992.<br><br>" +
            "4: Shiba Inus were introduced in the United States during the 1950s when American Service Members brought them home after World War 2.<br><br>" +
            "5:  Despite the 2013 <a href='https://en.wikipedia.org/wiki/Doge_(meme)'>Doge Meme</a> bringing new attention to the ancient breed, Shiba Inus have remained the 40th most popular dog in the United States for the last decade.<br><br>" +
            "To learn more about Shiba Inus, please visit <br><a href='https://www.akc.org/expert-advice/lifestyle/8-shiba-inu-facts/'>The American Kennel Club</a>"
            const container = document.querySelector('.container');
            container.style.display = 'inline-block';
            container.innerHTML = '';
            container.appendChild(image);
            container.appendChild(text);
        }
    });
});

document.querySelector('.catBtn').addEventListener('click', function() {
    console.log('Cat click');

    const catSound = document.getElementById('catSound');
    catSound.play();

    $.get('http://shibe.online/api/cats?count=1&urls=true&httpsUrls=true', function(data) {
        if (data.length > 0) {
            const imageUrl = data[0];
            const image = document.createElement('img');
            image.src = imageUrl;
            const text = document.createElement('p');
            text.innerHTML = "Cat Facts!<br>" +
            "1: A group of kittens is known as a <a href= 'https://pbs.twimg.com/media/BqNASByIQAA9KBJ.png'>“kindle”.</a><br><br>" +
            "2: Despite common belief, most cats are lactose intolerant!<br><br>" +
            "3: A cat that shapes its tail into a question mark is inviting you to play with them!<br><br>" +
            "4: As of 2019, The World Canine Organization recognizes 360 different breeds of cats.<br><br>" +
            "5: If your cat taps you with their paw with their claws retracted, they are trying to play with you!<br><br>" +
            "To learn more about cats, please visit the <br><a href='https://cvillecatcare.com/veterinary-topics/101-amazing-cat-facts-fun-trivia-about-your-feline-friend//'>Charlottesville Cat Care Clinic</a>"
            const container = document.querySelector('.container');
            container.style.display = 'inline-block';
            container.innerHTML = ''; // Clear previous content
            container.appendChild(image);
            container.appendChild(text);

        }
    });
});

document.querySelector('.birdBtn').addEventListener('click', function() {
    console.log('Bird click');

    const birdSound = document.getElementById('birdSound');
    birdSound.play();

    $.get('http://shibe.online/api/birds?count=1&urls=true&httpsUrls=true', function(data) {
        if (data.length > 0) {
            const imageUrl = data[0];
            const image = document.createElement('img');
            image.src = imageUrl;

            const text = document.createElement('p')
            text.innerHTML = "Bird Facts!<br>" +
            "1: Penguins can jump as high as 9 feet.<br><br>" +
            "2: Birds are the only species on Earth that have feathers.<br><br>" +
            "3: There are over 18,000 species of birds across the Earth.<br><br>" +
            "4: The ostrich has larger eyes than any other land animal.<br><br>" +
            "5: It is estimated that 154 species of birds have gone extinct since the 16th century,18 of which went extinct between 1975 and 2000.<br><br>" +
            "To learn more about birds, please visit <a href='https://www.trvst.world/biodiversity/bird-facts/'>trvst.world</a>"

            const container = document.querySelector('.container');
            container.style.display = 'inline-block';
            container.innerHTML = '';
            container.appendChild(image);
            container.appendChild(text);
        }
    });
});


document.querySelector('.foxBtn').addEventListener('click', function() {
    console.log('Fox click');

    const foxSound = document.getElementById('foxSound');
    foxSound.play();

    $.get('https://randomfox.ca/floof/', function(data) {
        const imageUrl = data.image;
        const image = document.createElement('img');
        image.src = imageUrl;

        // Create a <p> element for the text
        const text = document.createElement('p');
        text.innerHTML = "Fox Facts!<br>" +
        "1: Foxes are capable of making 40 distinct sounds.<br><br>" +
        "2: The smallest breed of fox in the world is the <a href='https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRIeLvBTy6XdFXbVmZFkxhVvHjkbWOFZiXaMiOOxR99H2lxXdoh5F95kbsC600N2TJoZA5DufquCOnVdJQ'>Fennec Fox.</a><br><br>" +
        "3: To avoid humans, foxes hunt at night in backyards, gardens, and city parks.<br><br>" +
        "4: Despite being related to dogs, wolves, and coyotes, foxes share more traits with cats.<br><br>" +
        "5: Made famous from the Anime show “Naruto”, the <a href='https://sites.psu.edu/frasscrclblog/2014/10/16/eastern-folklore-and-the-nine-tailed-fox/'>Nine-tailed Fox</a> is a mythological creature in Eastern Asian culture.<br><br>" +
        "To learn more about foxes, please visit <a href='https://www.wildthingsfood.co.uk/news/10-facts-about-foxes-that-may-surprise-you/'>WildThings.co.uk</a> <br>or <a href='https://kids.nationalgeographic.com/animals/mammals/facts/red-fox'>Kids National Geography.</a>"
        const container = document.querySelector('.container');
        container.style.display = 'inline-block';
        container.innerHTML = ''; // Clear previous content
        container.appendChild(image);
        container.appendChild(text);
    });
});


document.querySelector('.clearBtn').addEventListener('click', function() {
    console.log('Clear click');
    const container = document.querySelector('.container');
    container.style.display = 'none';
        container.innerHTML = ''; // Clear previous content
});