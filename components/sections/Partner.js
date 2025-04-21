// "use client";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "./partner.css";

// const swiperOptions = {
//   modules: [Autoplay, Pagination, Navigation],
//   slidesPerView: 3,
//   spaceBetween: 60,
//   autoplay: {
//     delay: 500,
//     disableOnInteraction: false,
//   },
//   loop: true,

//   // Navigation
//   navigation: {
//     nextEl: ".h1n",
//     prevEl: ".h1p",
//   },

//   // Pagination
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },

//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//     },
//     575: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     767: {
//       slidesPerView: 4,
//       spaceBetween: 20,
//     },
//     991: {
//       slidesPerView: 4,
//       spaceBetween: 20,
//     },
//     1199: {
//       slidesPerView: 4,
//       spaceBetween: 20,
//     },
//     1350: {
//       slidesPerView: 3,
//       spaceBetween: 20,
//     },
//   },
// };

// export default function Partner() {
//   return (
//     <>
//       <div className="tf-widget-partner background- py-5">
//         <div className="container">
//           <div className="tf-partner">
//             <Swiper {...swiperOptions} className="sologan-logo ">
//             <SwiperSlide>
//                 <img
//                   className="image-logo"
//                   src="assets/partners/Paro_FC_logo_final_JPG-min.png"
//                   alt="image logo"
//                 />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img
//                   className="image-logo "
//                   src="assets/partners/avya.webp"
//                   alt="image logo"
//                 />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img
//                   className="image-logo "
//                   src="assets/partners/gems-logo.png"
//                   alt="image logo"
//                 />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img
//                   className="image-logo"
//                   src="assets/partners/HAMS.png"
//                   alt="image logo"
//                 />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img
//                   className="image-logo"
//                   src="assets/partners/NOC.png"
//                   alt="image logo"
//                 />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img
//                   className="image-logo"
//                   src="assets/partners/Paro_FC_logo_final_JPG-min.png"
//                   alt="image logo"
//                 />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img
//                   className="image-logo "
//                   src="assets/partners/avya.webp"
//                   alt="image logo"
//                 />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img
//                   className="image-logo "
//                   src="assets/partners/gems-logo.png"
//                   alt="image logo"
//                 />
//               </SwiperSlide>

//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./partner.css";

const swiperOptions = {
  modules: [Autoplay],
  slidesPerView: 5,
  spaceBetween: 40,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  loop: true,
  breakpoints: {
    0: {
      // Mobile
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      // Small tablets
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      // Desktop
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
};

const partners = [
  {
    id: 1,
    logo: "assets/partners/Paro_FC_logo_final_JPG-min.png",
    alt: "Paro FC",
  },
  { id: 2, logo: "assets/partners/avya.webp", alt: "Avya" },
  { id: 3, logo: "assets/partners/gems-logo.png", alt: "GEMS" },
  { id: 4, logo: "assets/partners/HAMS.png", alt: "HAMS" },
  { id: 5, logo: "assets/partners/NOC.png", alt: "NOC" },
  {
    id: 6,
    logo: "assets/partners/Paro_FC_logo_final_JPG-min.png",
    alt: "Paro FC",
  },
  { id: 7, logo: "assets/partners/avya.webp", alt: "Avya" },
  { id: 8, logo: "assets/partners/gems-logo.png", alt: "GEMS" },
];

export default function PartnerSlider() {
  return (
    <div className="container py-5">
      <h2 className="title-section wow fadeInUp animated text-center text-uppercase">
        Our Partners & Sponsors
      </h2>

      <Swiper {...swiperOptions} className="partner-slider">
        {partners.map((partner) => (
          <SwiperSlide key={partner.id}>
            <div className="partner-logo-wrapper">
              <img
                src={partner.logo}
                alt={partner.alt}
                className="partner-logo"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
