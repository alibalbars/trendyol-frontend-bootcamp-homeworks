import axios from "axios";

export async function getPosts() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const result = await axios.get(url);
    return result.data;
}

async function getUserIds() {
    const posts = await getPosts();
    const userIds = posts.map((post) => post.userId);
    return userIds;
}

function findMostFrequentNumber(userIds) {
    var arr1 = userIds;
    var mf = 1; // most frequent
    var m = 0; // current number frequency counter
    var item;
    for (var i = 0; i < arr1.length; i++) {
        for (var j = i; j < arr1.length; j++) {
            if (arr1[i] == arr1[j]) m++;
            if (mf < m) {
                mf = m;
                item = arr1[i];
            }
        }
        m = 0;
    }
    return item;
}

export async function getPostTitlesOfMostPoster() {
    // get posts
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const result = await axios.get(url);
    const posts =  result.data;

    // get most poster userId
    const userIds = await getUserIds();
    const mostFrequentId = findMostFrequentNumber(userIds);

    // get all posts of most poster user
    const userPosts = posts.filter((post) => post.userId === mostFrequentId);

    // get all post titles of most poster user
    const userPostTitles = userPosts.map((post) => post.title);

    return userPostTitles;
}