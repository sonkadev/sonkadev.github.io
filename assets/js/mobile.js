 

function isMobileDevice() {
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

if (isMobileDevice()) {
  console.log("a kurva anyád");
  alert("this site only works properly on pcs");
  document.body.style.display = "flex";
  document.body.style.flexDirection = "row";
  const div = document.getElementById("box1");
  div.style.width = "75vw";
  div.style.height = "20vh";
  document.body.style.fontSize = "5vw";
}
