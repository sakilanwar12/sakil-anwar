import { Metadata } from "next";

export type TGetSeoMetaArgs = Metadata | void;
export const getSeoMeta = (props: TGetSeoMetaArgs): Metadata => {
  const {
    title = "Portfolio - Sakil Anwar",
    applicationName = "Portfolio - Sakil Anwar",
    description,
    // manifest = "/assets/fav-icon/site.webmanifest",
    icons = {
      icon: "/assets/fav-icon/favicon-32x32.png",
      apple: "/assets/fav-icon/apple-touch-icon.png",
    },
    ...restProps
  } = props || {};
  return {
    title,
    applicationName,
    description,
    // manifest,
    icons,
    ...restProps,
  };
};
