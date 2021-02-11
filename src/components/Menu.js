import React from 'react';
import Button from '@material-ui/core/Button';

const Menu = () => {
  return (
    <React.Fragment>
      <Button
        className="no-print"
        onClick={() => {
          window.print();
        }}
      >
        {'Download PDF'}
      </Button>
    </React.Fragment>
  );
}

export default Menu;
