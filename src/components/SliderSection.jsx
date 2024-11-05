import slide1 from '/public/images/1.webp';
import slide2 from '/public/images/2.jpg';
import slide3 from '/public/images/3.jpg';
import slide4 from '/public/images/4.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { MdOutlineVisibility } from 'react-icons/md';
import { BiSupport } from 'react-icons/bi';
import { MdAdd } from 'react-icons/md';

const SliderSection = () => {
  const sliderData = [
    {
      id: 1,
      title: 'پروژه طراحی سایت',
      img: slide1,
      links: [<MdAdd />],
    },
    {
      id: 2,
      title: 'پروژه فروشگاهی',
      img: slide2,
      links: [<MdOutlineVisibility />, <BiSupport />, <MdAdd />],
    },
    {
      id: 3,
      title: 'طراحی و دیزاین کامل',
      img: slide3,
      links: [<MdOutlineVisibility />, <BiSupport />],
    },
    {
      id: 4,
      title: 'پروژه ساختمانی',
      img: slide4,
      links: [],
    },
  ];

  return (
    <div className="relative flex h-full flex-col items-center justify-center pb-10">
      <Swiper
        navigation={{
          prevEl: '.custom-prev',
          nextEl: '.custom-next',
        }}
        grabCursor
        centeredSlides
        slidesPerView={1}
        spaceBetween={2}
        speed={500}
        pagination
        loop
        modules={[Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
        }}
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex flex-col items-center justify-center gap-y-1">
              <p className="mr-12 text-lg font-medium">{slide.title}</p>
              <img src={slide.img} alt={slide.title} />
            </div>
            <div className="links sm:top-88 hidden w-full items-center justify-center gap-x-4 sm:absolute sm:right-96 sm:flex">
              {slide.links.map((link, index) => (
                <a key={index} href={link} className="rounded bg-blue-950 p-2 text-white">
                  {link}
                </a>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center justify-center gap-x-6">
        <div className="custom-prev grid h-12 w-12 cursor-pointer place-items-center rounded-full bg-gray-200 hover:bg-gray-300">
          <img src="/images/arrow-left.svg" className="h-6 w-6" alt="left-icon" />
        </div>
        <div className="custom-next grid h-12 w-12 cursor-pointer place-items-center rounded-full bg-gray-200 hover:bg-gray-300">
          <img src="/images/arrow-right.svg" className="h-6 w-6" alt="right-icon" />
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
