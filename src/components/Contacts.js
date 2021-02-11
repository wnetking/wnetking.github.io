import React from 'react';
import Button from '@material-ui/core/Button';
import facebook from '../img/facebook.svg';
import instagram from '../img/instagram.svg';
import skype from '../img/skype.svg';
import github from '../img/github.svg';
import { base } from '../DATA.json';

export const Contacts = () => {
  return (
    <div className="contacts">
      <p>
        <b>Status:</b> {base.status}
      </p>
      <b>Contacts:</b>{' '}
      <React.Fragment>
        {
          <Button size="small" href={`mailto:${base.email}`}>
            {base.email}
          </Button>
        }
            ,{' '}
        {
          <Button size="small" href={`skype:${base.skype}?chat`}>
            <img src={skype} alt="skype" />
            {base.skype}
          </Button>
        }
            ,{' '}
        {
          <Button size="small" target="_blank" href={base.facebook}>
            <img src={facebook} alt="facebook" />
            {base.nik_name}
          </Button>
        }
            ,{' '}
        {
          <Button size="small" target="_blank" href={base.instagram}>
            <img src={instagram} alt="instagram" />
            {base.nik_name}
          </Button>
        }
            ,{' '}
        {
          <Button size="small" target="_blank" href={base.github}>
            <img src={github} alt="github" />
            {base.nik_name}
          </Button>
        }
      </React.Fragment>
    </div>
  );
}

export default Contacts;
