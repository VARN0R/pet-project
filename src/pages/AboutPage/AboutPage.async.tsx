import { lazy } from "react";

export const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-ignore
      setTimeout(() => {
        //@ts-ignore
        return resolve(import("./AboutPage"));
      }, 2000);
    })
);
