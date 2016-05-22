import React from "react";
import { shallow } from "enzyme";
import should from "should";

import App from "../../app/app";
import Greeting from "../../app/comps/greeting";

describe("<App />", () => {

    it("should render one Greeting element", () => {
        const wrapper = shallow(<App />);
        wrapper.find(Greeting).should.have.length(1);
    });

});
