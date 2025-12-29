const ngos = [
  { name: "CORO India", contact: "+91-(22)-25295002", email: "info@coroindia.org", address: "Chembur", type: "Development" },
  { name: "CORO India", contact: "+91-(22)-25295002", email: "info@coroindia.org", address: "Sion", type:"Human Rights"},
  { name: "Khidmat Trust", contact:"8657970797", email: "khidmat786@gmail.com", address: "Byculla", type: "Education" },
  { name: "Khidmat Trust", contact:"8657970797", email: "khidmat786@gmail.com", address: "Byculla", type: "Health Care" },  
  { name: "DBM India", contact: "9819108191", email: "info@dbmindia.org", address: "Chembur(W)", type: "Development" },
  { name: "Desai Foundation for Change", contact: "8356072587", email: "itdesaifoundationforchange.dfc@gmail.com", address: "Govandi(E)", type: "Education" },
  { name: "Apnalaya", contact: "9833262619", email: "admin@apnalaya.org", address: "Chembur", type: "Health Care" },
  { name: "Teach For India", contact: "+91-22-25194283", email: "apply@teachforindia.org", address: "Vikhroli(E)", type: "Education" },
  { name: "Pratham", contact: "022-2281-9561", email: "info@pratham.org", address: "Kurla", type: "Education" },
  { name: "Reliance Foundation", contact: "1800-419-8800", email: "contactus@reliancefoundation.org", address: "Thane", type: "Development" },
  { name: "Being Human Foundation", contact: "-", email: "contact@behumanfoundation.org", address: "Mazgaon", type: "Health Care" },
  { name: "Aashna Cares", contact: "+91-7208416516", email : "aashnacares@gmail.com", address: "Kalyan", type: "Health Care" },
  { name: "Centre for Communication Governance, NLU-D", contact: "+91-11-2803-1265", email: "ccg@nludelhi.ac.in", address: "Delhi", type: "Advocacy" },
  { name: "ALLIANCE DEFENDING FREEDOM INDIA", contact: "-", email: "askme@adfindia.org", address: "Delhi",type : "Advocacy" },
  { name: "The Akanksha Foundation", contact: "020-6605-1380", email: "fundraise@akanksha.org", address: "Pune", type: "Education" },
  { name: "Human Rights Law Network", contact: "+91-11-24374501", email: "contact@hrln.org", address: "Kolkata", type: "Human Rights" },
  { name: "CRY (Child Rights and You)", contact: "091159-11500", email:"-", address: "Maharashtra", type: "Human Rights" },
  { name: "LAW FOUNDATION", contact: "098010-40773", email: "admin@lawfoundation.org.in", address: "Patna", type: "Advocacy" },
  { name: "CENTRE FOR JUSTICE, LAW, AND SOCIETY", contact: "-", email: "cjls@jgu.edu.in", address: "Haryana", type: "Advocacy" },
];

function displayNGOs(type = "") {
  const table = document.querySelector("#ngoTable tbody");
  table.innerHTML = "";

  ngos.filter(ngo => !type || ngo.type === type).forEach(ngo => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${ngo.name}</td>
      <td>${ngo.contact}</td>
      <td>${ngo.email}</td>
      <td>${ngo.address}</td>
      <td>${ngo.type}</td>
    `;
    table.appendChild(row);
  });

  document.getElementById("ngoTableSection").scrollIntoView({ behavior: "smooth" });
}

window.onload = () => {
  loadTableOnPageLoad();
  triggerAllCounters(); // Trigger on page load
};

function loadTableOnPageLoad() {
    const tableBody = document.querySelector("#ngoTable tbody");
    tableBody.innerHTML = ""; // Clear existing data

    // Example: Load default NGOs — replace this with your actual NGO list
    const defaultNGOs = [
  { name: "CORO India", contact: "+91-(22)-25295002", email: "info@coroindia.org", address: "Chembur", type: "Development" },
  { name: "CORO India", contact: "+91-(22)-25295002", email: "info@coroindia.org", address: "Sion", type:"Human Rights"},
  { name: "Khidmat Trust", contact:"8657970797", email: "khidmat786@gmail.com", address: "Byculla", type: "Education" },
  { name: "Khidmat Trust", contact:"8657970797", email: "khidmat786@gmail.com", address: "Byculla", type: "Health Care" },  
  { name: "DBM India", contact: "9819108191", email: "info@dbmindia.org", address: "Chembur(W)", type: "Development" },
  { name: "Desai Foundation for Change", contact: "8356072587", email: "itdesaifoundationforchange.dfc@gmail.com", address: "Govandi(E)", type: "Education" },
  { name: "Apnalaya", contact: "9833262619", email: "admin@apnalaya.org", address: "Chembur", type: "Health Care" },
  { name: "Teach For India", contact: "+91-22-25194283", email: "apply@teachforindia.org", address: "Vikhroli(E)", type: "Education" },
  { name: "Pratham", contact: "022-2281-9561", email: "info@pratham.org", address: "Kurla", type: "Education" },
  { name: "Reliance Foundation", contact: "1800-419-8800", email: "contactus@reliancefoundation.org", address: "Thane", type: "Development" },
  { name: "Being Human Foundation", contact: "-", email: "contact@behumanfoundation.org", address: "Mazgaon", type: "Health Care" },
  { name: "Aashna Cares", contact: "+91-7208416516", email : "aashnacares@gmail.com", address: "Kalyan", type: "Health Care" },
  { name: "Centre for Communication Governance, NLU-D", contact: "+91-11-2803-1265", email: "ccg@nludelhi.ac.in", address: "Delhi", type: "Advocacy" },
  { name: "ALLIANCE DEFENDING FREEDOM INDIA", contact: "-", email: "askme@adfindia.org", address: "Delhi",type : "Advocacy" },
  { name: "The Akanksha Foundation", contact: "020-6605-1380", email: "fundraise@akanksha.org", address: "Pune", type: "Education" },
  { name: "Human Rights Law Network", contact: "+91-11-24374501", email: "contact@hrln.org", address: "Kolkata", type: "Human Rights" },
  { name: "CRY (Child Rights and You)", contact: "091159-11500", email:"-", address: "Maharashtra", type: "Human Rights" },
  { name: "LAW FOUNDATION", contact: "098010-40773", email: "admin@lawfoundation.org.in", address: "Patna", type: "Advocacy" },
  { name: "CENTRE FOR JUSTICE, LAW, AND SOCIETY", contact: "-", email: "cjls@jgu.edu.in", address: "Haryana", type: "Advocacy" },
];

    defaultNGOs.forEach(ngo => {
        const row = `<tr>
            <td>${ngo.name}</td>
            <td>${ngo.contact}</td>
            <td>${ngo.email}</td>
            <td>${ngo.address}</td>
            <td>${ngo.type}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

function animateCounter(counterEl, target) {
  let count = 0;
  const duration = 1000;
  const steps = 40;
  const increment = Math.ceil(target / steps);
  const intervalTime = duration / steps;

  // Prevent animation if already counted
  if (counterEl.dataset.animated === "true") return;
  counterEl.dataset.animated = "true";

  const interval = setInterval(() => {
    count += increment;
    if (count >= target) {
      count = target;
      clearInterval(interval);
    }
    counterEl.textContent = count.toLocaleString();
  }, intervalTime);
}

// Trigger all counters on page load
function triggerAllCounters() {
  const squares = document.querySelectorAll(".square");
  squares.forEach(square => {
    const counter = square.querySelector(".counter");
    const target = parseInt(square.dataset.count);
    animateCounter(counter, target);

    // Also enable re-animation on hover
    square.addEventListener("mouseenter", () => {
      counter.dataset.animated = "false";
      animateCounter(counter, target);
    });
  });
}