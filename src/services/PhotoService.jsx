import * as cheerio from 'cheerio';
import axios from 'axios';



export async function getImageUrlFromWebPage(webPageUrl) {
  try {
    // Fetch the HTML content of the web page
    const response = await axios.get(webPageUrl);
    const html = response.data;

    // Parse the HTML content using Cheerio
    const $ = cheerio.load(html);

    // Find the div element containing the image
    const divElement = $('div._aagw');

    // Extract the image URL from the div element
    const imageUrl = divElement.find('img').attr('src');

    // Return the extracted image URL
    return imageUrl;
  } catch (error) {
    console.error('Error fetching web page:', error);
    return null;
  }
}




// Usage example
// const instagramPostUrl = 'https://www.instagram.com/p/C3RpLCTsRdu/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==';
// getImageUrlFromInstagramPost(instagramPostUrl)
//     .then(imageUrl => {
//         console.log('Image URL:', imageUrl);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });