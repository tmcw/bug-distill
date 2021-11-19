import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "blitz",
  rootDir: "./",
  testPathIgnorePatterns: ["./ignore/**"],
};

export default config;
