import React from 'react';
import ReactDOM, { render, unmountComponentAtNode } from 'react-dom';
import axiosMock from "axios";

import TestUtils, { act } from "react-dom/test-utils";
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('renders component', () => {
  let container = null;
  
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("renders search component", () => {
    act(() => {
      render(<App />, container);
    });
    
    expect(container.querySelector('[data-testid="search-input"]')).toBeTruthy();
  });

  describe('renders images if search criteria provided', () => {
    it('search images', async () => {
      const renderElem = TestUtils.renderIntoDocument(
        <App />
      );

      axiosMock.get.mockImplementationOnce(() =>
        Promise.resolve({
          data: { results: ["car.jpg"] }
        })
      );

      expect(TestUtils.findRenderedDOMComponentWithTag(renderElem, 'header')).toBeTruthy();

      const input = TestUtils.findRenderedDOMComponentWithTag(renderElem, 'input')
      const form = TestUtils.findRenderedDOMComponentWithTag(renderElem, 'form')
      const inputNode = ReactDOM.findDOMNode(input)
      expect(inputNode).toBeTruthy();

      inputNode.value = 'car';
      TestUtils.Simulate.change(inputNode);
      TestUtils.Simulate.submit(inputNode);
      
      expect(inputNode.value).toEqual('car');

      setTimeout(() => {
        expect(axiosMock.get).toHaveBeenCalledWith( 
        "https://api.unsplash.com/search/photos",
        {
          params: {
            client_id: process.env.REACT_APP_UNSPLASH_TOKEN,
            query: "car"
          }
        });

        expect(axiosMock.get).toHaveBeenCalledTimes(1);
        done();
      }, 0);
    });
  });
});
