
// Helper function to optimize images via free CDN (wsrv.nl)
// Converts to WebP, resizes to max width 1200px, and sets quality to 80%
const optimizeImage = (url: string) => {
  return `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=800&q=60&output=webp`;
};

export const COLORS = {
  beige: '#cbc9a0',
  teal: '#335d65',
  white: '#ffffff',
};

export const IMAGES = {
  logo: 'https://meu-bucket-highcontorno.s3.us-east-2.amazonaws.com/Design+sem+nome+(17).png',
  hero: optimizeImage('https://meu-bucket-highcontorno.s3.us-east-2.amazonaws.com/WAVE+ITAUNA-20251127T012610Z-1-001/WAVE+ITAUNA/WAVE+-+REV++09-10-25+DIURNA++(1).png'),
  pool: optimizeImage('https://meu-bucket-highcontorno.s3.us-east-2.amazonaws.com/WAVE+ITAUNA-20251127T012610Z-1-001/WAVE+ITAUNA/ADNS+-+WAVE+-+PISCINA+REV+00+-28-06-25+(7).png'),
  gym: optimizeImage('https://meu-bucket-highcontorno.s3.us-east-2.amazonaws.com/WAVE+ITAUNA-20251127T012610Z-1-001/WAVE+ITAUNA/ADNS+-+WAVE++-+RENDER+EXTERNOS++-+22-10-25+(27).png'), // Using a render that fits interior/gym context
  exterior_night: optimizeImage('https://meu-bucket-highcontorno.s3.us-east-2.amazonaws.com/WAVE+ITAUNA-20251127T012610Z-1-001/WAVE+ITAUNA/ADNS+WAVE+-+REV++09-10-25+-NOTURNAS+(1).png'),
  exterior_day: optimizeImage('https://meu-bucket-highcontorno.s3.us-east-2.amazonaws.com/WAVE+ITAUNA-20251127T012610Z-1-001/WAVE+ITAUNA/ADNS+-+WAVE++-+RENDER+EXTERNOS++-+22-10-25+(1).png'),
  balcony: optimizeImage('https://meu-bucket-highcontorno.s3.us-east-2.amazonaws.com/WAVE+ITAUNA-20251127T012610Z-1-001/WAVE+ITAUNA/ADNS+-+WAVE++-+RENDER+EXTERNOS++-+22-10-25+(11).png'),
  gourmet: optimizeImage('https://meu-bucket-highcontorno.s3.us-east-2.amazonaws.com/WAVE+ITAUNA-20251127T012610Z-1-001/WAVE+ITAUNA/ADNS+-+WAVE+GOURMET+REV++02+-+28-06-25+(3).png'),
  sauna: optimizeImage('https://meu-bucket-highcontorno.s3.us-east-2.amazonaws.com/WAVE+ITAUNA-20251127T012610Z-1-001/WAVE+ITAUNA/SAUNA+WAVE+(1).png'),
  facade_detail: optimizeImage('https://meu-bucket-highcontorno.s3.us-east-2.amazonaws.com/WAVE+ITAUNA-20251127T012610Z-1-001/WAVE+ITAUNA/WAVE+-+REV++09-10-25+DIURNA++(17).png'),
  rooftop: optimizeImage('https://meu-bucket-highcontorno.s3.us-east-2.amazonaws.com/WAVE+ITAUNA-20251127T012610Z-1-001/WAVE+ITAUNA/ADNS+-+WAVE++-+RENDER+EXTERNOS++-+22-10-25+(27).png'),
  
  // Gallery Collection
  gallery: [
    optimizeImage('https://meu-bucket-highcontorno.s3.us-east-2.amazonaws.com/WAVE+ITAUNA-20251127T012610Z-1-001/WAVE+ITAUNA/ADNS+WAVE+-+REV++09-10-25+-NOTURNAS+(2)+(1).png'),
    optimizeImage('https://meu-bucket-highcontorno.s3.us-east-2.amazonaws.com/WAVE+ITAUNA-20251127T012610Z-1-001/WAVE+ITAUNA/adns+-+Wave+rev+02+--+28-06-25+(3).png'), // Interior
    optimizeImage('https://meu-bucket-highcontorno.s3.us-east-2.amazonaws.com/WAVE+ITAUNA-20251127T012610Z-1-001/WAVE+ITAUNA/ADNS+-+WAVE++-+RENDER+EXTERNOS++-+22-10-25+(15).png'),
    optimizeImage('https://meu-bucket-highcontorno.s3.us-east-2.amazonaws.com/WAVE+ITAUNA-20251127T012610Z-1-001/WAVE+ITAUNA/ADNS+-+WAVE+GOURMET+REV++02+-+28-06-25+(3).png'),
    optimizeImage('https://meu-bucket-highcontorno.s3.us-east-2.amazonaws.com/WAVE+ITAUNA-20251127T012610Z-1-001/WAVE+ITAUNA/ADNS+-+WAVE++-+RENDER+EXTERNOS++-+22-10-25+(19).png'),
    optimizeImage('https://meu-bucket-highcontorno.s3.us-east-2.amazonaws.com/WAVE+ITAUNA-20251127T012610Z-1-001/WAVE+ITAUNA/SAUNA+WAVE+(1).png'),
    optimizeImage('https://meu-bucket-highcontorno.s3.us-east-2.amazonaws.com/WAVE+ITAUNA-20251127T012610Z-1-001/WAVE+ITAUNA/adns+-+Wave+rev+02+--+28-06-25+(10).png'), // Interior
    optimizeImage('https://meu-bucket-highcontorno.s3.us-east-2.amazonaws.com/WAVE+ITAUNA-20251127T012610Z-1-001/WAVE+ITAUNA/WAVE+-+REV++09-10-25+DIURNA++(21).png'),
    optimizeImage('https://meu-bucket-highcontorno.s3.us-east-2.amazonaws.com/WAVE+ITAUNA-20251127T012610Z-1-001/WAVE+ITAUNA/ADNS+-+WAVE++-+RENDER+EXTERNOS++-+22-10-25+(28).png')
  ]
};

export const VIDEOS = {
  hero: 'https://meu-bucket-highcontorno.s3.us-east-2.amazonaws.com/990eca32-cb34-11f0-a21d-ba7cf617c708_0.mp4'
};

export const CONTACT_INFO = {
  whatsapp: "5522999999999", // Placeholder
  email: "contato@waveitauna.com.br"
};
