import Image from "next/image";

import styles from "../styles/initial_landing_page.module.css";

import ServiceLandingPage from "../component/service_landing_page";
import TestimonialSlider from "../component/TestimonialSlider";
import AnnouncementTag from "../component/announcement_tag";
import InitialNavbar from "../component/initial_navbar";

const serviceLandingPages = [
  {
    width: 50,
    height: 50,
    index: 1,
    title: "Find available printer",
    description:
      "Offers convenience by allowing you to print from anywhere on campus",
  },
  {
    width: 50,
    height: 50,
    index: 2,
    title: "Find available printer",
    description:
      "Offers convenience by allowing you to print from anywhere on campus",
  },
  {
    width: 70,
    height: 70,
    index: 3,
    title: "Find available printer",
    description:
      "Offers convenience by allowing you to print from anywhere on campus",
  },
  {
    width: 50,
    height: 60,
    index: 4,
    title: "Find available printer",
    description:
      "Offers convenience by allowing you to print from anywhere on campus",
  },
  {
    width: 90,
    height: 70,
    index: 5,
    title: "Find available printer",
    description:
      "Offers convenience by allowing you to print from anywhere on campus",
  },
  {
    width: 50,
    height: 60,
    index: 6,
    title: "Find available printer",
    description:
      "Offers convenience by allowing you to print from anywhere on campus",
  },
];


export default function Home() {
  return (
    <div>
       <InitialNavbar />
      <div className={styles.container}>
        <div className={styles.first_block}>
          <div className={styles.first_block_left}>
            <p>Smart printing service for you</p>
            <p>
              The Student Smart Printing Service (HCMUT-SSPS) is designed to
              meet the printing needs of students across the campuses of Ho Chi
              Minh City University of Technology (HCMUT).
            </p>
            <button>
              <p>Consult Today</p>
            </button>
          </div>
          <div className={styles.first_block_right}>
            <Image
              src="/initial_landing_page1.png"
              alt="printer"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className={styles.second_block}>
          <div className={styles.second_block_upper}>
            <p>Our services</p>
            <Image
              src="/underline_img.png"
              alt="underline"
              width={40}
              height={2}
            />
            <p>
              Discover seamless printing with the HCMUT Student Smart Printing
              Service! Conveniently upload files from web or mobile, customize
              print settings, and pick up your documents across campus. Secure,
              flexible, and easy to manage—with options to top up your printing
              quota via BKPay. Simplify your printing today with HCMUT-SSPS!
            </p>
          </div>
          <div className={styles.second_block_lower}>
            {serviceLandingPages.map((props) => (
              <ServiceLandingPage key={props.index} {...props} />
            ))}

            <div />
          </div>
        </div>

        <div className={styles.third_block}>
          <div className={styles.third_block_left}>
            <Image
              src="/initial_landing_page2.png"
              alt="printer"
              width={500}
              height={500}
            />
          </div>
          <div className={styles.third_block_right}>
            <p>Leading printing service providers</p>
            <Image
              src="/underline_img.png"
              alt="underline"
              width={40}
              height={2}
            />
            <p>
              HCMUT Smart Printing provides progressive, and affordable,
              accessible on mobile and online for everyone. To us, it’s not just
              work. We take pride in the solutions we deliver
            </p>
          </div>
        </div>

        <div className={styles.fourth_block}>
          <div className={styles.fourth_block_left}>
            <p>Leading printing service providers</p>
            <Image
              src="/underline_img.png"
              alt="underline"
              width={40}
              height={2}
            />
            <p>
              HCMUT Smart Printing provides progressive, and affordable,
              accessible on mobile and online for everyone. To us, it’s not just
              work. We take pride in the solutions we deliver
            </p>
          </div>
          <div className={styles.fourth_block_right}>
            <Image
              src="/initial_landing_page3.png"
              alt="printer"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div>
          <TestimonialSlider />
        </div>
        <div className={styles.fith_block}>
          <AnnouncementTag />
          <AnnouncementTag />
          <AnnouncementTag />
        </div>
      </div>
    </div>
   
  );
}
