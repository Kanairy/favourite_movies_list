import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';
import initialState from '../initialState';

describe('App Component', () => {
  const wrapper = shallow(<App />);

  it('should render children', () => {
    expect(typeof wrapper.props().children).toBe('object');
  });
});

describe('App Component initial State', () => {
  const wrapper = shallow(<App />);
  wrapper.setState(initialState);

  it('should initialise with searchValue as empty string', () => {
    expect(wrapper.state().searchValue).toEqual('');
  });

  it('should initialise with sortyBy set to Title_Asc', () => {
    expect(wrapper.state().sortBy).toEqual('Title_Asc');
  });

  it('should initialise with favouriteMovies set to empty array', () => {
    expect(wrapper.state().favouriteMovies.length).toEqual(0);
    expect(typeof wrapper.state().favouriteMovies).toEqual('object');
  });
});

describe('App Component Method #addToFavourites', () => {
  const wrapper = shallow(<App />);
  wrapper.setState(initialState);

  it('should update state when called', () => {
    const testMovie = { Title: 'test', Year: 'test', imdbId: 123 };
    wrapper.instance().handleAddToFavourites(testMovie);
    expect(wrapper.state().favouriteMovies[0].Title).toEqual('test');
  });
});

describe('App Component Method #handleSearchInput', () => {
  const wrapper = shallow(<App />);
  wrapper.setState(initialState);

  it('should update state with provided string', () => {
    wrapper.instance().handleSearchInput('test query');
    expect(wrapper.state().searchValue).toEqual('test query');
  });
});

describe('App Component Method #handleSetSortBy', () => {
  const wrapper = shallow(<App />);
  wrapper.setState(initialState);

  it('should update state with provided an event object', () => {
    const testEvent = { target: { value: 'Title_Desc' } };
    wrapper.instance().handleSetSortBy(testEvent);
    expect(wrapper.state().sortBy).toEqual('Title_Desc');
  });
});
