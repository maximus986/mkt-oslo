/** @jsx jsx */
import { jsx } from 'theme-ui';

export const Container = ({ children }) => {
  return (
    <div
      sx={{
        width: ['90%', null, null, '90%', 'null', '100%'],
        maxWidth: [null, null, null, '1120px', 'null', '1280px'],
        mx: 'auto',
      }}
    >
      {children}
    </div>
  );
};
