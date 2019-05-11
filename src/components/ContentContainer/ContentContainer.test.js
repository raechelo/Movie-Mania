import React from 'react';
import { shallow } from 'enzyme';

describe('ContentContainer', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <ContentContainer /> )
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot()
  })
})