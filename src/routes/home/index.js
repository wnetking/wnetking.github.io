import { h, Component } from 'preact';
import Base from '../../components/base'
import style from './style';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<Base />
			</div>
		);
	}
}
