/**
 * Contact details for the MediFind Website
 *
 * Single source of truth: the address is rendered in the footer, used as the
 * href for the demo CTA, and cited on the legal page. It was previously
 * hardcoded in three separate JSX blocks.
 *
 * No phone number is published here on purpose. The site is a publicly indexed
 * route, so a personal number would be permanently crawlable; enquiries come in
 * by email and the number is shared directly instead.
 */

/** Note the spelling: "healthtect", not "healthtech". Confirmed, do not correct. */
export const CONTACT_EMAIL = "healthtect.solution@gmail.com";

export const CONTACT_EMAIL_HREF = `mailto:${CONTACT_EMAIL}`;

/**
 * Subject line pre-filled on the demo request CTA, so enquiries arrive already
 * distinguishable from general mail.
 */
export const DEMO_REQUEST_HREF = `${CONTACT_EMAIL_HREF}?subject=${encodeURIComponent(
  "MediFind — demo request"
)}`;

/** Year the project started; used to render the copyright range. */
export const FOUNDED_YEAR = 2024;

/**
 * Peer-reviewed publication behind the product.
 *
 * Metadata verified against Crossref (DOI 10.1109/acompa61072.2023.00016) rather
 * than transcribed — the site previously described the venue two different ways
 * and claimed a "17th" edition that the official proceedings title does not
 * carry.
 */
export const PAPER = {
  url: "https://ieeexplore.ieee.org/document/10473654/",
  doi: "10.1109/acompa61072.2023.00016",
  title: "MediFind - A Medicine Detection Framework for Vietnamese Medical Prescription",
  venue: "2023 International Conference on Advanced Computing and Analytics (ACOMPA)",
  publisher: "IEEE",
  date: "2023-11-22",
  location: "Da Nang City, Vietnam",
  authors: [
    "Khanh Le Bao",
    "Toai Tran Hoang Cong",
    "Thu Nguyen Hoang Anh",
    "Minh Vo Duc",
    "Thanh Hoang Le Hai",
    "Nam Thoai",
  ],
} as const;
