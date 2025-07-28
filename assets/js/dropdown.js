let dropdownfields = document.querySelector(".dropdownfields");

const arr = ["Town Hall!townhall","Fresh Tracks!freshtracks","Little Shop of Horrors!littleshopofhorrors","Swing of the Sea!swingofthesea","Musical Theatre Workshop!musictheatreworkshop","Fall Student Showcase!fallstudentshowcase","Doctor Faustus!doctorfaustus","The Maids!themaids","Fun Home!funhome","The Seagull!theseagull","Seussical!seussical","Peter and the Starcatcher!peterstarcatcher"];

arr.forEach(value=>{
  const words = value.split('!');
  const currentElement = document.createElement("div");
  currentElement.innerHTML = '<div class="dropdown-text"><a href="https://jbenedict.com/portfolio/' + words[1] + '" target="_top" class="dropdown-text">' + words[0] + '</a></div>';
  dropdownfields.appendChild(currentElement);
})
