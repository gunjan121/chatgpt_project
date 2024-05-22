const toggleEle = document.getElementsByClassName("toggle")[0];

toggleEle.addEventListener("click", () => {
  var bodyTag = document.getElementsByClassName("body-style")[0];
  if (bodyTag.classList.contains("primary-body-color")) {
    bodyTag.classList.remove("primary-body-color");
    bodyTag.classList.add("secondary-body-color");
  } else {
    bodyTag.classList.remove("secondary-body-color");
    bodyTag.classList.add("primary-body-color");
  }

  // const html=document.querySelector('html')
  // console.log("html is",html)
  // if(html.classList.contains('dk'))
  //     {
  //         html.classList.remove('dk')
  //         // e.target.innerHTML='dark mode'

  //     }
  // else
  //     {
  //         html.classList.add('dk')
  //         // e.target.innerHTML='Light mode'
  //     }
});

// function    autoextend(textarea) {
//     // Get the current height of the textarea
//     var currentHeight = textarea.scrollHeight;

//     // Set the height of the textarea to be the same as its scroll height
//     textarea.style.height = currentHeight + 'px';
// }

function AutoExpendSeachbar(textarea) {
  textarea.style.height = "auto";

  textarea.style.height = textarea.scrollHeight + "px";
}

const btn = document.getElementsByClassName(".btn")[0];
console.log("button", btn);

const ary = [];

const API_KEY='AIzaSyDraz3RLUgfZTq2oKGT5Iz9fOJv8BrkoOU';
async function get_gemini_response(user_input) {
    const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;

    const request_body = {
      contents: [{ role: "user", parts: [{ text: user_input }] }],
    };

    const response = await fetch(GEMINI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request_body),
    });

    response_data = await response.json();

    response_content = response_data?.candidates[0]?.content?.parts[0]?.text;
    return response_content;
  }

document.getElementById("click_button").addEventListener("click", () => {
  console.log("ary value", ary);
   let question = document.getElementById('question_id').value;
   document.getElementById("loader").style.display = "block"
   document.getElementById("click_button").style.display = "none"

  document.getElementById("body-response").innerHTML = ary;
  document.getElementById("question_id").value = "";
 
  get_gemini_response(question).then(response => {
    document.getElementById("loader").style.display = "none"
    document.getElementById("click_button").style.display = "block"
    document.getElementById("response-div").innerText = response
  })
});
