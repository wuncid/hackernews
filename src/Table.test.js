import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import Table from './Table';

Enzyme.configure({ adapter: new Adapter() });

describe('Table', () => {
  const onDismiss = () => {};
  const props = {
    list: [
      {
        title: 'Title 1',
        author: 'Author 1',
        num_comments: 1,
        points: 2,
        objectID: 'y',
      },
      {
        title: 'Title 2',
        author: 'Author 2',
        num_comments: 1,
        points: 2,
        objectID: 'z',
      },
    ],
    sortKey: 'TITLE',
    isSortReverse: false,
    onDismiss,
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Table {...props} />, div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Table {...props} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('shows two items in list', () => {
    const element = shallow(
      <Table {...props} />,
    );
    expect(element.find('.table-row').length).toBe(2);
  });
});
