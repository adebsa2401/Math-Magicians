import renderer from 'react-test-renderer';
import CalculatorPage from '../../pages/CalculatorPage';

export default () => it('The CalculatorPage component renders correctly', () => {
  const tree = renderer.create(<CalculatorPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
