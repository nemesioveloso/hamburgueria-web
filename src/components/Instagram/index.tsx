export const InstagramIcon = () => (
    <svg width="48" height="48" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <defs>
            {/* Definição do gradiente para o fundo do Instagram */}
            <linearGradient id="gradInstagram" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F58529" />
                <stop offset="50%" stopColor="#DD2A7B" />
                <stop offset="100%" stopColor="#8134AF" />
            </linearGradient>
        </defs>
        {/* Círculo de fundo com gradiente */}
        <circle cx="256" cy="256" r="256" fill="url(#gradInstagram)" />
        {/* Ícone da câmera branco (simplificado) */}
        <path
            fill="#FFF"
            d="M256,170a86,86,0,1,0,86,86A86,86,0,0,0,256,170ZM384,248a14,14,0,1,1-14-14A14,14,0,0,1,384,248ZM256,342a86,86,0,1,1,86-86A86,86,0,0,1,256,342Z"
        />
    </svg>
);