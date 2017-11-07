import { h, Component } from 'preact';
import { database } from '../../firebase';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import List from 'preact-material-components/List';
import Icon from 'preact-material-components/Icon';
import Loader from '../loader'
import 'preact-material-components/List/style.css';
import 'preact-material-components/LayoutGrid/style.css';
import style from './style';

export default class Base extends Component {
  constructor() {
    super()
    this.state = {
      data: null
    };
  }
  componentDidMount() {
    database.ref('base').on('value', snapshot => {
      this.setState({ data: snapshot.val() });
    });
  }

  render() {
    let { data } = this.state

    return (
      <section>
        {
          data === null ? <Loader /> :
            <LayoutGrid>
              <LayoutGrid.Inner>
                <LayoutGrid.Cell cols="5">
                  <img src={data.image} alt={data.name} />
                </LayoutGrid.Cell>
                <LayoutGrid.Cell cols="7">
                  <h2>{data.name} (<small>{data.nik_name}</small>)</h2>
                  <p className={style.position}>{data.title}</p>
                  <p className={`d-flex align-items-center ${style.icon}`}>
                    <Icon>album</Icon> <span>{data.status}</span>
                  </p>
                  <LayoutGrid.Inner>
                    <LayoutGrid.Cell cols="6">
                      <List two-line>
                        <List.Item>
                          <List.TextContainer>
                            <List.PrimaryText>Birthday</List.PrimaryText>
                            <List.SecondaryText>{data.birth}</List.SecondaryText>
                          </List.TextContainer>
                        </List.Item>
                        <List.Item>
                          <List.TextContainer>
                            <List.PrimaryText>Languages</List.PrimaryText>
                            <List.SecondaryText>{data.lang}</List.SecondaryText>
                          </List.TextContainer>
                        </List.Item>
                      </List>
                    </LayoutGrid.Cell>
                    <LayoutGrid.Cell cols="6">
                      <List two-line>
                        <List.Item>
                          <List.TextContainer>
                            <List.PrimaryText>Email</List.PrimaryText>
                            <List.SecondaryText>{data.email}</List.SecondaryText>
                          </List.TextContainer>
                        </List.Item>
                        <List.Item>
                          <List.TextContainer>
                            <List.PrimaryText>Skype</List.PrimaryText>
                            <List.SecondaryText>{data.skype}</List.SecondaryText>
                          </List.TextContainer>
                        </List.Item>
                      </List>
                    </LayoutGrid.Cell>
                    <LayoutGrid.Cell cols="12">
                      <p className={style.summary}>{data.short_desc}</p>
                    </LayoutGrid.Cell>
                  </LayoutGrid.Inner>

                </LayoutGrid.Cell>
              </LayoutGrid.Inner>
            </LayoutGrid>
        }
      </section>
    );
  }
}