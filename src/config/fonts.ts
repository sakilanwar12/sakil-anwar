import { Anton, Inter, Roboto_Flex } from "next/font/google";

export const fontRobotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// export const fontInter = Inter({
//   variable: "--font-inter",
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// })

export const fontAnton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: [ "400"],
});