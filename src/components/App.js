import React from 'react';
import Grid from '@material-ui/core/Grid';
import Menu from './Menu';
import Avatar from './Avatar';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Contacts from './Contacts';
import { base } from '../DATA.json';

const App = () => {
  return (
    <Grid container className="container">
      <Grid item xs={12} className="text-center">
        <div>
          <Avatar />
          <h2>{base.name}</h2>
          <div className="mark mb-2">
            {base.position}
            <Menu />
          </div>
        </div>
      </Grid>
      <Grid item xs={12}>
        <Skills />
        <Contacts />
        <Experience />
        <Education />
      </Grid>
    </Grid>
  );
}

export default App;
