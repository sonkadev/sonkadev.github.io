let b1 = document.getElementsByClassName("box1")


function isMobileDevice() {
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

if (isMobileDevice()) {
  console.log("a kurva anyád");
  alert("this site only works properly on pcs")
}
