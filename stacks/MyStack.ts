import { NextjsSite, StackContext, Api } from "sst/constructs";

export function API({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    routes: {
      "GET /": "packages/functions/src/lambda.handler",
    },
  });

  // Create the Next.js site
  const site = new NextjsSite(stack, "Site", {
    path: "my-app/",
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
    URL: site.url || "localhost",
  });
}
