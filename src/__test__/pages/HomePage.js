import renderer from 'react-test-renderer';
import HomePage from '../../pages/HomePage';

export default () => it('The HomePage component renders correctly', () => {
  const tree = renderer.create(<HomePage />).toJSON();
  expect(tree).toMatchSnapshot();
});
