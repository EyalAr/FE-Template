import React from "react";
import { shallow } from "enzyme";
import should from "should";

import Greeting from "../../../../app/comps/greeting";

describe("<Greeting />", () => {

    it("should display 'Please Wait...' when ready=false", () => {
        const wrapper = shallow(<Greeting ready={false} />);
        wrapper.render().text().should.equal("Please wait...");
    });

    it("should display 'Ready, hello' when ready=true", () => {
        const wrapper = shallow(<Greeting ready={true} />);
        wrapper.render().text().should.equal("Ready, hello");
    });

});
