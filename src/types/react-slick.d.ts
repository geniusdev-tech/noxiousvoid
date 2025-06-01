declare module 'react-slick' {
  import { ComponentType, ForwardRefExoticComponent, RefAttributes } from 'react';

  export interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    pauseOnHover?: boolean;
    arrows?: boolean;
    dotsClass?: string;
    appendDots?: (dots: React.ReactNode) => JSX.Element;
    customPaging?: (index: number) => JSX.Element;
    responsive?: Array<{
      breakpoint: number;
      settings: Partial<Settings>;
    }>;
    [key: string]: any; // Para props adicionais
  }

  const Slider: ComponentType<Settings> & ForwardRefExoticComponent<Settings & RefAttributes<any>>;
  export default Slider;
}