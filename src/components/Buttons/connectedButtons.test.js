import Buttons from "./connectedButtons";
import React from "react";

import { expect } from "code";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import { setCurrentIndex, setNsfw, increaseLikes } from "../../actions/humor";

describe("Given connectedButtons", () => {
  function requiredProps(overrides = {}) {
    return { setCurrentIndex, setNsfw, increaseLikes, ...overrides };
  }
  const mockStore = configureMockStore();
  const store = mockStore({
    humor: {
      images: {},
      likes: {},
      nsfw: {},
      current: 0,
      gifDuration: {}
    }
  });

  function renderComponent(props = requiredProps()) {
    return shallow(<Buttons store={store} {...props} />);
  }
  describe("Given mapDispatchToProps", () => {
    it("should contain a prop of setCurrentIndex", () => {
      const component = renderComponent();
      expect(component.props().setCurrentIndex).to.be.a.function();
    });

    it("should contain a prop of setNsfw", () => {
      const component = renderComponent();
      expect(component.props().setNsfw).to.be.a.function();
    });

    it("should contain a prop of increaseLikes", () => {
      const component = renderComponent();
      expect(component.props().increaseLikes).to.be.a.function();
    });
  });

  describe("Given mapStateToProps", () => {});
});
