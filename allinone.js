/* 
***********  এখানে সব আমার নিজের হাতের অ্যান্ড নিজের মত করে লিখা নিশ্চিন্ত মনে পর রিভিসিন দিব *****

*****>>>> এখানে >> ///  মানে নতুন কিছু বুজায় !!  >> (/*  *) এটা দিয়া বুজায় এক্সত্রা কিছু   
******************************** */

import { Component, Suspense } from "react";
import { jsx } from "react/jsx-runtime";

/* ******************************************************************* */



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

const arr = ['hi', 'akib', 'bhuiyan'];
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
const newarr = ['akib', 'boss', 1];
data.push(newarr);
console.log(data);

/// filter in array ** filter works for under any conditions for the perticlar thngh** ** new aray return kore and show korai!!>>

const arra = [1, 2, 3, 3, 3, 4, 5, 6, 7];

const filterarrau = arra.filter(num => num !== 3);

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

const loaddata = () => {
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

/// show the onlcick json

onclick = 'carddetails(${JSON.stringify(food)})' /* importtant  */



/// add to card slip 
onclick = 'addtoCadr(${JSON.stringify(food)})'

/* here shoud use the json.stringify */


/// toggole for mutliple button when the get from any api
/* 
** 1. first jare click kormo tar parent div domro and tar parent div ke document.id dia dore nia asbo!
** 2. then tar addeventlisener add kormo with paremeter (e)
** 3. and then add with >> targer<< with the (e) for the getting target thingh
** 4. 
 */
/* inner foreach looop below*/
document.getElementById("catergori-id").addEventListener("click",
    function (e) {
        const allli = document.querySelectorAll("li");
        allli.forEach(list => {
            list.classList.remove("border-b-4")
            list.classList.remove("border-red-800")
        })
        if (e.target.localName === 'li') {
            e.target.classList.add("border-b-4")
            e.target.classList.add("border-red-800")
        }
    }
)


/// for number type id i can use this  ** select api-id

onclick = "loadnews(${categori.id})";

/* but when i try to get the strign type id then the chsg it eith <<''>> */
onclick = "loadnews('${categori.id}')";


/// api with <<id>> getting procedures

onclick = ("loadnews('${categori.id}');

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
    (e) => {
        // console.log(e.target.innerText);
        if (e.target.innerText === "Bookmark") {
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
5. slice(2, 5) // targeted part crop kore consol okore
6. splice(2, 4) // like slice but it took the last ellemet also
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

    ` here i write any thing like: html, innertext, contactions, anythingh we can right here`;
`` <<< "this is tamplte string"

/* i can pass here dinamic value with the << ${}>> by this */


/// << ... >> speard operator here  ** use for the copy of array

const array = [1, 2, 3, 4, 5, 6];
console.log(...array); /* by this o can bichia dite pari and new array retur korbe ja kaje asbe onk */


///  distructing of array and object <<<<

const friend = ["hello", "alom", "mithila", "ha ha"];
const [el1, el2, el3, el4] = friend;
console.log(el1, el2, el3, el4);
/* here array distructing array sobgolo elemts ke alada alada akta variable er moded rakha lage 
here serial is main metter element name not main metter*/
/* object distructing here***************8 */
person = {
    name: "hero alom",
    age: 34,
    wife: "mithila",
    country: "bd",
    friend: ["bd", "test"],
    hero: "alom"
}

const { name, age } = person;

console.log(name, age); /* here serial does not metter here jsut metter the ** the key name should be same ase the original object key name***** */



/// json is??

const person = `{
    "name": "hero alom",
    "age": "34",
    "locations": "magura"
}`

/* here `` >> backtik use korte hui and here this >> json er type hube <<<<<strigh>>>> */


///  nomarl onject to convert into the stingify version like the json data making

const person = {
    name: "hero alom",
    age: 40,
    friend: ["bd", "test", "mithila"],
    family: {
        fathername: "kolim uddin",
        motherName: "falani khatun"

    }
}
console.log(typeof person); // this is now object
/* convert object to the stringh that means stringh  */
const jsondata = JSON.stringify(person);
console.log(jsondata); //  here make the jsnon data from the previous object data

/* then again json to the object data here >> usinf perse >> ** >> json.perse() <<*** */



const jsontoobject = JSON.parse(jsondata);
console.log(jsontoobject);
/* 
*** >> object to JSON convert << => use , JSON.stringify(OBJECT NAME);
*** >> JSON TO object convert  << => use, JSON.parse(JSON STRIGN NAME);
 */


/// fetch << => use and more ......


fetch("url")
    .then(res => res.json())
    .then(data => her use funtion or any thingh)
    .catch();


///  object keys console kora only

const keys = Object.keys(person);
console.log(keys); /*  here the only all keys return from thet object  <<< *** here return an array with all keys ******************/


/// object values console kora and rerurn in array

const values = Object.values(person);
console.log(values); /* find all values and return an aray unner the all values */



/// truthy value falsy values

/* falsy values */
1. 0
2. - 0
3. null
4. undefine
5. nan, false
6. many more............

/* truthy values */
1.  true
2. "anythighn"
3. { }
4.[]


///  Ternary  operators ** conditions ? console : console ** 
/* its generally use in if else conditions */
test ? console.log("its truthy!!") : console.log("its falsy!!");
/* stntex: >> consditons ? console.log("") : console.log("") << */

/* more shorten for this ternary variable  */
const result = (num >= 10 && num <= 20) ? "true" : "false";
console.log(result); //  here taking a variable just return the output

/* more more more shorten */
const isActive = true;
const showuser = () => console.log("show user green")
const hideuser = () => console.log("hide the user ")

// isActive ? showuser () : hideuser();

isActive && showuser(); //  true hule ja ja ase sop dekhao
isActive || showuser(); //  false hule ja ja ase sop dekhabe 



/// string to number

let num = "10";
console.log(+num); // here coverted into the number

/// number convert into string

let num = 10;
const result = 10 + "";
console, log(typeof result);


/// local storage set and get item

localStorage.getItem("name", "name") /* here should have two perameter 1. key 2. values */

/* get the item from local storage */
localStorage.getItem("key name") //  here have one perameter only

localStorage.clear // for clear all local storage data

/* local storage  e >> object or array << input korte hule JSON.strigify korte hube abr get korte hule JSON.parse korte hube */



///  dot notaiton and braket notations ** notaion

const person = {
    name: "hero alom",
    age: 12,
    friends: ["mithila", "ovi", "mc"],
    salary: 2000
}

const dot_notation = person.name; //  this is dot notarions
const braket_notation = person["age"]; // braket notations
console.log(dot_notation, braket_notation);
/* ****strigh notations need when the (key name) olta palta thakbe** << ha ha ha.....>>*** */


///  more will be add html csss and the valina js here ** below start with the >>> react js>>



piya



/* **************** ***********  START HERE REACT JS *******************************8 */

/// 



/// setup react 


vite.js থিকা প্রোজেক্ট সেট করতে হুবে
    => পরে সেখানে সোর্স থিকা কাজ করতে হুবে নতুন জদি লাগে
        => more will be update Here


            /// comoponents based frame work here

            => 4 way to to define Component
1. similer in look differnet in data
2. container component
3. no commot patteren but brekdown for working porpuse
4. stand alone componetn

    => componetn bild in jsx 
=> jsx = javascript + xml  file
    >>export the component
        >> define the functions

            => general stucture of jsx:

export default function Todo({ task, is_ral }) {
    return (
        <div>
            <li>task: {task}</li>
            <li>is really good: {is_ral}</li>
        </div>
    )
}

        /* **
        ** here should have the export >> but defult export shoult be max one time!!
        ** define the funciton  >> here function names first letter should be **{capital letter}**
        ** multi line html code thakle here >>  <></> use korte huve ba div use korte huve : cause function only return one thingh 
        ** close all html tag even which has no colsing taq in vanila html!!!
        ** must use the camel case not use hifen or another thingh
        ** paremet er modde deful vlaues add kora jay somossa nai 
        *** inner jsx i can use raw js uding with the >> {} << this ......

         */

=> { } use this can get the dinamic valuse like: variable, object dinamic, anything inner part of the { }>>


    /// jsx perameter (props) && distructring thingh in paremeter windows


    function App() {


        return (
            <>

                <h1>Vite + React</h1>
                <Todo task="learn react" is_ral="true"></Todo>
                <Device name="i phone" price="10000"></Device>
                <Device name="samsung" price="4000"></Device>
                <Device name="oppo" price="2000"></Device>




            </>
        )
    }
function Device({ name, price }) {
    const sty = {
        border: "2px solid red",
        borderRadius: "20px",
        marginBottom: "20px"

    }

        -> i can use as perameter ** props **
            -> more over i can use the distuctctring method  like this >> Device({ name, price }) <<
                -> if use props then it will works like the object so it will be dinamic as the { props.name } like this FileSystem


                    => jsx file manei reacts >>


                        /// connect the jsx file extranally 

                        we can connect jsx file externally by the << export and import>> methods

                            -> যেখান থেকে পাঠাব সেখানে  export use korte hube >> defult use korle one time use kora jai
                                -> যে ফাইল এ রিড করবে সেখানে import use korte hube >> import Todo from './todo' >> ababe

///  css in jsx file ** i can use style in jsx many way


=>  i can use internally in jsx file for css like this way

    function Device({ name, price }) {
        const sty = {
            border: "2px solid red",
            borderRadius: "20px",
            marginBottom: "20px"

        }
        return (
            <div style={sty}>  {/* here use the style in jsx file !! */}
                <h2>device name: {name}</h2>
                <p>proce: {price}</p>

            </div>
        )
    }

=> css use in extarnal file like the stryle.css

    import './App.css' 

>> ababe add kore nite hideuser


        => tailwind use korle normally taiwins cdn use kore tailwind use kora jete pare!! >>> tailwind more preferabale Here



    ///  conditiond use in jsx file ** jsx conditions**

    export default function Todo({ task, is_ral }) {
        if (is_ral = true) { /* mind it here given only one = */
            return (
                <div>
                    <li>Done: {task}</li>

                </div>
            )
        }
    }

    /* like this but the moreover i can use her  if else if else leder and more coditons here */


    /// ittercation using the array in map method : 

    function App() {
        const actors = ['bappa raj', 'omor sunny', 'salman sha']


        return (
            <>

                <h1>Vite + React</h1>
                {
                    actors.map(actor => <Actor actor={actor}></Actor>)
                }

            </>
        )
    }

    export default function Actor({ actor }) {
        return <li>nayok: {actor}</li>
    }

    /// .................................




    /// fetch from apit use method use => use i get the react website and the api -> use -> hoook

    1. just write the simple fetch with till json conversion

    const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()) // here sodo response porjonto likht hube data likhe dorkr nai !!

    2. wrap the data loading component uder the Suspense!!  => inner app.jsx

        < Suspense fallback = {< h3 > loading .....</ >}>
            <Users fetchUsers={fetchUsers}></Users>
      </ >
    3. then the user.jsx er modde -> data distructuring -> innet user function start the use hook with const ->
        function Users({ fetchUsers }) {
            const users = use(fetchUsers);
            return (
                <div className="cards">
                    <h2>users:</h2>
                </div>
            )
        }




//// same kaj jodi async wait dia korle akta line vesi korte hube sodo function ta call korte hube new akta line e!!>>>>  just call the async fucntion <<<<

1. first write the async and awit function 
const fetchFriend = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json()
}

2. cal the function tht arrow function

  const fetchFriends = fetchFriend();
/* this functioncall the inner app() comonent  */
3.wrap the data loading component uder the Suspense!!  => inner app.jsx
    < Suspense fallback = "load data now, plase wait unlitt load data complected..." >
        <Friends fetchFriends={fetchFriends}></Friends>
      </ >

    4. then the user.jsx er modde -> data distructuring -> innet user function start the use hook with const -> 

import { use } from "react"

function Friends({ fetchFriends }) {
    const Friends = use(fetchFriends);
    console.log(Friends);
    return (
        <div className="cards">
            <h2>Friends: {Friends.length}</h2>
        </div>
    )
}


/// from api all data get using by map method:

return (
    <div className="cards">
        <h2>Friends: {Friends.length}</h2>
        {
            Friends.map(friend => <Friend></Friend>)
        }
    </div>
)

/* herer the  <Friend></Friend> is another new components whch is get from the friend comonent */


/// to show the ui all friend data in the browser>>

function Friend({ friend }) {
    console.log(friend);
    const { name } = friend;
    return (
        <div className="cards">
            <h2>Friend: {name}</h2>
        </div>
    )
}


///  repeat work: ====    {the whone works for the api fetch and show the ui using<<<< use >>>> hook }...........

/* 1. work for app.jsx */

const fetchPost = async () => {
    const Post = await fetch('https://jsonplaceholder.typicode.com/posts')
    return Post.json()
}
/* ........more iner retrn fn............ */

<Suspense fallback="loading post...">
    <Posts fetchPosts={fetchPosts}>

    </Posts>
</Suspense>

/* 2.  posts.jsx file code*/


import { use } from "react"
import Post from "./post";
export default function Posts({ fetchPosts }) {
    const Posts = use(fetchPosts);

    return (
        <div className="cards">
            <h3>post: {Posts.length}</h3>
            {
                Posts.map(post => <Post post={post.id} post={post}></Post>)
            }

        </div>
    )
}

/* post.jsx file code */

import React from 'react'

function Post({ post }) {
    console.log(post);
    const { id, title, body, userId } = post;
    return (
        <div className='cards'>
            <h2>Post:</h2>
            <p>post id : {id}</p>
            <p>title: {title}</p>
            <p>body: {body}</p>
            <p>userid: {userId}</p>

        </div>
    )
}

export default Post



//// conditionsal css class add 


//    <div className= {`cou ${visti && 'visited'}`}>


/// local storage e data store kora for some time ::

/*******  setitem -> stingfy data -> store data -> = get item -> parse data -> get the item from local storage *****/

1. local Storage a  value rakhle obososi string e convert kore rakhrte hui
const stringified = JSON.stringify("any object here input okay?")
2. set the value in the localStorage
localStorage.setItem('cart', stringified);



/// for style dyanmic cssdynamic

className = {`btn text-black rounded-l-2xl ${toggole === true ? "bg-green-400" : "bg-white"} border-l-0`}


/// continer muliple use in jsx file

import React from 'react';





const Contiler = ({ Children }) => {
    return (
        <div className='container mx-auto'>
            {Children}

        </div>
    );
};

export default Contiler;


/* by this continer i can use this continer jsx use in multiple timeas*/




/// appy inner valnila css use the tailwind css 

@apply  => this is rule of teilwind inner the vanila css



/// dynamic class style : 

{ ` defult style..... =>dymaic styte ${}` };




///  priority of the class style  :::

!bg - purple - 500!text - white  /*  here uae the << ! >  sign*/


/// multiple button making for the clickable here

/* out side the return = >  */
const btns = ["All", "Pending", "Submitted", "Review"];

/* inside the resturn  */

1. {
    btns.map(btn => {
        return
    })

}
2. {
    btns.map((btn, ind) => {
        return <button key={ind} onClick={() => setToggolbtnstatus(btn)} type="button" className={`toggole-btn ${ind === 0 && "rounded-l-xl"}  ${ind === btns.length - 1 && "rounded-r-xl"} ${toggolbtnstatus === btn && "!bg-purple-500 !text-white"}`}>{btn}</button>
    })

}


///  delet_data !!!


const removecard = (issus) => {
    const filtercard = cardClicked.filter(issu => issu.id !== issus.id)
    console.log(filtercard);
    setCardClicked(filtercard);
}




/// nav var responsive system step by step below : 
    => const [open, setOpen] = useState(false);
        /* declier a state and the setopen declire on the onclick button:  */
    => return (
    <div className='px-16 py-6 flex justify-between'>
        <span className='flex gap-4' onClick={() => setOpen(!open)}>
            {
                open ? <X className='md:hidden' /> : <Menu className='md:hidden' />
            }


            <h3>my nabvar</h3>
        </span>

        <ul className='flex gap-7'>
            {
                navItems.map((nav, id) => <Link id={id} nav={nav}></Link>)
            }
        </ul>

        <button type="button">sing in</button>

    </div>
);
            /* akto detils ase poro ta ja ja korsi dekhlai parmo ami e korsi  */
    => final::>>>>
    import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';
const navItems = [
    { id: 1, name: "Home", route: "/" },
    { id: 2, name: "About", route: "/about" },
    { id: 3, name: "Services", route: "/services" },
    { id: 4, name: "Blog", route: "/blog" },
    { id: 5, name: "Contact", route: "/contact" },
];

const Nabvar = () => {
    const navbaar = navItems.map((nav, id) => <Link id={id} nav={nav}></Link>)

    const [open, setOpen] = useState(false);

    return (
        <div className='px-16 py-6 flex justify-between'>
            <span className='flex gap-4' onClick={() => setOpen(!open)}>
                {
                    open ? <X className='md:hidden' /> : <Menu className='md:hidden' />
                }
                {
                    <ul className={`md:hidden absolute duration-700 ${open ? 'left-16 top-17' : '-left-34'}`}>
                        {navbaar}
                    </ul>
                }

                <h3>my nabvar</h3>
            </span>

            <ul className='hidden md:flex gap-7 '>
                {
                    navbaar
                }
            </ul>

            <button type="button">sing in</button>

        </div>
    );
};

export default Nabvar;





/// formate data from axios and use for rechart chart data #formate data #dataformate #data

const formatstudetndata = mdata.map(sdata => {
    const student = {
        id: sdata.id,
        // physics: sdata.marks.physics;
        chemistry: sdata.marks.chemistry,
        math: sdata.marks.math,
        name: sdata.name
    }

    return student;
})




/// 


.................................Component





/// /* react routing here  */

/* here is the routing procedures  */

1.
import { createBrowserRouter, RouterProvider } from 'react-router'

2.
const router = createBrowserRouter([ // here all are inner of the  first braket :
    {
        path: '/',
        element: <div>hello react man!!</div>
    },
    {
        path: 'about',
        element: <div>her is about secntion from the react:</div> /* here pass only any tag or elemnets man */
    },
    {
        path: 'app',
        Component: App /*  if i want to set a comonets as a router =>  here just inject the comonents name>> */
    }
])

3.
    < RouterProvider router = { router } ></ >
        /* router provide the >> router provider pass all array of object values : */




/// data loader  #loader react #dataload #reactfetch #routerfetch

=> main.jsx ->
    inner component:
{
    path: '/',
        loader : () => fetch('api link / local json link here'),
            component : users
}
=> which component to use load data:

const users = useloaderdata();

here users gets all json data!!!


///  Dynimic routing here::  #dynimc rounting here #rounting #dynamic

bookdata.map(bdata => <Link to={`/book-detils/${bdata.bookId}`}><Book id={bookdata.bookId} bdata={bdata}></Book></Link>)

/* here the main.jsx is */

{
    path: "book-detils/:id", // dyanmic routing path decilare here !!
        element: <Bookdetils />,
            loader: async ({ params }) => {
                const res = await fetch("/booksData.json");
                const data = await res.json();


                return data.find(book => book.bookId === Number(params.id));
            }
},

/// use react spinner: : 

const navigation = useNavigation()

2.
{
    navigation?.state === 'loading' ? (
        <LoadingSpinner></LoadingSpinner>
    ) : (
        <Outlet></Outlet>
    )
}


....................................


/// root.jsx routing

{
    path: '/',
        Component: Root,
            children: [
                { index: true, Component: Home },
                { path: 'Mobiles', Component: Mobiles },
                { path: 'Leptops', Component: Leptops },
                {
                    path: '/Users',
                    loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
                    Component: Users
                }
            ]

},



/// usenavigaet #react navigate #hookhavigate


<button onClick={handlebtn}>go back</button>
/* use set navigate  on perticular button*/
const navi = useNavigate();
const handlebtn = () => {
    navi('/Posts')
}
/* here use the usenavigate and set the path here */




///  from sunmitted #prevent #submit form 
e.preventDefault(); 
...

const handlesubmit = (e) => {
    e.preventDefault();
    console.log("sunmited the form");
}


/// theme add : 
1. use daisy ui: 
=> select a theme and copy thr code
    => inner code inputh valuse name will submited into the index.css theme name



/// contest api : 

1. export const Cartcontest = createContext({}) /* here create contest got fromthe react only */

2.
    < Cartcontest.provider value = {{ list, setList }}> {/* network creation and sere every components */ }

3. {/* recive the context dara from any components */ }

const contextvalue = use(Cartcontest)
console.log(contextvalue);


important:  : .......... onClick={() => setList((prev) => [...prev, location?.state] 



///   bg image add here #bgimage #imagebg #bgimage

 'style={{ backgroundImage: `url(${Img})` }}>


 

 /// prevetnt fedult #form remove #form refresh remove #form prevent 


 e.preventDefault(); /*  এটি form refresh হওয়া বন্ধ করবে */









