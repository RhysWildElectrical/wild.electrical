import localFont from "next/font/local";

// Barlow — SIL Open Font License (free, open, licensed for commercial web use).
// Used for body copy, nav, UI text.
export const barlow = localFont({
  src: [
    { path: "./fonts/Barlow-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Barlow-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Barlow-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/Barlow-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-barlow",
  display: "swap",
});

// Restart Hard — Superior Type s.r.o. (superiortype.com).
// NOTE: the files bundled here are TRIAL versions (confirmed via internal font
// metadata). A commercial licence must be purchased from Superior Type before
// this site goes live on the production domain. Used for headings/display text.
export const restartHard = localFont({
  src: [
    { path: "./fonts/RestartHard-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "./fonts/RestartHard-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-restart-hard",
  display: "swap",
});
