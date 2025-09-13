// acces all data from an array using foreach loop ** kono kichu return kore na**
data.forEach(da => {
    console.log(da);
})

//map method use in array ** map ar foreach same but the map << return a new array >> **

data.map(d => {
    console.log(d);
})

        /* another opctions */
const result = data.map(d => {
    return d.title;
})

console.log(result);


///  array join *** by this i can join these whole arry in a line with various paremeters like space , - , any thingh

const arr = ['hi','akib','bhuiyan'];
console.log(arr.join(""));

/// push method array er sese neew elemets add kore ** i can pussh any type of variable that will be primtive or non primtive no problem !!***

data.push(100);
console.log(data);
        /* additing an object more  */
const person = {
    name: "akib",
    universirty: "jkkniu",
    location: "mymensingh",
    distance: 120
}
data.push(person);
console.log(data);
        /* add new array with push in previous array */
const newarr = ['akib','boss',1];
data.push(newarr);
console.log(data);

/// filter in array ** filter works for under any conditions for the perticlar thngh** ** new aray return kore and show korai!!>>

const arra = [1,2,3,3,3,4,5,6,7];

const filterarrau =  arra.filter(num => num !== 3);

console.log(filterarrau);

        /* getting output here <<[ 1, 2, 4, 5, 6, 7 ]>> */
        /* kono anta array set thika filter kore target kiso data return kora */

const filterdata = data.filter(d => d.id !== "c3r4r51n9lno");
console.log(filterdata);


/// find() in array thike kiso jinis khuje ber korte cyle find use kora jete pare!! ** it not return array *>> it just one thingh find from array!!

const finddata = data.find(d => d.id === "c3r4r51n9lno");
console.log(finddata); 
        /* find() i can find only one thigh from array  *** here only one thing get return from array
        ** if not find data then show undefine >>***/


/// 



/// img er color change invert thinght is more important for the teilwind css

  <img src="./assets/logo.svg" alt="" class="invert"></img> 
        /* here the class="invert"  > this makes the oposite color for the current color*/
        /* get , post, put, delet for the request on the api call here */



/// for data fetch awaite/async use 

const loaddata = async () => {
    try {
        const res = await fetch("https://news-api-fs.vercel.app/api/categories");
        const data = await res.json();
        showdata(data.categories);
    } catch (err) {
        console.log("error", err);
    }
}

/// without using append child >> use + >> for append new elements innner html

const showdata = (categories) => {
    const ul = document.getElementById("catergori-id");
   

    categories.forEach(categori => {
        ul.innerHTML += `
            <li class="text-[17px] py-[10px] hover:border-b-4 hover:border-red-800 cursor-pointer font-family">
                ${categori.title}
            </li>`;
    });
};
        /*  ul.innerHTML += ` ...>> here use the  + icons for append child and show the html structures */

    
/// for getting any categori from api 

const loaddata = () =>{
fetch("https://news-api-fs.vercel.app/api/categories")
.then(res => res.json())
.then(data => showdata(data.categories))
.catch(err => console.log("error"))

}

const showdata = (categories) => {
    categories.forEach(categori => {
        const ul = document.getElementById("catergori-id");
        const li = document.createElement("li");
        li.innerHTML = `<li class="text-[17px] py-[10px] hover:border-b-4 hover:border-red-800 cursor-pointer font-family">
                ${categori.title}
            </li>`;
        ul.appendChild(li);
    })
}

loaddata();


/// toggole for mutliple button when the get from any api
        /* 
        ** 1. first jare click kormo tar parent div domro and tar parent div ke document.id dia dore nia asbo!
        ** 2. then tar addeventlisener add kormo with paremeter (e)
        ** 3. and then add with >> targer<< with the (e) for the getting target thingh
        ** 4. 
         */
    /* inner foreach looop below*/
   document.getElementById("catergori-id").addEventListener("click",
        function(e){
            const allli = document.querySelectorAll("li");
            allli.forEach(list => {
               list.classList.remove("border-b-4")
               list.classList.remove("border-red-800")
            })
            if(e.target.localName === 'li'){
                e.target.classList.add("border-b-4")
                e.target.classList.add("border-red-800")
            }
        }
    )


/// for number type id i can use this  ** select api-id

onclick="loadnews(${categori.id})";

    /* but when i try to get the strign type id then the chsg it eith <<''>> */
onclick="loadnews('${categori.id}')";


/// api with <<id>> getting procedures

onclick=("loadnews('${categori.id}');

    const loadnews = (id) => {

    fetch(`https://news-api-fs.vercel.app/api/categories/${id}`)
        .then(Response => Response.json())
        .then(newss => shownewss(newss.articles))

}

const shownewss = (newss) => {
    const newContiner = document.getElementById("newsContainer");
    newContiner.innerHTML = ""; /* here the previous continer would be clear first */
    for (let news of newss) {
        console.log(news);
        
        
        newContiner.innerHTML += `
        <div>
                 <div>
                    <img src="${news.image.srcset[5].url}" alt="">
                 </div>
                 <h2>${news.title}</h2>
        </div>
        `;
    }

}


        /***** here i can another way to dected this by the e.target this typeo of the connected list *****/


/// show extra detils and bookmarks here  *** api bookmark**

 
document.getElementById("newsContainer").addEventListener("click",
    (e) =>{
        // console.log(e.target.innerText);
        if(e.target.innerText === "Bookmark"){
            // console.log(e.target.parentNode.children[0].innerText); /* this way only get the title */
            // console.log(e.target.parentNode.id);
            const title = e.target.parentNode.children[0].innerText;
            const id = e.target.parentNode.id;
            Bookmarks.push(
                {
                    title: title,
                    id: id
                }
            )
            console.log(Bookmarks);

        }
    }
)
        /* i can work writh the exttrea function inner if part  */


/// array operaction:
  1. push //add last a new element
  2. pop // remove a elemet from last
  3. unshift // add new element in first positions
  4. shift // remove first element
  5. slice(2,5) // targeted part crop kore consol okore
  6. splice(2,4) // like slice but it took the last ellemet also
  7. for loop in js // ** for of ** forEach ** i +++ >> this thrree type will be the iteraction of for
  8. map // this is creat an new array and return new array 
  9. forEach // here same as map but here not return not new array
  10. filter // same ase map it also return an new array but >> it has must any conditions ** under that conitions here the get the all targeted thingh with an new arrra y !!
  11. find // it can find only one thigh under any conditions *** it return an << object>>





/// function operaction 
        /* 1 ** function funname (perameter){
                }
           2 ** const funname = () =>{
            }
           3. ** const restfunction = (...rest) => {
                >>>  here the rest peremeter means here the jekono argumetn are passing through the rest function

            }

        */


/// object operations
 
objectname = {
    name: "akib",
    age: 23,
    salary: 1500000,
    location: "gulshan"
   
}


/// tamplate string or tamplate litarale 

` here i write any thing like: html, innertext, contactions, anythingh we can right here` ;
`` <<< "this is tamplte string"

        /* i can pass here dinamic value with the << ${}>> by this */
    

/// << ... >> speard operator here  ** use for the copy of array

const array = [1,2,3,4,5,6];
console.log(...array); /* by this o can bichia dite pari and new array retur korbe ja kaje asbe onk */


///  distructing of array and object <<<<

const friend = ["hello", "alom", "mithila","ha ha"];
const [el1,el2,el3,el4] = friend;
console.log(el1,el2,el3,el4);
        /* here array distructing array sobgolo elemts ke alada alada akta variable er moded rakha lage 
        here serial is main metter element name not main metter*/
    /* object distructing here***************8 */
person = {
    name: "hero alom",
    age: 34,
    wife: "mithila",
    country: "bd",
    friend: ["bd","test"],
    hero: "alom"
}

const {name,age} = person;

console.log(name,age); /* here serial does not metter here jsut metter the ** the key name should be same ase the original object key name***** */



/// 



