require("dotenv").config();

import sirv from "sirv";
import polka from "polka";
import compression from "compression";
import * as sapper from "@sapper/server";

const { PORT, NODE_ENV, TAKESHAPE_API_KEY, TAKESHAPE_PROJECT } = process.env;

const dev = NODE_ENV === "development";

polka() // You can also use Express
  .use(
    compression({ threshold: 0 }),
    sirv("static", { dev }),
    sapper.middleware({
      session: () => ({
        TAKESHAPE_API_KEY,
        TAKESHAPE_PROJECT,
      }),
    })
  )
  .listen(PORT, (err) => {
    if (err) console.log("error", err);
  });
