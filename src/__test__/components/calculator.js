import renderer from 'react-test-renderer';
import Calculator from '../../components/Calculator';

export default () => it('The Calculator component renders correctly', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
