import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { FullSizeCenteredFlexBox } from '@/styles/styled';
import { email, messages } from '@/config';
import resetApp from '@/utils/reset-app';
import { MdEmail, MdRefresh } from 'react-icons/md';

function AppErrorBoundaryFallback() {
  return (
    <Box height={400} marginTop={'3rem'}>
      <FullSizeCenteredFlexBox>
        <Paper sx={{ p: 5 }}>
          <Typography variant="h5" component="h3">
            {messages.app.crash.title}
          </Typography>
          <Button
            startIcon={<MdEmail />}
            variant="outlined"
            target="_blank"
            rel="noreferrer"
            href={`mailto: ${email}`}
            sx={{ my: 3 }}
          >
            {messages.app.crash.options.email}
          </Button>
          <Typography component="h6">or</Typography>
          <Button startIcon={<MdRefresh />} sx={{ mt: 3 }} variant="outlined" onClick={resetApp}>
            {messages.app.crash.options.reset}
          </Button>
        </Paper>
      </FullSizeCenteredFlexBox>
    </Box>
  );
}

export default AppErrorBoundaryFallback;
