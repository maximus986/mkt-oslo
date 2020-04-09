/** @jsx jsx */
import { jsx, Grid } from 'theme-ui';
import { Button } from '../core/button';
import { FaMapMarkerAlt, FaVideo } from 'react-icons/fa';

export const Reservation = () => {
  return (
    <Grid
      gap={[10, null, null, null]}
      columns={[1, 1, 1, '1fr 2fr']}
      sx={{
        alignItems: 'start',
      }}
    >
      <div
        sx={{
          textAlign: ['center', null, null, 'left'],
        }}
      >
        <p
          sx={{
            fontSize: 0,
            letterSpacing: '1px',
            fontWeight: 'bold',
            fontFamily: 'heading',
            textTransform: 'uppercase',
            color: 'mainDark',
            mb: 2,
          }}
        >
          bestill time
        </p>
        <p
          sx={{
            fontSize: 3,
            letterSpacing: '0.7px',
            fontWeight: 'body',
            fontFamily: 'body',
            fontStyle: 'italic',
            m: 0,
          }}
        >
          Vi tilbyr timer i Oslo og line
        </p>
      </div>
      <Grid
        gap={[10, null, null, null, 15]}
        columns={['1fr 1fr']}
        sx={{
          justifySelf: [null, null, null, 'end'],
        }}
      >
        <Button
          variant="internal"
          icon={<FaVideo />}
          label="bestill online time"
          to="/behandling/online-metakognitiv-terapi"
        />
        <Button variant="primary" icon={<FaMapMarkerAlt />} label="bestill time i oslo" />
      </Grid>
    </Grid>
  );
};
