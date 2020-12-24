const fetch = require("node-fetch");

export async function get(req, res, next) {
  const { slug } = req.params;

  const { TAKESHAPE_API_KEY, TAKESHAPE_PROJECT } = process.env;
  const data = await fetch(
    `https://api.takeshape.io/project/${TAKESHAPE_PROJECT}/v3/graphql`,
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TAKESHAPE_API_KEY}`,
      },
      body: JSON.stringify({
        query: `
          query PostBySlug($slug: String) {
            post: getPostList(where: {slug: {eq: $slug}}) {
            items {
              _id
              title
              deck
              bodyHtml
            }
            }
          }`,
        variables: {
          slug: slug,
        },
      }),
    }
  );

  const response = await data.json();
  const post = JSON.stringify(response.data.post.items[0]);

  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(post);
}
