import React from "react";
import { shallow } from "enzyme";
import should from "should";
import CircularProgress from "material-ui/CircularProgress";
import FontIcon from "material-ui/FontIcon";
import Greeting from "../../../../app/comps/greeting";

describe("<Greeting />", () => {

    it("should display only a circular progress", () => {
        const wrapper = shallow(<Greeting ready={false} />);
        wrapper.find(CircularProgress).should.have.length(1);
        wrapper.find(FontIcon).should.have.length(0);
    });

    it("should display only an icon", () => {
        const wrapper = shallow(<Greeting ready={true} />);
        wrapper.find(FontIcon).should.have.length(1);
        wrapper.find(CircularProgress).should.have.length(0);
    });

});
