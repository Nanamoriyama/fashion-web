// declarations.d.ts
declare module "react-slick" {
  import * as React from "react";

  export interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    arrows?: boolean;
    autoplay?: boolean;
    autoplaySpeed?: number;
    pauseOnHover?: boolean;
    vertical?: boolean;
    centerMode?: boolean;
    centerPadding?: string;
    fade?: boolean;
    cssEase?: string;
    adaptiveHeight?: boolean;
    variableWidth?: boolean;
    responsive?: Array<{ breakpoint: number; settings: Settings }>;
    beforeChange?: (currentSlide: number, nextSlide: number) => void;
    afterChange?: (currentSlide: number) => void;
    slickGoTo?: number;
    swipe?: boolean;
    draggable?: boolean;
    touchMove?: boolean;
    touchThreshold?: number;
    accessibility?: boolean;
    lazyLoad?: "ondemand" | "progressive";
    easing?: string;
    edgeFriction?: number;
    focusOnSelect?: boolean;
    rtl?: boolean;
    swipeToSlide?: boolean;
    waitForAnimate?: boolean;
    initialSlide?: number;
    slidesPerRow?: number;
    rows?: number;
    slide?: string;
    swipeEvent?: (swipeDirection: "left" | "right" | "up" | "down") => void;
    touchEvent?: (swipeDirection: "left" | "right" | "up" | "down") => void;
    customPaging?: (index: number) => React.ReactNode;
    appendDots?: (dots: React.ReactNode) => React.ReactNode;
    customPaging?: (index: number) => React.ReactNode;
    className?: string;
    appendArrows?: (arrows: React.ReactNode) => React.ReactNode;
  }

  export default class Slider extends React.Component<Settings, any> {}
}
