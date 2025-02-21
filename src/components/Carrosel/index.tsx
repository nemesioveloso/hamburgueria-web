import { useEffect, useRef, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Box, Typography, IconButton } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const items = [
  {
    label: "Promoção Especial",
    imgPath: "https://picsum.photos/2100/500?random=1",
  },
  {
    label: "Novidades em Eletrônicos",
    imgPath: "https://picsum.photos/2100/500?random=2",
  },
  {
    label: "Produtos com Frete Grátis",
    imgPath: "https://picsum.photos/2100/500?random=3",
  },
];

export function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const timerRef = useRef<number | undefined>(undefined);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const stopAutoPlay = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = undefined;
    }
    setIsAutoPlay(false);
  }, []);

  const scrollPrev = useCallback(() => {
    stopAutoPlay();
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi, stopAutoPlay]);

  const scrollNext = useCallback(() => {
    stopAutoPlay();
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi, stopAutoPlay]);

  useEffect(() => {
    if (!emblaApi || !isAutoPlay) return;
    timerRef.current = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 7000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [emblaApi, isAutoPlay]);

  useEffect((): void | (() => void) => {
    if (!emblaApi) return;
    emblaApi.on("pointerDown", stopAutoPlay);
    return (): void => {
      emblaApi.off("pointerDown", stopAutoPlay);
    };
  }, [emblaApi, stopAutoPlay]);
  

  return (
    <Box sx={{ maxWidth: "2100px", width: "100%", flexGrow: 1, position: "relative", mx: "auto", }}>
      <Box ref={emblaRef} sx={{ overflow: "hidden" }}>
        <Box sx={{ display: "flex" }}>
          {items.map((item) => (
            <Box key={item.label} sx={{ position: "relative", minWidth: "100%" }}>
              <Box
                component="img"
                sx={{
                  height: { xs: "250px", sm: "350px", md: "450px", lg: "500px" },
                  display: "block",
                  maxWidth: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
                src={item.imgPath}
                alt={item.label}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  padding: "8px 0px",
                  textAlign: "center",
                }}
              >
                <Typography variant="h6">{item.label}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <IconButton
        onClick={scrollPrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: 10,
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.8)" },
        }}
      >
        <KeyboardArrowLeft />
      </IconButton>

      <IconButton
        onClick={scrollNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: 10,
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.8)" },
        }}
      >
        <KeyboardArrowRight />
      </IconButton>
    </Box>
  );
}