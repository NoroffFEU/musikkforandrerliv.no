import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './carousel';

// Temporary image imports
const imageImports = import.meta.glob(
  '../../../public/assets/placeholder-images/*.{png,jpg,jpeg,svg,webp}',
  { eager: true },
);
const images = Object.values(imageImports).map((mod) => mod.default);

console.log('imageArray: ', images);

const CarouselFeatured = () => {
  return (
    <div className="mt-10">
      <Carousel
        opts={{
          align: 'center',
          loop: true,
        }}
        className="max-w-[1280px] w-full relative"
      >
        <CarouselContent>
          {images.map((image, index) => {
            console.log('image: ', image);

            return (
              <CarouselItem key={index} className="basis-1/3 lg:basis-1/5">
                <div className="aspect-square flex flex-col justify-center items-center overflow-hidden relative">
                  <img className="w-full h-full object-cover" src={image}></img>
                  <span className="absolute text-red-600 top-0 font-extrabold">
                    {/* {index} */}
                  </span>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white" />
        <CarouselPrevious className="absolute -left-10 hidden md:flex text-(--color-sunset-red)" />
        <CarouselNext className="absolute -right-10 hidden md:flex text-(--color-sunset-red)" />
      </Carousel>
    </div>
  );
};

export default CarouselFeatured;
