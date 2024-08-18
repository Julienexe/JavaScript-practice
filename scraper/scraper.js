// Function to fetch the HTML content from a file and convert it to JSON
function fetchAndParseHTML(filePath) {
    fetch(filePath)
        .then(response => response.text())  // Fetch the file and read it as text
        .then(htmlContent => {
            // Parse the HTML content using DOMParser
            let parser = new DOMParser();
            let doc = parser.parseFromString(htmlContent, 'text/html');

            // Initialize an array to store the extracted data
            let places = [];

            // Find all the table rows in the document
            let rows = doc.querySelectorAll('tr');

            // Iterate over each row and extract the relevant data
            rows.forEach(row => {
                let place = {};

                // Extract the link to the detailed page
                let linkTag = row.querySelector('a');
                if (linkTag) {
                    place['link'] = linkTag.getAttribute('href');
                }

                // Extract the image source
                let imgTag = row.querySelector('img');
                if (imgTag) {
                    place['image'] = imgTag.getAttribute('src');
                }

                // Extract the price
                let priceTag = row.querySelector('.price');
                if (priceTag) {
                    place['price'] = priceTag.textContent.trim();
                }

                // Extract the title
                let titleTag = row.querySelector('h4');
                if (titleTag) {
                    place['title'] = titleTag.textContent.trim();
                }

                // Extract the description
                let descriptionTag = row.querySelector('span');
                if (descriptionTag) {
                    place['description'] = descriptionTag.textContent.trim();
                }

                // Add the place to the array if it contains data
                if (Object.keys(place).length > 0) {
                    places.push(place);
                }
            });

            // Convert the places array to JSON
            let jsonData = JSON.stringify(places, null, 4);

            // Output the JSON data (you can also save it to a file or use it as needed)
            console.log(jsonData);
        })
        .catch(error => {
            console.error('Error fetching the HTML file:', error);
        });
}

// Call the function with the path to your HTML file
fetchAndParseHTML('C:/Users/JP/Desktop/dev/js practice/scraper/popular_places_87.htm');
