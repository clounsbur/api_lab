// At a minimum, include a title, image and working link for each post. (Easiest is to use the
//     thumbnail for the image, but there are other images in the JSON response.)

fetch("https://www.reddit.com/r/aww/.json")
  .then(res => res.json())
  .then(data => {
    console.log("this is working");
    //loop through the posts using data (my variable name and data from json. children is the array name we want to loop through from json)
    let sectionEl = document.querySelector("#posts");
    // for (const post of data.data.children) {
    //data.data because data is my variable name and data is the name on the json
    for (let i = 0; i < 10; i++) {
      const post = data.data.children[i];
      let titleEl = document.createElement("h3");
      titleEl.innerText = post.data.title;
      let titleDiv = document.createElement("div"); //looping through children array adding inner text to h1 from variable post.data (from json). title(json)
      titleDiv.appendChild(titleEl);
      titleEl.classList.add("titles");
      titleDiv.classList.add("titleDiv");
      let imageEl = document.createElement("img");
      let imgDiv = document.createElement("div");
      imageEl.classList.add("images");
      imgDiv.classList.add("imgDiv");
      imageEl.setAttribute("src", post.data.thumbnail);
      imgDiv.appendChild(imageEl);
      let linkEl = document.createElement("a");
      let linkDiv = document.createElement("div");
      linkDiv.classList.add("linkDiv");
      linkEl.classList.add("links");
      linkEl.setAttribute(
        "href",
        `https://www.reddit.com${post.data.permalink}`
      );
      linkEl.innerText = "Reddit Post";
      linkDiv.appendChild(linkEl);
      let postDiv = document.createElement("div");
      postDiv.classList.add("postDiv");

      postDiv.appendChild(imgDiv);
      postDiv.appendChild(titleDiv);
      postDiv.appendChild(linkDiv);
      sectionEl.appendChild(postDiv);
    }
  });

//     fetch("https://grandcircusco.github.io/demo-apis/blog-posts.json")
//   .then(res => res.json())
//   .then(data => {
//     console.log(data.title);
//     let titleEl = document.querySelector("h1");
//     titleEl.innerText = data.title;

//     const articleContainerEl = document.getElementById("main");
//     for (const post of data.posts) {
//       console.log(post);
//       let sectionEl = document.createElement("section");

//       articleContainerEl.appendChild(sectionEl);

//       let titleEl = document.createElement("h3"); //create h3 element to hold title
//       titleEl.innerText = post.title; //add the title text which is pulled from the post array see json format post is array title is object
//       sectionEl.appendChild(titleEl); // add to the h3 element you named titleEl
