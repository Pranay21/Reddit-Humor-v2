import { expect } from "code";
import sendToSlack from "./postToSlack";
import sinon from "sinon";

describe("Given a slack service", () => {
  let fetchStub;
  const urlWebHook =
    "https://hooks.slack.com/services/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";
  const mockGif = "https://media.giphy.com/media/xThuWjDsB8IbJggCME/giphy.gif";
  const mockMessage = "";
  const mockPosted = [];
  const mockId = "92h384";
  const mockId2 = "92h343";
  const mockId3 = "92h344";
  const mockPayload = {
    text: mockMessage,
    attachments: [
      {
        fallback: "this image failed to post",
        text: `${mockMessage}`,
        image_url: `${mockGif}`,
        thumb_url: `${mockGif}`
      }
    ]
  };

  beforeEach(() => {
    fetchStub = sinon.stub(global, "fetch");
  });

  afterEach(() => {
    sinon.restore();
  });

  describe("When the service is called successfully", () => {
    it("should post to slack webhook", () => {
      sendToSlack(mockMessage, mockGif, mockId2);
      sinon.assert.calledOnce(fetchStub);
      sinon.assert.calledWithExactly(fetchStub, urlWebHook, {
        method: "post",
        body: JSON.stringify(mockPayload)
      });
    });
  });

  describe("when the services is unsuccessful", () => {
    it("should return an error", () => {
      fetchStub.rejects(new Error("bork bork"));
      sendToSlack(mockMessage, mockGif, mockId3)
        .then(data => expect(data).to.be.undefined())
        .catch(err => expect(err).to.not.equal(undefined));
    });
  });

  describe("When the service is called with a image that has already been shared", () => {
    it("should throw a new Error", () => {
      mockPosted.push(mockId);
      fetchStub.rejects(new Error("that's already been posted"));
      sendToSlack(mockMessage, mockGif, mockId).then(err =>
        expect(err).to.equal("that's already been posted")
      );
    });
  });
});
