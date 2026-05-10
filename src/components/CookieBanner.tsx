import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Paper } from '@mui/material';
import CookieIcon from '@mui/icons-material/Cookie';

const COOKIE_CONSENT_KEY = 'witness_films_cookie_consent';

const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({ accepted: true }));
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({ accepted: false }));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        p: { xs: 1.5, sm: 2 },
        backgroundColor: 'rgba(0,0,0,0.6)',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Paper
        elevation={8}
        sx={{
          backgroundColor: '#111',
          color: '#fff',
          p: { xs: 2.5, sm: 3 },
          maxWidth: 700,
          width: '100%',
          borderRadius: 2,
          border: '1px solid #333',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
          <CookieIcon sx={{ color: '#f5c842' }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', sm: '1.1rem' } }}>
            We use cookies
          </Typography>
        </Box>

        <Typography variant="body2" sx={{ color: '#ccc', mb: 2, lineHeight: 1.6 }}>
          We use cookies to enhance your browsing experience and analyse site traffic. Essential cookies
          are always active. You can choose which optional cookies to accept below. Read our{' '}
          <Link to="/privacy-policy" style={{ color: '#f5c842', textDecoration: 'underline' }}>
            Privacy Policy
          </Link>{' '}
          for more details.
        </Typography>

        {/* Action buttons */}
        <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            onClick={handleAccept}
            sx={{
              backgroundColor: '#f5c842',
              color: '#000',
              fontWeight: 'bold',
              textTransform: 'none',
              '&:hover': { backgroundColor: '#e0b830' },
              flex: { xs: '1 1 auto', sm: '0 0 auto' },
            }}
          >
            Accept
          </Button>
          <Button
            variant="outlined"
            onClick={handleReject}
            sx={{
              borderColor: '#888',
              color: '#888',
              textTransform: 'none',
              '&:hover': { borderColor: '#ccc', color: '#ccc' },
              flex: { xs: '1 1 auto', sm: '0 0 auto' },
            }}
          >
            Reject
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default CookieBanner;
