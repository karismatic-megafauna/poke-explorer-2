import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Body from './Body';
import App from './App';

describe('<Body />', () => {
  const wrapper = shallow(<App />);
  test('renders 151 original pokemon on App Mount', () => {
    const result = wrapper.find(Body).props().list.length;
    expect(result).toBe(151);
  });

  test('filtering by search string', () => {
    wrapper.setState({ searchTerm: 'char' });
    const result = wrapper.find(Body).props().list.length;
    expect(result).toBe(3);
  });

  describe('sorting', () => {
    test('by defense', () => {
      wrapper.setState({ searchTerm: '', statSort: 'defense' });
      const result = wrapper.find(Body).props().list[0];
      expect(result).toBe('cloyster');
    });

    test('by attack', () => {
      wrapper.setState({ statSort: 'attack' });
      const result = wrapper.find(Body).props().list[0];
      expect(result).toBe('dragonite');
    });
  })
});
