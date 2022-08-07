// // instargram profile & post objects

const username ="shellahgwenzi";

const profile = {
username: "shellahgwenzi",
 posts: 55,
followers: 213,
 following: 124,
picture:"link",
fullName: "Shellah Gwenzi",
bio: "some information",
link: "zaio.io",
info() {
    const { username, posts, followers, following, bio, link}  = this;
    return `
    Info for: ${username}
    posts: ${posts}
    followers: ${followers}
    following: ${following}
    bio: ${bio}
    link: ${link}
`;

}
}
console.log(profile.info());


// get data:
// console.log(profile.username,profile['posts']);

// modify
// profile.posts = profile.post + 1;
// console.log(profile);

// creat a new key
// profile.email = "sgwenzi13@gmail.com";
// profile.phoneNumber = "0810461203";


// delete profile.phoneNumber;
// console.log(profile);


//how you delete data


const post = {
    likes: 20,
    username: "shellahgwenzi",
    timeStamp:"17:45",
    comments: 25,
}
// do some object destructuring on posts object
const {  likes, timeStamp,comments } = post;

console.log(
    `${username} just posted a photo with ${likes} likes
    it was posted at ${timeStamp}, and currently has ${comments} comments.
    `);

// primitive vs object types
// primitive
// undefined,null,boolean,number,string,symbol

// objects allow us to manage structures of primitives.

// console.log ("shellah" === "shellah");

// const name = "shellah";
// const obj ={}
// const obj2 = obj;
// obj2.name = name;

// console.log(obj)
// console.log(obj2)
