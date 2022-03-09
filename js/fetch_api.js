
const blogUrl = "https://gameover.yggdrasildev.com/wp-json/wp/v2/posts/?per_page=100";

const corsFix = "https://noroffcors.herokuapp.com/" + blogUrl;

//const corsFix = proxy + blogUrl;

const resultsContainer = document.querySelector(".blogs")

const container = document.querySelector(".container");

const carouselContainer = document.querySelector(".carousel")


async function getPosts() {
    try {
        const response = await fetch(corsFix);

        const json = await response.json();

        console.log(json);

        const results = json;

        

        for(let i = 0; i < results.length; i++) {
            console.log(results[i]);

            if (i === 10) {
                break;
            }

            resultsContainer.innerHTML += `<a href="${results[i].link}"><div class="blogpost"><h1>${results[i].title.rendered}</h1>
                                               <img src="${results[i].better_featured_image.source_url}" class="img"/>
                                               </a></div>`;
            
        }

    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = error
    }


}


getPosts();



async function getCarousel() {
    try {
        const response = await fetch(corsFix);

        const json = await response.json();

        console.log(json);

        const results = json;

        

        for(let i = 0; i < results.length; i++) {
            console.log(results[i]);

            if (i === 4) {
                break;
            }

            carouselContainer.innerHTML += `<a href="${results[i].link}"><div class="carousel, carouselItems"><h1>${results[i].title.rendered}</h1>
                                            <img src="${results[i].better_featured_image.source_url}" class="img"/></a></div>`;
            
        }

    } catch (error) {
        console.log(error);
        carouselContainer.innerHTML = error
    }


}

getCarousel();
