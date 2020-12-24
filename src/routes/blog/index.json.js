const fetch = require("node-fetch");

export async function get(req, res) {
  const { TAKESHAPE_API_KEY, TAKESHAPE_PROJECT } = process.env;

  const data = await fetch(
    `https://api.takeshape.io/project/${TAKESHAPE_PROJECT}/v3/graphql`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TAKESHAPE_API_KEY}`,
      },
      body: JSON.stringify({
        query: `
  					  query AllPosts {
  						  allPosts: getPostList {
  							  items {
  							  _id
  							  title
  							  slug
  							  }
  						  }
  					  }
    `,
      }),
    }
  );
  const response = await data.json();
  const posts = await JSON.stringify(response.data.allPosts.items);

  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(posts);
}
