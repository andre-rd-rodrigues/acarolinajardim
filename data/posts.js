const posts = [
  {
    title: "Hello World",
    description: "This is my first post",
    href: "https://www.instagram.com/p/CsLl-Qsq0CB/",
    img_src: "./images/posts/1.png"
  },
  {
    title: "Hello World",
    description: "This is my first post",
    href: "https://www.instagram.com/p/CsLl-Qsq0CB/",
    img_src: "./images/posts/1.png"
  },
  {
    title: "Hello World",
    description: "This is my first post",
    href: "https://www.instagram.com/p/CsLl-Qsq0CB/",
    img_src: "./images/posts/1.png"
  }
];

// Generate HTML elements based on the posts array
const generateProductElements = (posts) => {
  let elements = "";

  posts.forEach((post) => {
    elements += `
      <div class="product">
        <a href="${post.href}" class="d-block">
          <img src="${post.img_src}" alt="Image" class="img-fluid" />
        </a>
        <div class="text-center text-md-left">
          <h3>${post.title}</h3>
          <p>${post.description}</p>
        </div>
      </div>
    `;
  });

  return elements;
};

// Call the function and assign the generated elements to a variable
const productElements = generateProductElements(posts);

// Print the generated HTML elements
console.log(productElements);
