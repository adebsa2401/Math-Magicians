import renderer from 'react-test-renderer';
import App from '../App';

it('The App component renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
