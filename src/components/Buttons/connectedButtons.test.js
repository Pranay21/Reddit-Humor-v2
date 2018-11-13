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
      current: 0
    }
  });

  function renderComponent(props = requiredProps()) {
    return shallow(<Buttons store={store} {...props} />);
  }
  describe("Given mapDispatchToProps", () => {
    it("should contain a function of setCurrentIndex", () => {
      const component = renderComponent();
      expect(component.props().setCurrentIndex).to.be.a.function();
    });

    it("should contain a function of setNsfw", () => {
      const component = renderComponent();
      expect(component.props().setNsfw).to.be.a.function();
    });

    it("should contain a function of increaseLikes", () => {
      const component = renderComponent();
      expect(component.props().increaseLikes).to.be.a.function();
    });

    it("contains a prop of likes", () => {
      const component = renderComponent();
      expect(component.props().likes).to.equal({});
      expect(component.props().likes.id).to.equal(undefined);
    });

    it("contains a prop of images", () => {
      const component = renderComponent();
      expect(component.props().images).to.equal({});
      expect(component.props().images.id).to.equal(undefined);
    });

    it("contains a prop of nsfw", () => {
      const component = renderComponent();
      expect(component.props().nsfw).to.equal({});
      expect(component.props().nsfw.id).to.equal(undefined);
    });

    it("contains a prop of current", () => {
      const component = renderComponent();
      expect(component.props().current).to.equal(0);
      expect(component.props().current.id).to.equal(undefined);
    });
  });
});
