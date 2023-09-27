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
            text.textContent = "Shiba Inu Facts!";
            text.textContent = '1: The Shiba Inu is the most popular breed of dog in Japan.\
            2:  Shiba Inus were introduced in the United States during the 1950s when American Service Members would bring them home after World War 2.\
            3:  The Shiba Inu breed is estimated to be over 9,000 years old.\
            4: The American Kennel Club did not recognize Shiba Inus as a breed until 1992.\
            5:  Despite the 2013 Doge Meme bringing new attention to the ancient breed, Shiba Inus have remained the 40th most popular dog in the United States for the last decade.'

            const container = document.querySelector('.container');
            container.innerHTML = ''; // Clear previous content
            container.appendChild(image);
            container.appendChild(text);
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
            text.textContent = 'Cat Facts! \
            1: As of 2019, The World Canine Organization recognizes 360 different breeds of cats.\
2: Despite common belief, Most cats are lactose intolerant!\
3: A Cat that shapes its tale into a question mark is designating that it would like to play!\
4:  Your cat is trying to play with you if it taps you with their paw with their claws retracted.\
5:  A group of kittens is known as a “kindle”.\
            ';

            const container = document.querySelector('.container');
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
            text.textContent = '1:  There are over 18,000 species of birds across the Earth.\
            2:The ostrich has larger eyes than any other land animal.\
            3:Penguins can jump as high as 9 feet.\
            4: It is estimated that 154 bird species have gone extinct since the 16th century, and 18 of those went extinct between 1975 and 2000.\
            5: Birds are the only species on Earth that have feathers.'

            const container = document.querySelector('.container');
            container.innerHTML = ''; // Clear previous content
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
        text.textContent = "1: To avoid humans, Foxes hunt at night in backyards, gardens, and city parks.\
        2: Despite being related to dogs, wolves, and coyotes, Foxes have traits that are more similar to cats\
        3:  Foxes are capable of making 40 distinct sounds.\
        4: Made famous from the show “Naruto”, the Nine-tailed fox is a mythological creature in Eastern Asian culture.\
        5:The smallest breed of fox in the world is the Fennec Fox.";

        const container = document.querySelector('.container');
        container.innerHTML = ''; // Clear previous content
        container.appendChild(image);
        container.appendChild(text); // Append the text below the image
    });
});


document.querySelector('.clearBtn').addEventListener('click', function() {
    console.log('Clear click');
    const container = document.querySelector('.container');
        container.innerHTML = ''; // Clear previous content
});