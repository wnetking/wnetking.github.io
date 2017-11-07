import { h, Component } from 'preact';
import LinearProgress from 'preact-material-components/LinearProgress';
import 'preact-material-components/LinearProgress/style.css';
import style from './style'

export default function Loader() {
  return (
    <div className={style.loader}>
        <LinearProgress reversed={true} indeterminate={true} />
    </div>
  )
}