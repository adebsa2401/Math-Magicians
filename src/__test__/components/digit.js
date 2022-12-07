import renderer from 'react-test-renderer';
import Digit from '../../components/Digit';

export default () => describe('The Digit component renders correctly', () => {
  it('The Digit component renders correctly with label 0', () => {
    const tree = renderer.create(
      <Digit
        label="0"
        calculatorState={() => {}}
        updateState={() => {}}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('The Digit component renders correctly with label 1', () => {
    const tree = renderer.create(
      <Digit
        label="1"
        calculatorState={() => {}}
        updateState={() => {}}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('The Digit component renders correctly with label +', () => {
    const tree = renderer.create(
      <Digit
        label="+"
        calculatorState={() => {}}
        updateState={() => {}}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
