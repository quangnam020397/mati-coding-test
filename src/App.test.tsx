import { describe, expect, it } from 'vitest';
import App from './App';
import { render, screen, userEvent } from './utils/test-utils';
import dayjs from 'dayjs';
describe('mati coding app testing', () => {
  // describe -> Used to group the test and used to describe what is currently being tested
  it('the title is visible', () => {
    // it or test -> Individual test which is run by Vitest. It can either pass or fail
    render(<App />);
    const currenDay = dayjs().startOf('week').format('DD/MM/YYYY');

    expect(screen.getByText(currenDay)).toBeInTheDocument();
    // expect -> is used to create assertions. In this context assertions are functions that can be called to assert a statement.
  });
});
