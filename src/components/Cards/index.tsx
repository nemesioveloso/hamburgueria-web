import {
    Button,
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
  } from '@mui/material'
  
  export const Cards = () => {
    const imgAdv = "https://picsum.photos/2100/500?random=8"
    const services = [
      {
        id: 1,
        title: 'Direito Médico e Hospitalar',
        description:
          'Consultoria jurídica especializada para médicos, hospitais e clínicas sobre responsabilidades legais e gestão de riscos.',
        image: imgAdv,
      },
      {
        id: 2,
        title: 'Erro Médico e Responsabilidade Civil',
        description:
          'Defesa e representação legal em casos de erro médico e práticas inadequadas, assegurando a proteção dos direitos de profissionais e pacientes.',
        image: imgAdv,
      },
      {
        id: 3,
        title: 'Ética e Bioética Médica',
        description:
          'Orientação em questões éticas, bioéticas e de confidencialidade no atendimento médico, incluindo consentimento informado e direitos do paciente.',
        image: imgAdv,
      },
      {
        id: 4,
        title: 'Direito à Saúde e Planos de Saúde',
        description:
          'Assessoria jurídica em disputas com planos de saúde e na defesa do direito à saúde para garantir o melhor atendimento aos pacientes.',
        image: imgAdv,
      },
    ]
  
    return (
      <Grid
        container
        justifyContent="space-around"
        spacing={2}
        sx={{ padding: 2 }}
        alignItems="stretch"
      >
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={3} lg={3} key={service.id} sx={{ display: 'flex' }}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={service.image}
                alt={service.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  color="text.secondary"
                >
                  {service.title}
                </Typography>
                <Typography
                  sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                  variant="body2"
                  color="text.secondary"
                >
                  {service.description}
                </Typography>
                <Button size="small">Siba mais</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    )
  }
  