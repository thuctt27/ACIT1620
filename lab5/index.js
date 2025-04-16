/* Please do not modify any of the provided code snippets*/

const shuffle = (list) => {
    templist = list

    let currentIndex = templist.length
    let randomIndex

    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        const temp = templist[currentIndex]
        templist[currentIndex] = templist[randomIndex]
        templist[randomIndex] = temp 
    }
    return templist
}

/*Your code goes here for step 1*/

let urls = [  "https://i.ibb.co/sjvVrG3/fruit-plyh.jpg",
    "https://i.ibb.co/g3tqj4w/fruit-zxcv.jpg",
    "https://i.ibb.co/88Hy4rD/fruit-wert.jpg",
    "https://i.ibb.co/NmNMLKF/fruit-astt.jpg",
    "https://i.ibb.co/qp8Q1G6/fruit-dfgh.jpg",
    "https://i.ibb.co/9thfVhB/fruit-hjkl.jpg",
    "https://i.ibb.co/YtTfqvD/fruit-dcnj.jpg",
    "https://i.ibb.co/CVwKM8Z/fruit-ecuh.jpg",
    "https://i.ibb.co/ccNyKX0/fruit-uzxc.jpg"
]
let randomUrls = shuffle(urls)
let cardClass = document.querySelectorAll(".card");
/*
In the following line of code, document.querySelectorAll 
selects all <img> elements that are inside any element 
with the class .card.

The selector '.card img' means:
Find all elements with the class "card",then select all <img> 
tags inside them.

The selected <img> elements are stored in a constant variable 
called images. This allows you to loop through them, modify their 
attributes (e.g., src), or perform other operations.

querySelectorAll will be covered in the next class.
*/

const images = document.querySelectorAll('.card img');


/*Your code goes here for step 2*/

images.forEach((i, index )=>{ 
    i.src = randomUrls[index]
});



const h1 = document.querySelector('h1');
h1.append("!")


