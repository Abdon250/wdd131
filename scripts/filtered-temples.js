const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', function (e) {
    e.preventDefault();
    navLinks.classList.toggle('show');
    
    if (navLinks.classList.contains("show")){
       menuToggle.textContent = "✖";
    } else {
        menuToggle.textContent = "☰";
    }
});

const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastmodified").textContent = document.lastModified;


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 53500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-8154.jpg"
  },

  {
    templeName: "Bern Switzerland",
    location: "Bern, Switzerland",
    dedicated: "1955, September, 11",
    area: 8700,
    imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/bern-switzerland-temple-lds-784288-wallpaper.jpg"


  },
  
  {
  templeName: "Accra Ghana",
  location: "Accra, Ghana",
  dedicated: "2004, January, 11",
  area: 17500,
  imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760.jpg"
  }
];



function getYear(dedicatedDate) {
  return new Date(dedicatedDate).getFullYear();
}

const templeContainer = document.querySelector(".figures");

function displayTemples(templeList, title = "All Temples") {
  document.getElementById("page-title").textContent = title;
  templeContainer.innerHTML = "";

  templeList.forEach(temple => {
    const templeCard = document.createElement("div");
    templeCard.classList.add("temple-card");

    const name = document.createElement("h2");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

    const dedicated = document.createElement("p");
    dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

    const area = document.createElement("p");
    area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

    const image = document.createElement("img");
    image.src = temple.imageUrl;
    image.alt = `${temple.templeName} Temple`;
    image.loading = "lazy";

    templeCard.append(name, location, dedicated, area, image);
    templeContainer.appendChild(templeCard);

  });
}

displayTemples(temples);

document.getElementById("home").addEventListener("click", function(e) {
  e.preventDefault();
  displayTemples(temples, "All Temples");
});

document.getElementById("old").addEventListener("click", function(e) {
  e.preventDefault();
  const oldTemples = temples.filter(t => getYear(t.dedicated) < 1900);
  displayTemples(oldTemples, "Old Temples (Before 1900)");
});

document.getElementById("new").addEventListener("click", function(e) {
  e.preventDefault();
  const newTemples = temples.filter(t => getYear(t.dedicated) > 2000);
  displayTemples(newTemples, "New Temples (After 2000)");
});

document.getElementById("large").addEventListener("click", function(e) {
  e.preventDefault();
  const largeTemples = temples.filter(t => t.area > 90000);
  displayTemples(largeTemples, "Large Temples (> 90,000 sq ft)");
});

document.getElementById("small").addEventListener("click", function(e) {
  e.preventDefault();
  const smallTemples = temples.filter(t => t.area < 10000);
  displayTemples(smallTemples, "Small Temples (< 10,000 sq ft)");
});

