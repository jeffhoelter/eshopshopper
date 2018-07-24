// __tests__/fetch.js
import React from 'react';
import { render, fireEvent, cleanup, waitForElement } from 'react-testing-library';
// this add custom jest matchers from jest-dom
import 'jest-dom/extend-expect';
import Games from './Games'; // see the tests for a full implementation

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

function mockFetch(data) {
  return jest.fn().mockImplementation(() => Promise.resolve(data));
}

test('Fetch makes an API call and displays the greeting when load-greeting is clicked', async () => {
  fetch = mockFetch(gamesData); // or window.fetch

  const { getByText, getByTestId, container } = render(<Games />);

  const spinnerNode = await waitForElement(() => getByTestId('spinner'));
  const gamesNode = await waitForElement(() => getByTestId('games-table'));

  expect(fetch.mock.calls.length).toEqual(1);

  expect(container.firstChild).toMatchSnapshot();
});

const gamesData = {
  games: [
    {
      categories: { category: ['Arcade', 'Multiplayer', 'Party', 'Puzzle'] },
      slug: 'breakforcist-battle-switch',
      buyitnow: 'false',
      release_date: 'Apr 12, 2018',
      digitaldownload: 'false',
      free_to_start: 'false',
      title: '#Breakforcist Battle',
      system: 'Nintendo Switch',
      id: 'oNfMa9bCbSistTheDdqCtqZ3Lwk_WBw8',
      ca_price: '12.99',
      number_of_players: 'up to 4 players',
      nsuid: '70010000003782',
      eshop_price: '9.99',
      front_box_art:
        'https://media.nintendo.com/nintendo/bin/S9233-zQTduo1uWckvUcVqikBSFMUzxZ/7hWl7WrFj-twgIgF1fB6a8Y74qMEGm59.png',
      game_code: 'HACNAK98A',
      buyonline: 'true'
    },
    {
      categories: { category: ['Party', 'Multiplayer', 'Action'] },
      slug: '1-2-switch',
      buyitnow: 'true',
      release_date: 'Mar 3, 2017',
      digitaldownload: 'false',
      free_to_start: 'false',
      title: '1-2-Switch',
      system: 'Nintendo Switch',
      id: 'QY7EtPDIW1WGVWSEkQ7ZVLvCFvonU-Wl',
      ca_price: '64.99',
      number_of_players: '2 players simultaneous',
      nsuid: '70010000000141',
      video_link: 'h1OTBqODE64B-g16PJeQj6tifbVKl_v8',
      eshop_price: '49.99',
      front_box_art:
        'https://media.nintendo.com/nintendo/bin/oiM2QlLg9frNJhSWvFGmi5NAvEAGlYVx/_3d_ldcR3G0YQl590uHXZ89Jmouu5aS9.png',
      game_code: 'HACPAACCA',
      buyonline: 'true'
    },
    {
      categories: { category: ['Action', 'Racing', 'Party', 'Multiplayer'] },
      slug: '10-second-run-returns-switch',
      buyitnow: 'false',
      release_date: 'Jan 25, 2018',
      digitaldownload: 'false',
      free_to_start: 'false',
      title: '10 Second Run RETURNS',
      system: 'Nintendo Switch',
      id: 'lB42IGr_QVMVWBuNGlQMrnCVt73o4TXM',
      ca_price: '7.65',
      number_of_players: 'up to 4 players',
      nsuid: '70010000007261',
      eshop_price: '6.54',
      front_box_art:
        'https://media.nintendo.com/nintendo/bin/306P-NbgQp1QkTDZphv8wN_LTYItaai4/Sa59XowxYAGVmItNAStVkdlJW_1H4UHY.png',
      game_code: 'HACNAJ6TA',
      buyonline: 'true'
    },
    {
      categories: { category: ['Party', 'Action', 'Arcade', 'Sports'] },
      slug: '12-orbits-switch',
      buyitnow: 'false',
      release_date: 'Apr 27, 2018',
      digitaldownload: 'false',
      free_to_start: 'false',
      title: '12 orbits',
      system: 'Nintendo Switch',
      id: 'FCmxSDOXVjBPUjXIpXZzOzVtweFS8Uid',
      ca_price: '2.49',
      number_of_players: 'up to 12 players',
      nsuid: '70010000001029',
      eshop_price: '1.99',
      front_box_art:
        'https://media.nintendo.com/nintendo/bin/Wyxk2GXMk8JgfjClPzBxubYkC-XTQhus/t3ZW3jMKK9B8P37Avjp0PuiTbr-vst-t.png',
      game_code: 'HACNAEXMA',
      buyonline: 'true'
    }
  ]
};
