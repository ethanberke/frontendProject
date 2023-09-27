 // Add an event listener to the "Doge" button
 document.querySelector('.dogeBtn').addEventListener('click', function() {
    console.log('clicky click');
    $.get('http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true', function(data) {
        if (data.length > 0) {
            // Create an image element and set its src attribute
            const imageUrl = data[0];
            const image = document.createElement('img');
            image.src = imageUrl;

            const container = document.querySelector('.container');
            container.innerHTML = ''; // Clear previous content
            container.appendChild(image);
        }
    });
});

document.querySelector('.catBtn').addEventListener('click', function() {
    console.log('clicky click');
    $.get('http://shibe.online/api/cats?count=1&urls=true&httpsUrls=true', function(data) {
        // Handle the API response data
        if (data.length > 0) {
            const imageUrl = data[0];
            const image = document.createElement('img');
            image.src = imageUrl;

            const container = document.querySelector('.container');
            container.innerHTML = ''; // Clear previous content
            container.appendChild(image);
        }
    });
});

document.querySelector('.birdBtn').addEventListener('click', function() {
    console.log('clicky click');
    $.get('http://shibe.online/api/birds?count=1&urls=true&httpsUrls=true', function(data) {
        if (data.length > 0) {
            const imageUrl = data[0];
            const image = document.createElement('img');
            image.src = imageUrl;

            const container = document.querySelector('.container');
            container.innerHTML = ''; // Clear previous content
            container.appendChild(image);
        }
    });
});