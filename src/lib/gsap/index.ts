import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

// register gsap
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export { gsap, useGSAP, ScrollTrigger };
