import renderer from 'react-test-renderer';
import QuotePage from '../../pages/QuotePage';

export default () => it('The QuotePage component renders correctly', () => {
  const tree = renderer.create(<QuotePage />).toJSON();
  expect(tree).toMatchSnapshot();
});
