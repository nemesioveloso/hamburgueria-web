import { Box } from "@mui/material";

export function Banner() {
    return (
        <Box
            component="a"
            href="https://www.example.com"
            target="_blank"
            sx={{
                width: "100%",
                height: { xs: "250px", sm: "350px", md: "450px", lg: "500px" },
                display: "block",
                backgroundImage: "url('https://picsum.photos/1920/600?random=7')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                textDecoration: "none",
            }}
        ></Box>
    );
}
