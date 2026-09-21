// Tempat nyimpan data sertifikat, berupa array objek
const certificateData = [
  {
    id: 1,
    title: "AI Engineer Cohort",
    category: "ai-engineer",
    tag: "AI Engineer",
    date: "2026",
    image: "assets/images/sertifikat/ai engineer.jpg",
  },
  {
    id: 2,
    title: "Wordpress Development",
    category: "full-stack",
    tag: "Full Stack Developer",
    date: "2026",
    image: "assets/images/sertifikat/wordpress development.jpg",
  },
  {
    id: 3,
    title: "UI Design Improvement",
    category: "ui-ux",
    tag: "UI/UX Design",
    date: "2025",
    image: "assets/images/sertifikat/ui design improvement.jpg",
  },
  {
    id: 4,
    title: "Design Documentation",
    category: "ui-ux",
    tag: "UI/UX Design",
    date: "2025",
    image: "assets/images/sertifikat/Design Documentation.jpg",
  },
  {
    id: 5,
    title: "Designing Dashboard UI",
    category: "ui-ux",
    tag: "UI/UX Design",
    date: "2025",
    image: "assets/images/sertifikat/Designing Dashboard UI.jpg",
  },
  {
    id: 6,
    title: "Figma Tools",
    category: "ui-ux",
    tag: "UI/UX Design",
    date: "2025",
    image: "assets/images/sertifikat/Figma Tools.jpg",
  },
  {
    id: 7,
    title: "Introduction To Figma",
    category: "ui-ux",
    tag: "UI/UX Design",
    date: "2025",
    image: "assets/images/sertifikat/Introduction To Figma.jpg",
  },
  {
    id: 8,
    title: "Making Design System",
    category: "ui-ux",
    tag: "UI/UX Design",
    date: "2025",
    image: "assets/images/sertifikat/Making Design System.jpg",
  },
  {
    id: 9,
    title: "Making Hi-Fi For Ui Design",
    category: "ui-ux",
    tag: "UI/UX Design",
    date: "2025",
    image: "assets/images/sertifikat/Making Hi-Fi For Ui Design.jpg",
  },
  {
    id: 10,
    title: "UX Fundamental",
    category: "ui-ux",
    tag: "UI/UX Design",
    date: "2025",
    image: "assets/images/sertifikat/UX Fundamental.jpg",
  },
  {
    id: 11,
    title: "Defining Product Before Design",
    category: "ui-ux",
    tag: "UI/UX Design",
    date: "2025",
    image: "assets/images/sertifikat/Defining Product Before Design.jpg",
  },
  {
    id: 12,
    title: "Working With Widgets",
    category: "cms",
    tag: "Content Management System",
    date: "2025",
    image: "assets/images/sertifikat/working-with-widgets.jpg",
  },
  {
    id: 13,
    title: "Wordpress Theme",
    category: "cms",
    tag: "Content Management System",
    date: "2025",
    image: "assets/images/sertifikat/wordpress-theme.jpg",
  },
  {
    id: 14,
    title: "Working Settings",
    category: "cms",
    tag: "Content Management System",
    date: "2025",
    image: "assets/images/sertifikat/wordpress-settings.jpg",
  },
  {
    id: 15,
    title: "Wordpress Plugins",
    category: "cms",
    tag: "Content Management System",
    date: "2025",
    image: "assets/images/sertifikat/wordpress-plugins.jpg",
  },
  {
    id: 16,
    title: "Wordpress Installation",
    category: "cms",
    tag: "Content Management System",
    date: "2025",
    image: "assets/images/sertifikat/wordpress-installation.jpg",
  },
  {
    id: 17,
    title: "Wordpress Backup",
    category: "cms",
    tag: "Content Management System",
    date: "2025",
    image: "assets/images/sertifikat/wordpress-backup.jpg",
  },
  {
    id: 18,
    title: "User Administration In Wordpress",
    category: "cms",
    tag: "Content Management System",
    date: "2025",
    image: "assets/images/sertifikat/user-andiministration-in-wordpress.jpg",
  },
  {
    id: 19,
    title: "SEO Integration To Wordpress",
    category: "cms",
    tag: "Content Management System",
    date: "2025",
    image: "assets/images/sertifikat/seo-integration-to-wordpress.jpg",
  },
  {
    id: 20,
    title: "Pages, Posting, Menu On Wordpress",
    category: "cms",
    tag: "Content Management System",
    date: "2025",
    image: "assets/images/sertifikat/pages, posting, menu on wordpress.jpg",
  },
  {
    id: 21,
    title: "Introduction To Content Management System",
    category: "cms",
    tag: "Content Management System",
    date: "2025",
    image:
      "assets/images/sertifikat/introduction-to-content-management-system.jpg",
  },
  {
    id: 22,
    title: "Creating Custom Plugins",
    category: "cms",
    tag: "Content Management System",
    date: "2025",
    image: "assets/images/sertifikat/creating-custom-plugin.jpg",
  },
  {
    id: 23,
    title: "Belajar Fundamental Deep Learning",
    category: "ai-engineer",
    tag: "AI Engineer",
    date: "2026",
    image: "assets/images/sertifikat/belajar_fundamental_deep_learning.jpg",
  },
  {
    id: 24,
    title: "Belajar Machine Learning Untuk Pemula",
    category: "ai-engineer",
    tag: "AI Engineer",
    date: "2026",
    image: "assets/images/sertifikat/belajar_machine_learning_untuk_pemula.jpg",
  },
  {
    id: 25,
    title: "Membangun Sistem Machine Learning",
    category: "ai-engineer",
    tag: "AI Engineer",
    date: "2026",
    image: "assets/images/sertifikat/membangun sistem machine learning.jpg",
  },
  {
    id: 26,
    title: "Memulai Pemrograman dengan Python",
    category: "ai-engineer",
    tag: "AI Engineer",
    date: "2026",
    image: "assets/images/sertifikat/Memulai pemrograman dengan Python.jpg",
  },
  {
    id: 27,
    title: "Belajar Dasar Pemrograman Web",
    category: "full-stack",
    tag: "Full Stack Developer",
    date: "2026",
    image: "assets/images/sertifikat/Belajar Dasar Pemrograman Web.jpg",
  },
  {
    id: 28,
    title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang",
    category: "full-stack",
    tag: "Full Stack Developer",
    date: "2026",
    image:
      "assets/images/sertifikat/Memulai Dasar Pemrograman untuk Menjadi Pengembang.jpg",
  },
  {
    id: 29,
    title: "Pengenalan ke Logika Pemrograman",
    category: "full-stack",
    tag: "Full Stack Developer",
    date: "2026",
    image:
      "assets/images/sertifikat/Pengenalan ke Logika Pemrograman (Programming Logic 101).jpg",
  },
  {
    id: 30,
    title: "Belajar Dasar AI",
    category: "full-stack",
    tag: "Full Stack Developer",
    date: "2026",
    image: "assets/images/sertifikat/Belajar Dasar AI.jpg",
  },
  {
    id: 31,
    title: "Belajar Dasar Git dengan GitHub",
    category: "full-stack",
    tag: "Full Stack Developer",
    date: "2026",
    image: "assets/images/sertifikat/Belajar Dasar Git dengan GitHub.jpg",
  },
  {
    id: 32,
    title: "Belajar Dasar Pemrograman JavaScript",
    category: "full-stack",
    tag: "Full Stack Developer",
    date: "2026",
    image: "assets/images/sertifikat/Belajar Dasar Pemrograman JavaScript.jpg",
  },
  {
    id: 33,
    title: "Belajar Membuat Front-End Web untuk Pemula",
    category: "full-stack",
    tag: "Full Stack Developer",
    date: "2026",
    image:
      "assets/images/sertifikat/Belajar Membuat Front-End Web untuk Pemula.jpg",
  },
];

// Menangkap elemen html kemudian mengubah objek menjadi teks html

// Menangkap wadah galeri dari HTML
const galleryGrid = document.querySelector("#galleryGrid");

// Dibuatnya fungsi untuk mengubah data array objek sertifikat diatas menjadi string template html.
const renderCertificates = (list) => {
  // Mengubah setiap objek di dalam array menjadi string teamplate HTML
  const cardsHTML = list
    .map((cert) => {
      return /*html*/ `
    <article class="cert-card" data-category="${cert.category}">
          <div class="card-img-wrapper">
              <img src="${cert.image}" alt="${cert.title}" class="cert-img">
          </div>
          <div class="card-body">
              <span class="card-tag">${cert.tag}</span>
              <h2 class="card-title">${cert.title}</h2>
              <p class="card-date">${cert.date}</p>
          </div>
    </article>
    `;
    })
    .join(""); // ! Untuk satukan semua string kartu menjadi satu teks panjang.

  // * Perlu tempelkan seluruh HTML kartu ke dalam wadah galeri
  galleryGrid.innerHTML = cardsHTML;
};

// * Untuk memanggil fungsi agar dapat ditampilkan dengan mengisi argument certificateData
renderCertificates(certificateData);
