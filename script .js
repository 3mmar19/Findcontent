const API_KEY = "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";
topic = "";
length = "";
titles = "";
script = "";
document.getElementById("submit-btn").addEventListener("click", function () {
  saveInputs();
  sendToChatGPT();
});
function saveInputs() {
  topic = document.getElementById("word-input1").value;
  length = document.getElementById("word-input2").value;
}

async function sendToChatGPT() {
  let value = `I want you to act as a viral YouTube title creator.
Think of titles that are catchy and attention-grabbing,
and will encourage people to click and watch the video.
The titles should be short, concise, and direct. They should also be creative and clever.
Try to come up with titles that are unexpected and surprising. Do not use titles that are too generic,
or titles that have been used too many times before, show 5 titles; end of every title add a dolar sign symbol.  ${topic}. `;

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: value }],
    }),
  };
  try {
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    );
    const data = await response.json();
  const messageContent = data.choices[0].message.content;

  let titles = messageContent.split("$");
  let titleDisplayArea = document.getElementById("reply-content");
  titleDisplayArea.textContent = ""; // Clear the content area before appending titles
  for (let i = 0; i < titles.length; i++) {
    const textObject = document.createElement("h4");
    textObject.textContent = titles[i];
    titleDisplayArea.appendChild(textObject);
  }
      } catch (error) {
        console.log(error);
      }
  

  sendToChatGPT2();
}

async function sendToChatGPT2() {
  let value = `I want you to act as a viral YouTube thumbnail
creator. Think of thumbnails that are catchy and attention-grabbing,
and will encourage people to click and watch the video. I will provide you with 5 Titles; end of every thumbnail add a dolar sign symbol, and you will suggest thumbnails for each
describe what is in the thumbnail very well and be as detailed as you can, so desginers can understnad and create. Here are the titles ${titles}.`;

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: value }],
    }),
  };

  try {
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    );
    const data = await response.json();
  const messageContent = data.choices[0].message.content;

  let thum = messageContent.split("$");
  document.getElementById("reply-content2").textContent = data.choices[0].message.content;
  let titleDisplayArea = ""; // Clear the content area before appending titles

  for (let i = 0; i < thum.length; i++) {
    const textObject = document.createElement("h5");
    textObject.textContent = thum[i];
    titleDisplayArea.appendChild(textObject);
  }
      } catch (error) {
        console.log(error);
      }

  sendToChatGPT3();
}

async function sendToChatGPT3() {
  let value = `Act as a professional YouTube video script writer
and create an engaging script for a ${length} minute video.
Think outside the box and come up with a creative, witty,
and captivating script that people would be interested in watching and sharing.
Utilize techniques to generate more engagement in the narration script. 
Create a timeline and stick to it for up to ${length} minutes
of spoken narration.

THE Topic IS: ${topic}`;

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: value }],
    }),
  };

  try {
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    );
    const data = await response.json();
    console.log(data.choices[0].message.content);
    document.getElementById("reply-content3").textContent =
      data.choices[0].message.content;
    script = data.choices[0].message.content;
  } catch (error) {
    console.log(error);
  }

  sendToChatGPT4();
}


async function sendToChatGPT4() {
  let value = `Act as if you're a social media expert,
Give me a 5 tweet; end of every tweet add a dolar sign symbol, thread based on the follwing youtube transcript: ${script}. 
The thread should be optimised for virality and contain 
hashtags and emoticons. Each tweet should not exceed 280 characters in length.`;

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: value }],
    }),
  };

  try {
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    );
    const data = await response.json();
    const messageContent = data.choices[0].message.content;

  let tweet = messageContent.split("$");
  let titleDisplayArea = document.getElementById("reply-content4");
  titleDisplayArea.textContent = ""; // Clear the content area before appending titles
  for (let i = 0; i < tweet.length; i++) {
    const textObject = document.createElement("h4");
    textObject.textContent = tweet[i];
    titleDisplayArea.appendChild(textObject);
  }
      } catch (error) {
        console.log(error);
      }
}


// document.getElementById("reply-content4").textContent =
//   data.choices[0].message.content;
