import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Photo_1 from "../assets/images/photo_1.jpg";
import Photo_2 from "../assets/images/photo_2.jpg";
import Photo_3 from "../assets/images/photo_3.jpg";

const images = [
  {
    src: Photo_1,
    alt: "Photo 1",
  },
  {
    src: Photo_2,
    alt: "Photo 2",
  },
  {
    src: Photo_3,
    alt: "Photo 3",
  },
];

export default function CarouselImage() {
  return (
    <Carousel className="w-full max-w-xs z-20">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Card className="bg-orange-400">
              <CardContent className="flex w-full h-full items-center justify-center aspect-square">
                <img
                  src={image.src.src}
                  alt={image.alt}
                  className="object-cover w-full h-full rounded-lg"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
