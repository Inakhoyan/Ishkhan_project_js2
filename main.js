const img = document.querySelector("#img");

fetch("https://random.dog/woof.json")
  .then((n) => {
    return n.json();
  })
  .then((cons) => {
    img.setAttribute("src", cons.url);
  });
