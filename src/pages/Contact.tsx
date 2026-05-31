import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Box, 
  TextField, 
  Button, 
  Alert, 
  Snackbar, 
  Radio, 
  RadioGroup, 
  FormControlLabel, 
  FormControl, 
  FormLabel,
  Select,
  MenuItem,
  InputLabel,
  Divider
} from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import Footer from '../components/Footer';

const ContactSection = styled(Box)(({ theme }) => ({
  padding: '100px 0',
  [theme.breakpoints.down('md')]: {
    padding: '80px 0',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '60px 0',
  },
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  marginBottom: '40px',
  [theme.breakpoints.down('md')]: {
    marginBottom: '30px',
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: '20px',
  },
}));

const ContactForm = styled('form')(({ theme }) => ({
  '& .MuiTextField-root': {
    marginBottom: '20px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '16px',
    },
  },
  '& .MuiFormControl-root': {
    marginBottom: '20px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '16px',
    },
  },
}));

const LocationMap = styled('iframe')(({ theme }) => ({
  width: '100%',
  height: '400px',
  border: 0,
  borderRadius: '4px',
  [theme.breakpoints.down('md')]: {
    height: '350px',
  },
  [theme.breakpoints.down('sm')]: {
    height: '300px',
    marginTop: '20px',
  },
}));

const PageTitle = styled(Typography)(({ theme }) => ({
  marginBottom: '3rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
    marginBottom: '2.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
    marginBottom: '2rem',
  },
}));

const InfoTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.25rem',
  },
}));

const InfoText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.95rem',
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginTop: '24px',
  marginBottom: '16px',
  fontWeight: 600,
  color: theme.palette.primary.main,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    marginTop: '20px',
    marginBottom: '12px',
  },
}));

const Contact = () => {
  const [formData, setFormData] = useState({
    artistName: '',
    email: '',
    phone: '',
    city: '',
    songReleased: '',
    songLink: '',
    projectType: '',
    visualReferences: '',
    shootTimeline: '',
    releaseMonth: '',
    budgetRange: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mgozdgeg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setNotification({
          open: true,
          message: 'Thank you! Your inquiry has been submitted successfully. We\'ll get back to you soon!',
          severity: 'success'
        });
        
        // Reset form
        setFormData({
          artistName: '',
          email: '',
          phone: '',
          city: '',
          songReleased: '',
          songLink: '',
          projectType: '',
          visualReferences: '',
          shootTimeline: '',
          releaseMonth: '',
          budgetRange: '',
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setNotification({
        open: true,
        message: 'There was an error submitting your inquiry. Please try again or contact us directly at filmswitness@gmail.com',
        severity: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseNotification = () => {
    setNotification(prev => ({ ...prev, open: false }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <ContactSection>
        <Container maxWidth="lg">
          <PageTitle variant="h2" align="center">
            Music Video Inquiry
          </PageTitle>

          <Grid container spacing={{ xs: 4, md: 6 }}>
            <Grid item xs={12} md={8}>
              <ContactForm onSubmit={handleSubmit}>
                {/* Basic Identity Section */}
                <SectionTitle variant="h6">
                  1. Basic Identity
                </SectionTitle>
                
                <TextField
                  fullWidth
                  label="Artist / Band Name"
                  name="artistName"
                  value={formData.artistName}
                  onChange={handleChange}
                  required
                  size="medium"
                />
                
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  size="medium"
                />
                
                <TextField
                  fullWidth
                  label="Phone / WhatsApp Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  size="medium"
                />
                
                <TextField
                  fullWidth
                  label="City / Country"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  size="medium"
                />

                <Divider sx={{ my: 3 }} />

                {/* Music Context Section */}
                <SectionTitle variant="h6">
                  2. Music Context
                </SectionTitle>

                <FormControl component="fieldset" fullWidth required>
                  <FormLabel component="legend" sx={{ mb: 1 }}>
                    Is the song already released? *
                  </FormLabel>
                  <RadioGroup
                    name="songReleased"
                    value={formData.songReleased}
                    onChange={handleChange}
                  >
                    <FormControlLabel 
                      value="Yes" 
                      control={<Radio />} 
                      label="Yes" 
                    />
                    <FormControlLabel 
                      value="No, upcoming release" 
                      control={<Radio />} 
                      label="No, upcoming release" 
                    />
                  </RadioGroup>
                </FormControl>

                <TextField
                  fullWidth
                  label="Link to the song / demo (SoundCloud / Drive / YouTube / Spotify)"
                  name="songLink"
                  value={formData.songLink}
                  onChange={handleChange}
                  size="medium"
                  helperText="Optional, if available"
                />

                <FormControl fullWidth>
                  <InputLabel id="project-type-label">What best describes this project? *</InputLabel>
                  <Select
                    labelId="project-type-label"
                    name="projectType"
                    value={formData.projectType}
                    label="What best describes this project?"
                    onChange={handleChange}
                    required
                  >
                    <MenuItem value="Debut music video">Debut music video</MenuItem>
                    <MenuItem value="Independent release">Independent release</MenuItem>
                    <MenuItem value="Label-backed project">Label-backed project</MenuItem>
                    <MenuItem value="Visualiser / performance film">Visualiser / performance film</MenuItem>
                    <MenuItem value="Experimental / concept film">Experimental / concept film</MenuItem>
                  </Select>
                </FormControl>

                <Divider sx={{ my: 3 }} />

                {/* Visual References */}
                <SectionTitle variant="h6">
                  3. Visual References
                </SectionTitle>

                <TextField
                  fullWidth
                  label="Any visual references you love?"
                  name="visualReferences"
                  multiline
                  rows={3}
                  value={formData.visualReferences}
                  onChange={handleChange}
                  helperText="YouTube / Instagram / films / artists — optional"
                  size="medium"
                />

                <Divider sx={{ my: 3 }} />

                {/* Timeline */}
                <SectionTitle variant="h6">
                  4. When do you plan to shoot?
                </SectionTitle>

                <FormControl fullWidth>
                  <InputLabel id="shoot-timeline-label">Shoot Timeline *</InputLabel>
                  <Select
                    labelId="shoot-timeline-label"
                    name="shootTimeline"
                    value={formData.shootTimeline}
                    label="Shoot Timeline"
                    onChange={handleChange}
                    required
                  >
                    <MenuItem value="ASAP">ASAP</MenuItem>
                    <MenuItem value="Within 2–4 weeks">Within 2–4 weeks</MenuItem>
                    <MenuItem value="1–2 months">1–2 months</MenuItem>
                    <MenuItem value="Just exploring ideas">Just exploring ideas</MenuItem>
                  </Select>
                </FormControl>

                <Divider sx={{ my: 3 }} />

                {/* Release Month */}
                <SectionTitle variant="h6">
                  5. Expected Release Month
                </SectionTitle>

                <TextField
                  fullWidth
                  label="Expected release month"
                  name="releaseMonth"
                  value={formData.releaseMonth}
                  onChange={handleChange}
                  size="medium"
                  placeholder="e.g., March 2026"
                />

                <Divider sx={{ my: 3 }} />

                {/* Budget Range */}
                <SectionTitle variant="h6">
                  6. Approximate Budget Range
                </SectionTitle>

                <FormControl fullWidth>
                  <InputLabel id="budget-range-label">Budget Range (Optional)</InputLabel>
                  <Select
                    labelId="budget-range-label"
                    name="budgetRange"
                    value={formData.budgetRange}
                    label="Budget Range (Optional)"
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>Prefer not to say</em>
                    </MenuItem>
                    <MenuItem value="Under 2L">Under ₹2L</MenuItem>
                    <MenuItem value="₹2L – ₹5L">₹2L – ₹5L</MenuItem>
                    <MenuItem value="₹5L – ₹8L">₹5L – ₹8L</MenuItem>
                    <MenuItem value="₹10L+">₹10L+</MenuItem>
                  </Select>
                </FormControl>

                <Button
                  variant="contained"
                  type="submit"
                  size="large"
                  disabled={isSubmitting}
                  sx={{ 
                    mt: 4,
                    py: { xs: 1.5, sm: 2 },
                    px: { xs: 4, sm: 6 },
                    fontSize: { xs: '0.9rem', sm: '1rem' }
                  }}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                </Button>
              </ContactForm>
            </Grid>

            <Grid item xs={12} md={4}>
              <ContactInfo>
                <InfoTitle variant="h5" gutterBottom>
                  Get in Touch
                </InfoTitle>
                <InfoText variant="body1" paragraph>
                  We'd love to hear about your music video project. Fill out the form and we'll get back to you within 24-48 hours.
                </InfoText>
                <Box sx={{ my: { xs: 3, md: 4 } }}>
                  <InfoText variant="body1" paragraph>
                    <strong>Email:</strong> filmswitness@gmail.com
                  </InfoText>
                  <InfoText variant="body1" paragraph>
                    <strong>Phone:</strong> +91-7055519939
                  </InfoText>
                  <InfoText variant="body1">
                    <strong>Address:</strong><br />
                    Offgrid Studios, Jakhan, Dehradun, India
                  </InfoText>
                </Box>
              </ContactInfo>

              <Box sx={{ mt: 4 }}>
                <LocationMap
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.8234567891!2d78.0663120!3d30.3634370!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDIxJzQ4LjQiTiA3OMKwMDQnMDkuNSJF!5e0!3m2!1sen!2sin!4v1647856687721!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  title="Offgrid Studios - Jakhan, Dehradun, India"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </ContactSection>
      <Footer />
      
      {/* Notification Snackbar */}
      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseNotification} 
          severity={notification.severity}
          sx={{ width: '100%' }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </motion.div>
  );
};

export default Contact; 