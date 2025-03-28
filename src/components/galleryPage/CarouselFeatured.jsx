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
    <div>
      <Carousel
        opts={{
          align: 'center',
          loop: true,
        }}
        className="max-w-[50rem] w-full relative"
      >
        <CarouselContent className="w-[80%]">
          {images.map((image, index) => {
            return (
              <CarouselItem key={index} className="basis-1/5">
                <div className="aspect-square flex justify-center items-center border ">
                  {index}
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2" />
        <CarouselNext className="absolute right-2" />
      </Carousel>
    </div>
  );
};

export default CarouselFeatured;
