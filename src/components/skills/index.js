import { h, Component } from 'preact';
import { database } from '../../firebase';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import Loader from '../loader'
import Progress from 'preact-progress';
import 'preact-material-components/LayoutGrid/style.css';

export default class Skills extends Component {
  constructor() {
    super()
    this.state = {
      data: null
    };
  }
  componentDidMount() {
    database.ref('skills').on('value', snapshot => {
      this.setState({ data: snapshot.val().filter(item => item !== null) });
    });
  }

  render() {
    let { data } = this.state

    return (
      <section>
        {
          data === null ? <Loader /> :
            <LayoutGrid>
              <h1 class="text-center mt-5">Skills</h1>
              <LayoutGrid.Inner>
                {data.map((item, key) => (
                  <LayoutGrid.Cell cols="3" phoneCols={12} tabletCols={4} key={key}>
                    <p>{item.name}</p>
                    <Progress
                      key={key}
                      className="loader"
                      value={item.count} height="3px" color={item.color}
                      onChange={()=>{}}
                      onComplete={()=>{}}
                    />
                  </LayoutGrid.Cell>
                ))}
              </LayoutGrid.Inner>
            </LayoutGrid>
        }
      </section>
    );
  }
}