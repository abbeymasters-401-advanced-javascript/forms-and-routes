import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/components/App';

describe('App Component', () => {
  it('renders App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
