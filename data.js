// ====== MODE TOGGLE ======
const body = document.body;
const modeToggle = document.getElementById("modeToggle");
const savedMode = localStorage.getItem("mode");

if (savedMode === "dark") {
  body.classList.add("dark-mode");
  body.classList.remove("light-mode");
} else {
  body.classList.add("light-mode");
  body.classList.remove("dark-mode");
}

function toggleMode() {
  const isDark = body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode", !isDark);
  localStorage.setItem("mode", isDark ? "dark" : "light");
}
if (modeToggle) modeToggle.addEventListener("click", toggleMode);

// ====== DATA ARTIS ======
const dataArtis = {
  tenxi: {
    nama: "Tenxi",
    foto: ["tenxi1.png", "tenxi2.png", "tenxi3.png"]
  },
  bernadya: {
    nama: "Bernadya",
    foto: ["bernadya1.jpg", "bernadya2.jpg", "bernadya3.jpg"]
  }
};

// ====== GENERATE GALERI OTOMATIS ======
const galeriContainer = document.getElementById("galeri");
if (galeriContainer) {
  Object.keys(dataArtis).forEach((key) => {
    const artis = dataArtis[key];
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <img src="${artis.foto[0]}" alt="${artis.nama}">
      <p>${artis.nama}</p>
    `;
    div.onclick = () => window.location.href = `detail.html?nama=${key}`;
    galeriContainer.appendChild(div);
  });
}

// ====== DAFTAR LAGU ======
const daftarLagu = [
  { judul: "So Asu", penyanyi: "Naykila", file: "soasu.mp3" },
  { judul: "Wahatever", penyanyi: "Oasis", file: "whatever.mp3" },
  { judul: "Apa Mungkin", penyanyi: "Bernadya", file: "apamungkin.mp3" },
  { judul: "Bayangkan", penyanyi: "Hindia", file: "bayangkan.mp3" },
  { judul: "Puting Beliung", penyanyi: "Tenxi", file: "beliung.mp3" },
  { judul: "Berubah", penyanyi: "Tenxi", file: "berubah.mp3" },
  { judul: "Best Friend", penyanyi: "Rex", file: "bestfriend.mp3" },
  { judul: "Bintang 5", penyanyi: "Tenxi", file: "bintang5.mp3" },
  { judul: "Bukan Tipemu", penyanyi: "gtw", file: "bukantipemu.mp3" },
  { judul: "Bunga Keaayanganku", penyanyi: "gtw", file: "bunga.mp3" },
  { judul: "Enjoy Drink", penyanyi: "gtw", file: "enjoydrink.mp3" },
  { judul: "Everything You Are", penyanyi: "Hindia", file: "aset/everything.mp3" },
  { judul: "Goodbye", penyanyi: "gtw", file: "goodbye.mp3" },
  { judul: "Happines", penyanyi: "gtw", file: "ahappiness.mp3" },
  { judul: "hoRRReg", penyanyi: "Tenxi", file: "hoRRReg.mp3" }, 
  { judul: "Janji Palsu", penyanyi: "gtw", file: "janjipalsu.mp3" },
  { judul: "Membasuh", penyanyi: "Hindia", file: "membasuh.mp3" }, 
  { judul: "Multo", penyanyi: "gtw", file: "multo.mp3" }, 
  { judul: "Multo V Indo", penyanyi: "gtw", file: "multo1.mp3" }, 
  { judul: "No S", penyanyi: "gtw", file: "no.mp3" }, 
  { judul: "Ours To Keep", penyanyi: "gtw", file: "ourstokeep.mp3" }, 
  { judul: "Paling Sabi", penyanyi: "Tenxi", file: "palingsabi.mp3" }, 
  { judul: "The Winer", penyanyi: "gtw", file: "thewiner.mp3" }, 
  { judul: "x", penyanyi: "gtw", file: "x.mp3" }, 
  { judul: " Yaudah Ku Selingkuh", penyanyi: "Tenxi", file: "yaudah.mp3" },
];

// ====== PEMUTAR AUDIO ======
let audio = new Audio();

// Fungsi untuk memutar lagu berdasarkan indeks
function putarLagu(index) {
  const lagu = daftarLagu[index];
  if (!lagu) return;

  audio.src = lagu.file;
  audio.play();
}

// Fungsi untuk memutar acak
function putarAcak() {
  const index = Math.floor(Math.random() * daftarLagu.length);
  putarLagu(index);
}