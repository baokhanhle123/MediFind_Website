/**
 * App screenshot constants for the MediFind Website
 */

/**
 * Screenshots shown in the app showcase section, in display order.
 *
 * Dimensions are the intrinsic size of each file in `public/screens/` and must
 * stay in step with it — `next/image` needs them to reserve layout space.
 *
 * `reminder.png` is deliberately absent: it carries the hero.
 *
 * The scan-a-prescription screen is not here and must not be added from the
 * source decks. The only captures of it show a real patient prescription —
 * insurance number, diagnosis codes and a doctor's signature. It can only be
 * included if the screen is re-shot against synthetic data.
 */
export const APP_SCREENS = [
  { key: "drug_details", src: "/screens/drug-details.png", width: 300, height: 650 },
  { key: "home", src: "/screens/home.png", width: 282, height: 611 },
  { key: "lookup", src: "/screens/lookup.png", width: 283, height: 612 },
  { key: "chat", src: "/screens/chat.png", width: 300, height: 650 },
  { key: "pharmacy", src: "/screens/pharmacy.png", width: 283, height: 613 },
] as const;

export type AppScreenKey = (typeof APP_SCREENS)[number]["key"];
