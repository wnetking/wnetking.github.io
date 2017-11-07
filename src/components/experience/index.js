import { h, Component } from 'preact';
import { database } from '../../firebase';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import List from 'preact-material-components/List';
import Loader from '../loader'
import Progress from 'preact-progress';
import 'preact-material-components/List/style.css';
import 'preact-material-components/LayoutGrid/style.css';
import style from './style.css'

export default class Experience extends Component {
  constructor() {
    super()
    this.state = {
      data: null
    };
  }
  componentDidMount() {
    database.ref('experience').on('value', snapshot => {
      this.setState({
        data: snapshot.val().filter(item => item !== null).sort((a, b) => {
          return a.order - b.order;
        })
      });
    })
  }

  render() {
    let { data } = this.state

    return (
      <section>
        {
          data === null ? <Loader /> :
            <LayoutGrid>
              <h1 class="text-center mt-5">Expirience</h1>
              <LayoutGrid.Inner>
                {data.map((item, key) => (
                  <LayoutGrid.Cell cols="12" phoneCols={12} tabletCols={12} key={key}>
                    <div class={style.item}>
                      <h2>{item.position}</h2>
                      <p>Company: {item.company}</p>
                      <p>{item.from} {item.to}</p>
                      <p>{item.responsibility}</p>
                    </div>
                  </LayoutGrid.Cell>
                ))}
              </LayoutGrid.Inner>
            </LayoutGrid>
        }
      </section>
    );
  }
}