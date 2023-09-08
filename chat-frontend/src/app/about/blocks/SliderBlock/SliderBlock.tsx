import { useRef } from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import cn from 'classnames';
import SliderItem from './components/SliderItem/SliderItem';

import 'swiper/css/pagination';
import styles from './SliderBlock.module.scss';

const SliderBlock = () => {
  const paginationRef = useRef(null);

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>
        Join and contribute as any of the following actors:
      </h4>

      <div className={styles.slider}>
        <Swiper
          slidesPerView={1}
          spaceBetween={5}
          pagination={{
            clickable: true,
            el: '.slider-pagination',
            bulletClass: styles.paginationBullet,
            bulletActiveClass: styles.active,
          }}
          breakpoints={{
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
              centeredSlides: true,
            },
          }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <SliderItem
              title='Individual Coder'
              description='Join as an individual coder to write parts of the code and specific modules in Python.'
              value='Individual coder'
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderItem
              title='Coding Company'
              description='Join as a coding company to write parts of the code and specific modules in Python.'
              value='Coding company'
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderItem
              title='University'
              description='Join as a university to contribute towards the code within.'
              value='University'
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderItem
              title='Scientist'
              description='Join as a scientist to work on specific modules. As this technology captures all aspects of life, all scientists are invited within their specialist field.'
              value='Scientist'
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderItem
              title='Sponsor'
              description='Financially sponsor an individual part or module and use the historic recognition of this important act.'
              value='Sponsor'
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderItem
              title='Influencer'
              description='Help spread awareness of this major scientific project and help grow the global movement. Social influencers, media, blog owners can all help.'
              value='Influencer'
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderItem
              title='Volunteer'
              description='Help organize, promote, and administer this global non-profit effort and bring in any skill you have to the table.'
              value='Volunteer'
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderItem
              title='Data Provider'
              description='Join as a data provider. The more quality data we can feed to the A.G.A., the more it will be able to achieve.'
              value='Data provider'
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderItem
              title='Donor / Investor'
              description='Join as an altruistic donor and learn about the ROI possibilities of such karmic activities.'
              value='Donor / Investor'
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div
        ref={paginationRef}
        className={cn('slider-pagination', styles.pagination)}
      ></div>
    </div>
  );
};

export default SliderBlock;
