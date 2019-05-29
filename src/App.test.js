import React from "react";
import { shallow } from "enzyme";
//import toJson from "enzyme-to-json";
import Product from "./component/Product";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders using shallow", function() {
  // this test passes
  let product = {
    name: "tv",
    image_url: "image.jpg",
    description: "some desc"
  };
  shallow(<Product product={product} />);
});
