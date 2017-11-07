import { h, Component } from 'preact';
import { database } from '../../firebase';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import List from 'preact-material-components/List';
import Loader from '../loader'
import Progress from 'preact-progress';
import 'preact-material-components/List/style.css';
import 'preact-material-components/LayoutGrid/style.css';
import style from './style.css'

export default class Events extends Component {
  constructor() {
    super()
    this.state = {
      data: null
    };
  }
  componentDidMount() {
    database.ref('events').on('value', snapshot => {
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
              <h1 class="text-center mt-5">Courses, Trainings, Certification</h1>
              <LayoutGrid.Inner>
                {data.map((item, key) => (
                  <LayoutGrid.Cell cols="12" phoneCols={12} tabletCols={12} key={key}>
                    <div class={style.item}>
                      <h2>{item.name}</h2>
                      <p>{item.date}</p>
                      <p>{item.desc}</p>
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