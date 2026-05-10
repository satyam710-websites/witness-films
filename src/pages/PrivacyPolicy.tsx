import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Divider, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Footer from '../components/Footer';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1.5, color: '#111' }}>
      {title}
    </Typography>
    {children}
    <Divider sx={{ mt: 3 }} />
  </Box>
);

const BodyText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8, mb: 1 }}>
    {children}
  </Typography>
);

const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          backgroundColor: '#000',
          color: '#fff',
          py: { xs: 6, md: 10 },
          textAlign: 'center',
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1, fontSize: { xs: '2rem', md: '3rem' } }}>
          Privacy Policy
        </Typography>
        <Typography variant="body1" sx={{ color: '#aaa' }}>
          Last updated: May 2026
        </Typography>
      </Box>

      <Container maxWidth="md" sx={{ py: { xs: 5, md: 8 } }}>
        <BodyText>
          At <strong>Witness Films</strong>, we are committed to protecting your privacy. This Privacy
          Policy explains how we collect, use, and safeguard your information when you visit our
          website.
        </BodyText>

        <Box sx={{ mb: 4, mt: 3 }}>
          <Divider />
        </Box>

        <Section title="1. Information We Collect">
          <BodyText>
            We may collect the following types of information:
          </BodyText>
          <Box component="ul" sx={{ pl: 3, color: '#444', lineHeight: 2, textAlign: 'left' }}>
            <li>
              <Typography variant="body1" sx={{ textAlign: 'left' }}>
                <strong>Personal information</strong> you voluntarily provide (e.g. name, email
                address) when you contact us through our website.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ textAlign: 'left' }}>
                <strong>Usage data</strong> such as pages visited, time spent on pages, browser type,
                and IP address, collected automatically via analytics cookies (only if you consent).
              </Typography>
            </li>
          </Box>
        </Section>

        <Section title="2. Cookies">
          <BodyText>
            We use cookies to improve your experience on our site. You can manage your cookie
            preferences at any time through the cookie banner displayed when you first visit the site.
            We use the following categories of cookies:
          </BodyText>
          <Box component="ul" sx={{ pl: 3, color: '#444', lineHeight: 2, textAlign: 'left' }}>
            <li>
              <Typography variant="body1" sx={{ textAlign: 'left' }}>
                <strong>Essential cookies</strong> – required for the site to function correctly.
                These cannot be disabled.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ textAlign: 'left' }}>
                <strong>Analytics cookies</strong> – help us understand how visitors interact with the
                site so we can improve it. Only active with your consent.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ textAlign: 'left' }}>
                <strong>Marketing cookies</strong> – used to show personalised content and
                advertisements. Only active with your consent.
              </Typography>
            </li>
          </Box>
        </Section>

        <Section title="3. How We Use Your Information">
          <BodyText>
            We use the information we collect to:
          </BodyText>
          <Box component="ul" sx={{ pl: 3, color: '#444', lineHeight: 2, textAlign: 'left' }}>
            <li><Typography variant="body1" sx={{ textAlign: 'left' }}>Respond to your enquiries and messages.</Typography></li>
            <li><Typography variant="body1" sx={{ textAlign: 'left' }}>Improve and maintain our website.</Typography></li>
            <li><Typography variant="body1" sx={{ textAlign: 'left' }}>Analyse website traffic and usage patterns (with consent).</Typography></li>
          </Box>
          <BodyText>
            We do <strong>not</strong> sell, trade, or rent your personal information to third parties.
          </BodyText>
        </Section>

        <Section title="4. Third-Party Services">
          <BodyText>
            Our website may contain links to third-party platforms such as Instagram and YouTube. We
            are not responsible for the privacy practices of those sites. We encourage you to review
            their privacy policies.
          </BodyText>
        </Section>

        <Section title="5. Data Retention">
          <BodyText>
            We retain personal information you submit via our contact form only as long as necessary
            to respond to your enquiry. Analytics and cookie preference data is stored in your browser
            and can be cleared at any time.
          </BodyText>
        </Section>

        <Section title="6. Your Rights">
          <BodyText>
            Depending on your location, you may have the right to:
          </BodyText>
          <Box component="ul" sx={{ pl: 3, color: '#444', lineHeight: 2, textAlign: 'left' }}>
            <li><Typography variant="body1" sx={{ textAlign: 'left' }}>Access the personal data we hold about you.</Typography></li>
            <li><Typography variant="body1" sx={{ textAlign: 'left' }}>Request correction or deletion of your data.</Typography></li>
            <li><Typography variant="body1" sx={{ textAlign: 'left' }}>Withdraw consent for optional cookies at any time by clearing your browser storage.</Typography></li>
          </Box>
          <BodyText>
            To exercise any of these rights, please contact us at{' '}
            <a href="mailto:filmswitness@gmail.com" style={{ color: '#000', fontWeight: 'bold' }}>
              filmswitness@gmail.com
            </a>
            .
          </BodyText>
        </Section>

        <Section title="7. Security">
          <BodyText>
            We take reasonable precautions to protect your information. However, no method of
            transmission over the internet is 100% secure and we cannot guarantee absolute security.
          </BodyText>
        </Section>

        <Section title="8. Changes to This Policy">
          <BodyText>
            We may update this Privacy Policy from time to time. Changes will be posted on this page
            with an updated revision date. Continued use of the site after any changes constitutes
            your acceptance of the new policy.
          </BodyText>
        </Section>

        <Section title="9. Contact Us">
          <BodyText>
            If you have any questions about this Privacy Policy, please contact us:
          </BodyText>
          <Box component="ul" sx={{ pl: 3, color: '#444', lineHeight: 2, textAlign: 'left' }}>
            <li><Typography variant="body1" sx={{ textAlign: 'left' }}>Email: filmswitness@gmail.com</Typography></li>
            <li><Typography variant="body1" sx={{ textAlign: 'left' }}>Phone: +91-8077002038</Typography></li>
            <li><Typography variant="body1" sx={{ textAlign: 'left' }}>Location: Offgrid Studios, Jakhan, Dehradun, India</Typography></li>
          </Box>
          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
            <Button
              startIcon={<ArrowBackIcon />}
              onClick={() => navigate(-1)}
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                color: 'white',
                padding: '12px 24px',
                fontSize: '1rem',
                borderRadius: '8px',
                '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.9)' },
              }}
            >
              Back
            </Button>
          </Box>
        </Section>
      </Container>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
