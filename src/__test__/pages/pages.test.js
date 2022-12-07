import testHomePage from './HomePage';
import testQuotePage from './QuotePage';
import testCalculatorPage from './CalculatorPage';

describe('All pages renders correctly', () => {
  testHomePage();
  testQuotePage();
  testCalculatorPage();
});
