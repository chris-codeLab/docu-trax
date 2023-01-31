import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import notfoundComponent from '../../js/components/notfound.component';
import renderer from 'react-test-renderer'

describe('<notfoundComponent />', () => {
  it('renders the correct elements', () => {
    const wrapper = mount(
      <notfoundComponent />
    );
    expect(wrapper.find('h1')).toExist();
    expect(wrapper.find('p')).toExist();
    expect(wrapper.find('Link')).toExist();
    });
});