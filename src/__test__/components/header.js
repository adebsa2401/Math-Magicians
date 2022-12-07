import {
  createBrowserRouter, createRoutesFromElements, Route, RouterProvider,
} from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from '../../components/Header';

export default () => it('The Header component renders correctly', () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Header />} />,
    ),
  );

  const tree = renderer.create(<RouterProvider router={router} />).toJSON();
  expect(tree).toMatchSnapshot();
});
