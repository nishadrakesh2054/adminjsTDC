


"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './all.css';

const sliderData = [
  {
    id: 1,
    image: "assets/academy/futsal.jpg",
    preTitle: "Welcome to",
    title: "HOME OF THE THUNDERBOLTS",
    description: "Where Champions Are Made",
    ctaText: "Join Us Now",
    ctaLink: "/register"
  },
  {
    id: 2,
    image: "assets/academy/football.jpg",
    title: "Run with Passion and Purpose",
    description: "The platform that turns aspirations into accomplishments. Join now and unleash your potential in the world of fitness and wellness.",
    ctaText: "Register Today",
    ctaLink: "/register"
  },
  {
    id: 3,
    image: "assets/contact/contactHead.jpg",
    title: "Find Your Pace, Find Your Tribe",
    description: "Connect with like-minded athletes and take your performance to the next level with our expert coaching and community support.",
    ctaText: "Become a Member",
    ctaLink: "/register"
  }
];

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  },
  pagination: {
    el: ".hero-pagination",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 3
  },
  navigation: {
    nextEl: ".hero-next",
    prevEl: ".hero-prev"
  },
  loop: true,
  speed: 1000
};

export default function HeroSlider() {
  return (
    <section className="hero-slider-wrapper">
      <Swiper {...swiperOptions} className="hero-slider">
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id} className="hero-slide">
            <div className="slide-background">
              <img 
                src={slide.image} 
                alt="" 
                className="slide-image" 
                loading="eager"
              />
              <div className="slide-overlay"></div>
            </div>
            
            <div className="slide-content">
              <div className="container">
                {slide.preTitle && (
                  <span className="slide-pretitle">{slide.preTitle}</span>
                )}
                <h1 className="slide-title">{slide.title}</h1>
                <p className="slide-description">{slide.description}</p>
                <div className="slide-actions">
                  <Link href={slide.ctaLink} className="cta-button">
                    {slide.ctaText}
                    <span className="button-icon">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation elements */}
      <div className="hero-navigation">
        <button className="hero-prev" aria-label="Previous slide">
          <svg viewBox="0 0 24 24">
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
          </svg>
        </button>
        <div className="hero-pagination"></div>
        <button className="hero-next" aria-label="Next slide">
          <svg viewBox="0 0 24 24">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
          </svg>
        </button>
      </div>
    </section>
  );
}