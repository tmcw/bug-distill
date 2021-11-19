import { resolver } from "blitz";

const getFoo = resolver.pipe(async (_input, ctx) => {
  return { foo: "bar" };
});

export default getFoo;
