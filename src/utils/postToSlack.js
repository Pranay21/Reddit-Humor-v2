var urlWebHook =
  "https://hooks.slack.com/services/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";

const posted = [];

export default function sendToSlack(
  message = "hello world",
  imageUrl = "https://media.giphy.com/media/xThuWjDsB8IbJggCME/giphy.gif",
  imageId
) {
  const payload = {
    text: message,
    attachments: [
      {
        fallback: "this image failed to post",
        text: ``,
        image_url: `${imageUrl}`,
        thumb_url: `${imageUrl}`
      }
    ]
  };

  if (posted.includes(imageId)) {
    console.log(Error("that's already been posted"));
  } else {
    posted.push(imageId);
    return fetch(urlWebHook, {
      method: "post",
      body: JSON.stringify(payload)
    });
  }
}
