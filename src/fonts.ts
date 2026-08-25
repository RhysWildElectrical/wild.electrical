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
// Bold (weight 700) is licensed — confirmed via a Superior Type Webfont EULA
// (2026, v1.0) and the file's own internal metadata, which no longer carries
// any "Trial" marking. Used for headings/display text.
//
// NOTE: the site's headings previously used the ExtraBold (800) and Black
// (900) cuts, but only the Bold weight has been licensed so far — those two
// trial files have been removed from the project rather than left in
// unlicensed. If ExtraBold/Black get licensed later, add them back here as
// additional `src` entries at weight 800/900.
export const restartHard = localFont({
  src: [{ path: "./fonts/RestartHard-Bold.woff2", weight: "700", style: "normal" }],
  variable: "--font-restart-hard",
  display: "swap",
});
