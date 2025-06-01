import { useState, useEffect } from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper, // Keep Paper if used, otherwise remove
  Divider,
  List,
  ListItem,
  ListItemButton,
  // ListItemIcon, // Removed unused import
  ListItemText,
  IconButton,
  useMediaQuery,
  Drawer,
  // Avatar, // Removed unused import
  // Link, // Removed unused import
  // TextField, // Removed unused import
  Fab,
  Stack,
  // SxProps, // Removed unused import
  // Theme // Removed unused import
} from '@mui/material';
import {
  Menu as MenuIcon,
  Instagram as InstagramIcon,
  WhatsApp as WhatsAppIcon,
  ArrowUpward as ArrowUpwardIcon,
  MailOutline as MailOutlineIcon,
  LocationOn as LocationOnIcon, // Keep LocationOnIcon if used, otherwise remove
  Style as StyleIcon, 
  Collections as CollectionsIcon, 
  PersonOutline as PersonOutlineIcon, 
  HomeOutlined as HomeOutlinedIcon,
  Close as CloseIcon
} from '@mui/icons-material';
import Slider from "react-slick";
import ReactDisqusComments from 'react-disqus-comments'; // Import Disqus component
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// Assuming themeOptions is the correct export now
import { themeOptions } from './themeMinimalist'; 
import './App.css';

// Interface for Menu Item
interface MenuItem {
  text: string;
  href: string;
  icon: JSX.Element;
  id: string;
}

// Criar tema minimalista using themeOptions
const minimalistTheme = createTheme(themeOptions);

const artistInfo = {
  name: "NOXIOUSVOID",
  subtitle: "BODY ART",
  instagram: "@noxiousvoid",
  title: "Body Piercer Profissional",
  bio: "Com uma paixão pela arte da modificação corporal e um compromisso com a segurança e a precisão, Noxiousvoid oferece uma experiência de body piercing profissional e personalizada. Especializado em uma variedade de piercings e utilizando apenas materiais de alta qualidade, o estúdio é o seu destino em São Paulo para uma arte corporal excepcional em um ambiente acolhedor e estéril.",
  profileImage: "/assets/gothic_piercing_inspiration_1.svg+xml"
};

const galleryImages = [
  { img: '/assets/gothic_piercing_inspiration_2.svg+xml', title: 'Piercing Septo', description: 'Joia em titânio com design minimalista.' },
  { img: '/assets/gothic_piercing_inspiration_1.svg+xml', title: 'Daith', description: 'Argola em ouro branco com detalhes sutis.' },
  { img: '/assets/gothic_piercing_inspiration_2.svg+xml', title: 'Conch', description: 'Cluster com pedras de zircônia.' },
  { img: '/assets/gothic_piercing_inspiration_1.svg+xml', title: 'Helix Duplo', description: 'Combinação de argolas e studs em titânio.' },
  { img: '/assets/gothic_piercing_inspiration_2.svg+xml', title: 'Umbigo', description: 'Jóia com pedra central e acabamento polido.' },
  { img: '/assets/gothic_piercing_inspiration_1.svg+xml', title: 'Nostril', description: 'Ponto de luz em titânio.' },
];

const servicesData = [
  { name: 'Perfuração Básica', price: 'R$ 90 - R$ 150', description: 'Lóbulo, Hélix, Tragus, Nariz - Perfurações clássicas com jóia de titânio grau de implante.' },
  { name: 'Perfuração Avançada', price: 'R$ 140 - R$ 250', description: 'Septo, Umbigo, Mamilo, Industrial - Perfurações que exigem maior técnica, com jóia de titânio.' },
  { name: 'Microdermal & Surface', price: 'A partir de R$ 200', description: 'Implantes de titânio com topos variados.' },
  { name: 'Projetos Auriculares', price: 'Sob consulta', description: 'Criação de composições personalizadas para a orelha (Curated Ear).' },
  { name: 'Atualização de Joias', price: 'Valor da joia + taxa', description: 'Ampla seleção de joias de alta qualidade em titânio e ouro.' },
  { name: 'Consultoria', price: 'Cortesia para clientes', description: 'Orientação sobre cuidados e acompanhamento da cicatrização.' },
];

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery(minimalistTheme.breakpoints.down('md'));
  const [showScroll, setShowScroll] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300){
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 300){
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Detectar seção ativa ao rolar
  useEffect(() => {
    const handleScroll = () => {
      checkScrollTop();
      
      const sections = ['home', 'sobre', 'galeria', 'servicos', 'contato'];
      let currentSection = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold for better detection
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section;
            break;
          }
        }
      }
      // Fallback if no section is detected in the middle
      if (currentSection === 'home') {
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) { // Original threshold as fallback
              currentSection = section;
              break;
            }
          }
        }
      }
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showScroll]);

  const menuItems: MenuItem[] = [
    { text: 'INÍCIO', href: '#home', icon: <HomeOutlinedIcon />, id: 'home' },
    { text: 'SOBRE', href: '#sobre', icon: <PersonOutlineIcon />, id: 'sobre' },
    { text: 'PORTFÓLIO', href: '#galeria', icon: <CollectionsIcon />, id: 'galeria' },
    { text: 'SERVIÇOS', href: '#servicos', icon: <StyleIcon />, id: 'servicos' },
    { text: 'CONTATO', href: '#contato', icon: <MailOutlineIcon />, id: 'contato' },
  ];

  const drawer = (
    <Box sx={{ 
      textAlign: 'center', 
      bgcolor: 'background.default', 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      position: 'relative'
    }}>
      <IconButton 
        onClick={handleDrawerToggle}
        sx={{ 
          position: 'absolute', 
          right: 8, 
          top: 8, 
          color: 'text.primary' 
        }}
      >
        <CloseIcon />
      </IconButton>
      
      <Box sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" sx={{ color: 'text.primary', fontWeight: 'bold', letterSpacing: '0.1em' }}>
          {artistInfo.name}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: 'text.secondary', letterSpacing: '0.05em', mb: 2 }}>
          {artistInfo.subtitle}
        </Typography>
      </Box>
      
      <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }}/>
      
      <List sx={{ flexGrow: 1, py: 2 }}>
        {menuItems.map((item: MenuItem) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton 
              href={item.href} 
              onClick={handleDrawerToggle} 
              sx={{ 
                textAlign: 'center', 
                py: 2,
                color: activeSection === item.id ? 'secondary.main' : 'text.primary',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.05)'
                }
              }}
            >
              <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{ 
                  fontWeight: activeSection === item.id ? 'bold' : 'normal',
                  letterSpacing: '0.1em'
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
      <Box sx={{ p: 3, mt: 'auto' }}>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
          SIGA-NOS
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <IconButton 
            href={`https://instagram.com/${artistInfo.instagram.substring(1)}`} 
            target="_blank" 
            aria-label="Instagram"
            sx={{ color: 'text.primary' }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton 
            href="https://wa.me/5512988608738" // Updated WhatsApp link
            target="_blank" 
            aria-label="WhatsApp"
            sx={{ color: 'text.primary' }}
          >
            <WhatsAppIcon />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: !isMobile,
    dotsClass: "slick-dots slick-thumb", // Ensure dots are styled
    appendDots: (dots: React.ReactNode) => (
      <Box sx={{ position: 'relative', bottom: '-40px' }}>
        <ul style={{ margin: "0px", padding: "0px" }}> {dots} </ul>
      </Box>
    ),
    customPaging: (/* i: number */) => ( // Removed unused variable 'i'
      <Box
        sx={{
          width: '10px',
          height: '10px',
          bgcolor: 'rgba(255, 255, 255, 0.3)',
          borderRadius: '50%',
          display: 'inline-block',
          mx: '5px',
          transition: 'background-color 0.3s ease',
          '&:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.5)',
          },
          '.slick-active &': {
            bgcolor: 'secondary.main',
          },
        }}
      />
    ),
    responsive: [
      {
        breakpoint: 960, // md
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 600, // sm
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  };

  // Disqus configuration
  const disqusShortname = 'noxiousvoid';
  const disqusConfig = {
      url: typeof window !== 'undefined' ? window.location.href : '', // Use current URL
      identifier: 'portfolio-contato', // Unique identifier for this page's comments
      title: 'Comentários - Portfólio Noxiousvoid', // Title for the comments section
  };

  return (
    <ThemeProvider theme={minimalistTheme}>
      <CssBaseline />
      
      {/* Header */}
      <AppBar 
        position="fixed" 
        elevation={0} 
        sx={{ 
          bgcolor: 'rgba(18, 18, 18, 0.8)', // Slightly transparent background
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ height: 70 }}>
            {/* Logo/Brand */}
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                flexGrow: 1, 
                fontWeight: 'bold', 
                letterSpacing: '0.1em',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              {artistInfo.name}
              <Typography 
                component="span" 
                variant="caption" 
                sx={{ 
                  ml: 1,
                  opacity: 0.7, 
                  fontWeight: 'normal', 
                  letterSpacing: '0.05em'
                }}
              >
                {artistInfo.subtitle}
              </Typography>
            </Typography>
            
            {/* Desktop Menu */}
            {!isMobile && (
              <Box sx={{ display: 'flex' }}>
                {menuItems.map((item: MenuItem) => (
                  <Button 
                    key={item.text} 
                    href={item.href} 
                    sx={{ 
                      mx: 1, 
                      px: 2,
                      color: activeSection === item.id ? 'secondary.main' : 'text.primary',
                      fontWeight: activeSection === item.id ? 'bold' : 'normal',
                      letterSpacing: '0.1em',
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: '0%',
                        height: '2px',
                        bottom: '5px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: 'secondary.main',
                        transition: 'width 0.3s ease-in-out',
                      },
                      '&:hover::after': {
                        width: '80%',
                      },
                      ...(activeSection === item.id && {
                        '&::after': {
                           width: '80%',
                        }
                      })
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
              </Box>
            )}
            
            {/* Mobile Menu Toggle */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ ml: 1 }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, 
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: '100%', 
            maxWidth: '100%',
            bgcolor: 'background.default'
          },
        }}
      >
        {drawer}
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, overflowX: 'hidden' }}>
        <Toolbar sx={{ height: 70 }} /> {/* Spacer for AppBar */}

        {/* Hero Section */}
        <Box 
          id="home" 
          sx={{
            minHeight: 'calc(100vh - 70px)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            bgcolor: 'background.default',
            position: 'relative',
            overflow: 'hidden',
            py: { xs: 8, md: 0 }
          }}
        >
          <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
            <Grid container spacing={0} alignItems="center" justifyContent="center">
              {/* Text Content */}
              <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' }, p: { xs: 4, md: 8 } }}>
                <Typography 
                  variant="h1" 
                  sx={{ 
                    fontWeight: 700, 
                    letterSpacing: '0.1em',
                    mb: 2,
                    fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' }
                  }}
                >
                  {artistInfo.name}
                </Typography>
                <Typography 
                  variant="h3" 
                  sx={{ 
                    fontWeight: 400, 
                    letterSpacing: '0.05em',
                    color: 'text.secondary',
                    mb: 4,
                    fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }
                  }}
                >
                  {artistInfo.subtitle}
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'text.secondary',
                    mb: 4,
                    maxWidth: '600px',
                    mx: { xs: 'auto', md: 0 },
                    lineHeight: 1.8
                  }}
                >
                  Body piercing profissional em São Paulo com foco em qualidade, segurança e design.
                </Typography>
                <Box sx={{ 
                  mt: 4, 
                  display: 'flex', 
                  flexDirection: { xs: 'column', sm: 'row' }, 
                  justifyContent: { xs: 'center', md: 'flex-start' }, 
                  alignItems: 'center', 
                  gap: 2 
                }}>
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    size="large" 
                    href="#contato"
                    sx={{ 
                      minWidth: { xs: '100%', sm: 'auto' },
                      color: 'primary.main' // Ensure text is readable on white button
                    }}
                  >
                    Agendar Horário
                  </Button>
                  <Button 
                    variant="outlined" 
                    color="secondary" 
                    size="large" 
                    href="#galeria"
                    sx={{ minWidth: { xs: '100%', sm: 'auto' } }}
                  >
                    Ver Portfólio
                  </Button>
                </Box>
              </Grid>
              {/* Image */}
              <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center', p: 4 }}>
                <Box
                  component="img"
                  src={artistInfo.profileImage}
                  alt="Ilustração Gótica Abstrata"
                  sx={{
                    maxWidth: '100%',
                    maxHeight: '70vh',
                    objectFit: 'contain',
                    filter: 'grayscale(30%) contrast(110%)',
                    opacity: 0.8
                  }}
                />
              </Grid>
            </Grid>
          </Container>
          {/* Background element (optional) */}
          <Box sx={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            // Example: subtle gradient or pattern
            // background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8))',
            zIndex: 1 
          }} />
        </Box>

        {/* Sobre Section */}
        <Box id="sobre" sx={{ py: 10, bgcolor: 'background.paper' }}>
          <Container maxWidth="lg">
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h2" gutterBottom sx={{ fontWeight: 600, letterSpacing: '0.02em' }}>
                  Sobre {artistInfo.name}
                </Typography>
                <Typography variant="h5" sx={{ color: 'text.secondary', mb: 3, fontWeight: 400 }}>
                  {artistInfo.title}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3 }}>
                  {artistInfo.bio}
                </Typography>
                <Button 
                  variant="outlined" 
                  color="secondary" 
                  href={`https://instagram.com/${artistInfo.instagram.substring(1)}`} 
                  target="_blank"
                  startIcon={<InstagramIcon />}
                >
                  Siga no Instagram
                </Button>
              </Grid>
              <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                 <Box
                  component="img"
                  src="/assets/gothic_piercing_inspiration_2.svg+xml" // Use a different image for variety
                  alt="Ilustração do Artista ou Estúdio"
                  sx={{
                    maxWidth: '80%',
                    maxHeight: '500px',
                    objectFit: 'contain',
                    borderRadius: '4px', // Subtle rounding
                    filter: 'grayscale(50%) contrast(105%)',
                    opacity: 0.9
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Galeria Section */}
       <Box id="galeria" sx={{ py: 10, bgcolor: 'background.default' }}>
  <Container maxWidth="xl">
    <Typography variant="h2" align="center" gutterBottom sx={{ fontWeight: 600, letterSpacing: '0.02em', mb: 6 }}>
      Portfólio
    </Typography>
    <Slider {...sliderSettings}>
      {galleryImages.map((item, index) => (
        <Box key={index} sx={{ px: isMobile ? 0 : 2 }}>
          <Card sx={{ bgcolor: 'background.paper', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              height="300"
              image={item.img}
              alt={item.title}
              sx={{ objectFit: 'cover', filter: 'grayscale(20%)' }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h6" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Slider>
  </Container>
</Box>
        {/* Serviços Section */}
        <Box id="servicos" sx={{ py: 10, bgcolor: 'background.paper' }}>
          <Container maxWidth="lg">
            <Typography variant="h2" align="center" gutterBottom sx={{ fontWeight: 600, letterSpacing: '0.02em', mb: 6 }}>
              Serviços e Preços
            </Typography>
            <Grid container spacing={4}>
              {servicesData.map((service, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card sx={{ bgcolor: 'background.default', height: '100%', display: 'flex', flexDirection: 'column', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" component="div" gutterBottom>
                        {service.name}
                      </Typography>
                      <Typography variant="h5" color="secondary" gutterBottom sx={{ fontWeight: 'bold' }}>
                        {service.price}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Typography variant="caption" align="center" display="block" sx={{ color: 'text.secondary', mt: 4 }}>
              *Valores são referenciais e podem variar dependendo da joia escolhida e complexidade. Entre em contato para um orçamento preciso.
            </Typography>
          </Container>
        </Box>

        {/* Contato Section */}
        <Box id="contato" sx={{ py: 10, bgcolor: 'background.default' }}>
          <Container maxWidth="md">
            <Typography variant="h2" align="center" gutterBottom sx={{ fontWeight: 600, letterSpacing: '0.02em', mb: 6 }}>
              Entre em Contato
            </Typography>
            <Paper elevation={0} sx={{ p: { xs: 3, sm: 5 }, bgcolor: 'background.paper', border: '1px solid rgba(255,255,255,0.1)' }}>
              <Grid container spacing={4} justifyContent="center"> {/* Center content now */}
                <Grid item xs={12} md={8}> {/* Adjust grid size if needed */}
                  <Typography variant="h5" gutterBottom>
                    Agende seu horário ou deixe um comentário
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                    Use os botões abaixo para agendar sua perfuração ou tirar dúvidas via WhatsApp/Instagram. Você também pode deixar um comentário público abaixo.
                  </Typography>
                  <Stack spacing={2} sx={{ mb: 4 }}> {/* Add margin bottom */}
                    <Button 
                      variant="contained" 
                      color="secondary" 
                      startIcon={<WhatsAppIcon />} 
                      href="https://wa.me/5512988608738" // Updated WhatsApp link
                      target="_blank"
                      sx={{ color: 'primary.main' }}
                    >
                      Conversar no WhatsApp
                    </Button>
                    <Button 
                      variant="outlined" 
                      color="secondary" 
                      startIcon={<InstagramIcon />} 
                      href={`https://instagram.com/${artistInfo.instagram.substring(1)}`} 
                      target="_blank"
                    >
                      Mensagem no Instagram
                    </Button>
                  </Stack>
                  <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />
                  <Typography variant="h6" gutterBottom>
                    Informações
                  </Typography>
                  <Stack spacing={1} sx={{ color: 'text.secondary', mb: 4 }}> {/* Add margin bottom */}
                    <Stack direction="row" spacing={1} alignItems="center">
                      <LocationOnIcon fontSize="small" />
                      <Typography variant="body2">São Paulo, SP (Endereço completo via agendamento)</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <MailOutlineIcon fontSize="small" />
                      <Typography variant="body2">contato@noxiousvoid.com (Placeholder)</Typography>
                    </Stack>
                  </Stack>
                  
                  {/* Disqus Comments Section */}
                  <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />
                  <Typography variant="h6" gutterBottom>
                    Comentários
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <ReactDisqusComments
                      shortname={disqusShortname}
                      identifier={disqusConfig.identifier}
                      title={disqusConfig.title}
                      url={disqusConfig.url}
                      // onNewComment={this.handleNewComment} // Optional callback
                    />
                  </Box>
                </Grid>
                {/* Removed the Grid item containing the email form */}
              </Grid>
            </Paper>
          </Container>
        </Box>

        {/* Footer */}
        <Box component="footer" sx={{ py: 4, bgcolor: 'background.paper', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <Container maxWidth="lg">
            <Grid container spacing={2} justifyContent="space-between" alignItems="center">
              <Grid item xs={12} sm={'auto'}>
                <Typography variant="body2" color="text.secondary" align="center">
                  © {new Date().getFullYear()} {artistInfo.name}. Todos os direitos reservados.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={'auto'}>
                <Stack direction="row" spacing={1} justifyContent="center">
                  <IconButton 
                    href={`https://instagram.com/${artistInfo.instagram.substring(1)}`} 
                    target="_blank" 
                    aria-label="Instagram"
                    size="small"
                    sx={{ color: 'text.secondary' }}
                  >
                    <InstagramIcon fontSize="small"/>
                  </IconButton>
                  <IconButton 
                    href="https://wa.me/5512988608738" // Updated WhatsApp link
                    target="_blank" 
                    aria-label="WhatsApp"
                    size="small"
                    sx={{ color: 'text.secondary' }}
                  >
                    <WhatsAppIcon fontSize="small"/>
                  </IconButton>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Scroll to Top Button */}
        {showScroll && (
          <Fab 
            color="secondary" 
            size="small" 
            onClick={scrollToTop} 
            sx={{ 
              position: 'fixed', 
              bottom: 16, 
              right: 16, 
              zIndex: 1000,
              color: 'primary.main' // Ensure icon is visible
            }}
          >
            <ArrowUpwardIcon />
          </Fab>
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;
