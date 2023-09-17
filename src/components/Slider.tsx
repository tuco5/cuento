import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Slider({}) {
  return (
    <Swiper
      pagination={{ type: 'progressbar' }}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="h-full "
    >
      <SwiperSlide>
        <Slide0 />
      </SwiperSlide>
      <SwiperSlide>
        <Slide1 />
      </SwiperSlide>
      <SwiperSlide>
        <Slide2 />
      </SwiperSlide>
      <SwiperSlide>
        <Slide3 />
      </SwiperSlide>
    </Swiper>
  );
}

function Slide0() {
  return (
    <div className="relative h-full">
      <Image src="/images/intro.jpg" alt="slide zero" fill className="object-cover object-center" />;
    </div>
  );
}
function Slide1() {
  return (
    <div className="relative h-full">
      <p className="absolute z-10 right-10 w-1/3 top-10 text-2xl">
        Un joven discípulo solicitó al Maestro Iluminado el asistir en silencio a las entrevistas que éste concedía a aquellas personas que iban en busca de su consejo y sabiduría.
      </p>
      <Image src="/images/slide_1.jpg" alt="slide one" fill className="object-cover object-center" />;
    </div>
  );
}
function Slide2() {
  return (
    <div className="relative h-full">
      <p className="absolute z-10 right-4 top-10 text-2xl">La primera visita fue la de un hombre que preguntó:</p>
      <p className="absolute z-10 right-20 top-36 text-2xl">Maestro, ¿Dios existe?</p>
      <p className="absolute z-10 right-72 top-72 text-2xl">Sí -fue la lacónica respuesta.</p>
      <Image src="/images/slide_2.jpg" alt="slide one" fill className="object-cover object-center" />;
    </div>
  );
}
function Slide3() {
  return (
    <div className="relative h-full">
      <p className="absolute z-10 right-4 top-10 text-2xl">En la segunda visita una mujer también preguntó:</p>
      <p className="absolute z-10 right-20 top-36 text-2xl">-Señor, ¿Dios existe?</p>
      <p className="absolute z-10 right-72 w-80 top-72 text-2xl">-No -fue en esta oportunidad la contestación.</p>
      <Image src="/images/slide_3.jpg" alt="slide one" fill className="object-cover object-center" />;
    </div>
  );
}
