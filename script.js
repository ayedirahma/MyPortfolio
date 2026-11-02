(function () {
  "use strict";
  var root = document.documentElement;

  /* ---------- Theme toggle (persisted) ---------- */
  var toggle = document.getElementById("themeToggle");
  function isDark() {
    var t = root.getAttribute("data-theme");
    if (t) return t === "dark";
    return (
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }
  function syncToggle() {
    toggle.setAttribute(
      "aria-label",
      isDark() ? "Switch to light mode" : "Switch to dark mode"
    );
  }
  toggle.addEventListener("click", function () {
    var next = isDark() ? "light" : "dark";
    root.classList.add("theme-anim");
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("portfolio-theme", next);
    } catch (e) {}
    syncToggle();
    setTimeout(function () {
      root.classList.remove("theme-anim");
    }, 300);
  });
  syncToggle();

  /* ---------- Bookcase data ---------- */
  var books = [
    {
      title: "E-cantine",
      tag: "POO-02",
      year: "2026",
      stack: "Java, SpringBoot, MySQL",
      w: 76,
      h: 330,
      bg: "#C2452D",
      ink: "#FFFFFF",
      mono: false,
      over: "A web platform to manage the university restaurant meal registrations, menu planning, capacity tracking, and role-based access",
      context: "University restaurant at IHEC Carthage, serving hundreds daily. Meal sign-ups, menus, and room capacity were managed manually.",
      problem: "How to build a centralized, secure, multi-user web app for meal reservations, menu planning, and capacity tracking.",
      decisions: "Chose Spring Boot over JavaFX for remote access. Added three roles (student, staff, admin). Adopted layered architecture with JPA. Exposed a REST API.",
      process: "Use case diagram, class diagrams, sequence diagram, Postman/Swagger tests.",
      outcome: "Real persistence, role-based access, and a multi-user web app. Next: demand forecasting analytics.",
      images: [
        { src: "images/Ecantine/loginpage.png", caption: "login page" },
      ],
      demoUrl: "",
      githubUrl: "https://github.com/ayedirahma/Restaurant_universitaire"
    },
    {
      title: "Crimes prediction",
      tag: "Data-03",
      year: "2026",
      role: "Solo project",
      stack: "Python, Pandas, Seaborn, Scikit-Learn",
      w: 72,
      h: 308,
      bg: "#2B3A42",
      ink: "#F2F0EA",
      mono: true,
      over: "EDA and K-Means clustering on US crime data to group states by crime profiles",
      context: "Analyzed a 50-state crime dataset (murder, theft, assault) to find regional similarities",
      problem: "How to group states by crime patterns to optimize law enforcement resources?",
      decisions: "Standardized data with StandardScaler. Used Elbow Method and Silhouette Score to find the optimal K",
      process: "EDA with heatmaps and boxplots. Evaluated K=2 vs K=4 using Seaborn pairplots",
      outcome: "Grouped states into 4 distinct clusters based on crime severity for targeted interventions",
      images: [{src: "images/crimes/coorelation_crime.png", caption: "Correlation Heatmap of Crime Variables"}],
      demoUrl: "demos/crimesdemo.html",
      githubUrl: ""
    },
    {
      title: "HlouDari Platform",
      tag: "NLP-05",
      year: "2026",
      role: "Team of two",
      stack: "Java, SpringBoot, MySQL",
      w: 70,
      h: 296,
      bg: "#DCE9E1",
      ink: "#141414",
      mono: false,
      over: "Spring Boot, Thymeleaf, and MySQL e-commerce and invoicing solution.",
      context: "HlouDari is a traditional Tunisian patisserie specializing in artisanal sweets",
      problem: "The business lacks a digital catalogue and relies on manual, paper-based invoicing",
      decisions: "Centralized admin dashboard, automated invoice tracking, and a modern digital catalogue",
      process: "Database schema, Spring Boot architecture, and responsive UI components",
      outcome: "A streamlined digital platform that modernizes sales and saves administrative time",
      images: [{ src: "images/hloudari/HlouDari.png", caption: "Hlou dari Catalogue" }],
      demoUrl: "demos/hloudari_demo.html",
      githubUrl: ""
    },
    {
      title: "Healthy Meal Predictor",
      tag: "VIZ-06",
      year: "2025",
      role: "Designer, developer",
      stack: "Python , PySide6, Scikit-learn, Pandas",
      w: 62,
      h: 272,
      bg: "#4A3B2E",
      ink: "#F6F4EF",
      mono: true,
      over: "stack: Python, PySide6, Scikit-Learn, Pandas",
      context: "Built to explore how machine learning can analyze food choice datasets and provide instant, personalized health feedback",
      problem: "Placeholder problem.",
      decisions: "Placeholder decisions.",
      process: "Placeholder process.",
      outcome: "Placeholder outcome.",
      images: [{src:"images/healthy/cover.png", caption:"Healthy Meal Predictor GUI"}],
      demoUrl: "demos/healthy_meal_predictor.html",
      githubUrl: "https://github.com/ayedirahma/Healthy_Meal_Predictor"
    },
    {
      title: "Anavid",
      tag: "BI.02",
      year: "2026",
      role: "Performance & Monitoring Team",
      stack: "Grafana, SQL, Data Visualization",
      w: 64,
      h: 286,
      bg: "#0A3323",
      ink: "#FFFFFF",
      mono: false,
      over: "stack: Grafana, SQL, Data Visualization",
      context: "Anavid uses existing CCTV to detect theft. Clients needed a way to visualize real-time alerts and store metrics",
      problem: "How to make complex, real-time AI data instantly readable for store managers and security teams?",
      decisions: "for each client I separated data into focused dashboards: Alerts, Trends and Monitoring",
      process: "Mapped user journeys, wireframed data flows, and built high-fidelity mockups.",
      outcome: "Delivered a clear, actionable dashboards allowing clients to monitor 60% loss reduction and <30 sec detection times",
      images: [ { src: "images/Anavid/ClientX.png", caption: "ClientX Dashboard" }],
      demoUrl: "demos/Anavid.html",
      githubUrl: ""
    },
    {
      title: "Empty Space Predictor",
      tag: "GEO-03",
      year: "2026",
      role: "Solo project",
      stack: "Java, SpringBoot, MySQL",
      w: 58,
      h: 262,
      bg: "#2B3A42",
      ink: "#F2F0EA",
      mono: true,
      over: "SVM classifier to automatically detect if a parking space is empty or occupied",
      context: "Manual parking monitoring is inefficient; needed an automated image classifier",
      problem: "How to build a lightweight, accurate model to distinguish empty vs. occupied spots?",
      decisions: "Resized images to 15x15 for speed. Tuned SVM hyperparameters (gamma, C) via GridSearchCV",
      process: "Flattened images into arrays, trained the model, and saved weights with Pickle",
      outcome: "A fast script that instantly outputs parking status from any input image",
      images: [{src: "images/empty/emptyvsnotempty.jpg", caption: 'Empty vs Occupied Parking Space'}],
      demoUrl: "",
      githubUrl: "https://github.com/ayedirahma/empty-space"
    },
    {
      title: "Color Detector",
      tag: "DATA-02",
      year: "2025",
      role: "solo project",
      stack: " Python, OpenCV, Pillow (PIL), NumPy",
      w: 80,
      h: 318,
      bg: "#EADFC8",
      ink: "#141414",
      mono: false,
      over: "Python, OpenCV, Pillow (PIL), NumPy",
      context: "Built to explore real-time object tracking and HSV color masking using Python.",
      problem: "How to isolate a specific color (e.g., yellow) in a live video feed and draw a bounding box around it instantly?",
      decisions: "Placeholder decisions.Converted the video feed from BGR to HSV for better color isolation. Used getbbox() from PIL to calculate the exact bounding box coordinates around the detected mask.",
      process: "Captured the webcam feed frame-by-frame, applied the HSV mask, calculated the bounding box, and drew a green rectangle using OpenCV",
      outcome: "A fast, real-time tracking script that successfully locks onto and outlines the target color.",
      demoUrl: "",
      images: [{src: "images/empty/colordetection.png", caption: "Color Detection in Action"}],
      githubUrl: "https://github.com/ayedirahma/color-detection-"
    },
    {
      title: "GoMyCode Project",
      tag: "VOL. 07",
      year: "2026",
      role: "Analyst",
      stack: "Power BI, SQL, DAX",
      w: 64,
      h: 286,
      bg: "#2F6B4F",
      ink: "#FFFFFF",
      mono: false,
      over: "stack: Power BI, SQL, DAX",
      context: "A multi-page dashboard built to analyze flight data.",
      problem: "Raw data lacked structure and clear operational insights.",
      decisions: "Split data into two focused views for logic.",
      process: "Cleaned flights, KPI cards, maps, and slicers.",
      outcome: "An interactive report highlighting delays and route performance.",
      images: [{src: "images/empty/gomycode.png", caption: "Flight Data Dashboard"}],
      demoUrl: "https://app.powerbi.com/links/euhzyTgbHk?ctid=e09e2823-8a48-42f5-9158-2dc1e59c5ccf&pbi_source=linkShare",
      githubUrl: ""
    }
  

  ];

  var shelf = document.getElementById("shelf");
  function decode(s) {
    var d = document.createElement("div");
    d.innerHTML = s;
    return d.textContent;
  }

  books.forEach(function (b, i) {
    var el = document.createElement("button");
    el.type = "button";
    el.className = "spine" + (b.mono ? " mono-title" : "");
    el.setAttribute("role", "listitem");
    el.setAttribute("aria-haspopup", "dialog");
    el.setAttribute("aria-label", "Open project " + decode(b.title) + ", " + b.tag);
    el.style.setProperty("--w", b.w);
    el.style.setProperty("--h", b.h);
    el.style.setProperty("--book", b.bg);
    el.style.setProperty("--book-ink", b.ink);
    el.innerHTML =
      '<span class="tag">' + b.tag + '</span>' +
      '<span class="title">' + b.title + '</span>' +
      '<span class="mark" aria-hidden="true"></span>';
    el.addEventListener("click", function () {
      openBook(i, el);
    });
    shelf.appendChild(el);
  });

  var end = document.createElement("div");
  end.className = "bookend";
  end.setAttribute("aria-hidden", "true");
  shelf.appendChild(end);

  /* ---------- Book modal ---------- */
  var overlay = document.getElementById("overlay");
  var book = document.getElementById("book");
  var closeBtn = document.getElementById("closeBtn");
   var wire = document.getElementById("wire"); 
  var lastTrigger = null;
  var closeTimer = null;

  function openBook(i, trigger) {
    var b = books[i];
    var title = decode(b.title);
    lastTrigger = trigger;
    clearTimeout(closeTimer);

    // Set the book's spine color as the theme for the modal
    book.style.setProperty(
      "--book",
      b.bg === "#DCE9E1" || b.bg === "#EADFC8" ? "var(--primary)" : b.bg
    );

    var art = document.getElementById("art");
    art.innerHTML = "";

    // Show the first image if it exists, otherwise show wireframe
    if (b.images && b.images.length > 0) {
      var img = document.createElement("img");
      img.src = b.images[0].src;
      img.alt = b.images[0].caption || title;
      // The CSS will handle making this fit perfectly
      art.appendChild(img);
    } else {
      art.appendChild(wire.content.cloneNode(true));
    }

    // Populate left page
    document.getElementById("bk-fig").textContent = "Fig. " + (i + 1);
    document.getElementById("bk-cap").textContent = title + ", " + b.year;
    document.getElementById("bk-note").textContent = 
      (b.images && b.images.length > 0 && b.images[0].caption) 
        ? b.images[0].caption 
        : "Screenshot from the project.";

    // Populate right page
    document.getElementById("bk-title").textContent = title;
    document.getElementById("bk-over").textContent = b.over || "";

    document.getElementById("bk-context").textContent = b.context || "";
    document.getElementById("bk-problem").textContent = b.problem || "";
    document.getElementById("bk-decisions").textContent = b.decisions || "";
    document.getElementById("bk-process").textContent = b.process || "";
    document.getElementById("bk-outcome").textContent = b.outcome || "";

    // Set up buttons
    var demoBtn = document.getElementById("bk-demo");
    var gitBtn = document.getElementById("bk-github");
    
    if (b.demoUrl) {
      demoBtn.href = b.demoUrl;
      demoBtn.target = "_blank";
      demoBtn.style.display = "";
    } else {
      demoBtn.style.display = "none";
    }
    
    if (b.githubUrl) {
      gitBtn.href = b.githubUrl;
      gitBtn.target = "_blank";
      gitBtn.style.display = "";
    } else {
      gitBtn.style.display = "none";
    }

    // Show modal
    overlay.classList.add("on");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    book.scrollTop = 0;
    void overlay.offsetWidth; /* force reflow */
    overlay.classList.add("show");
    closeBtn.focus({ preventScroll: true });
  }

  function closeBook() {
    if (!overlay.classList.contains("on")) return;
    overlay.classList.remove("show");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    closeTimer = setTimeout(function () {
      overlay.classList.remove("on");
      document.getElementById("art").innerHTML = ""; // clean up
    }, 230);
    if (lastTrigger) lastTrigger.focus({ preventScroll: true });
  }

  closeBtn.addEventListener("click", closeBook);
  overlay.addEventListener("mousedown", function (e) {
    if (e.target === overlay) closeBook();
  });

  document.addEventListener("keydown", function (e) {
    if (!overlay.classList.contains("on")) return;
    if (e.key === "Escape") {
      e.preventDefault();
      closeBook();
      return;
    }
    if (e.key === "Tab") {
      /* keep focus inside the open book */
      var f = book.querySelectorAll("a[href], button:not([disabled])");
      if (!f.length) return;
      var first = f[0],
        last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
})();