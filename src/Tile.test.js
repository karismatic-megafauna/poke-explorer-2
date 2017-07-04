import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from 'antd';
import { shallow } from 'enzyme';
import Tile from './Tile';

describe('<Tile />', () => {
  describe('is ivysaur', () => {
    const id = 2;
    const name = 'ivysaur';
    const src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png';
    const wrapper = shallow(<Tile name={name} key={name} />);

    test('passes capitalized name to <Card />', () => {
      const result = wrapper.find(Card).props().title;
      expect(result).toBe('Ivysaur')
    });

    test('passes id to extra', () => {
      const result = wrapper.find(Card).props().extra;
      expect(result).toBe(2);
    });

    test('passes a src to img', () => {
      const result = wrapper.find('img').props().src;
      expect(result).toBe(src);
    });

    test('passes an alt to img', () => {
      const result = wrapper.find('img').props().alt;
      expect(result).toBe(name);
    });
  });
});
