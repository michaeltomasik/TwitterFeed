import { mount } from "enzyme";
import { act } from "react-dom/test-utils";

import TwitterModule from "./index";
import backendUrl from "../../consts";
import { twitterDataSample } from "../../consts/testData";

// Codesandbox does not support jest.mock() and jest.useFakeTimers()
// Everything is described here
// https://github.com/codesandbox/codesandbox-client/issues/513
jest.mock("./axiosConfig", () => {
  return {
    baseURL: backendUrl,
    request: jest.fn().mockResolvedValue({
      data: twitterDataSample
    })
  };
});

describe("TwitterModule", () => {
  let wrapper;

  it("renders without crashing", async () => {
    await act(async () => {
      wrapper = mount(<TwitterModule />);
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it("pauses data update when API crashes", async () => {});
  it("fetches data every 2 seconds", async () => {});
});
