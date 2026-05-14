const username = "Abdulhannan557";

const projectGrid =
document.getElementById("project-grid");

fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => response.json())
  .then(data => {

    // Update project count
    document.querySelector(".card h2").innerText =
      data.length;

    data.forEach(repo => {

      const card =
      document.createElement("div");

      card.classList.add("project-card");

      card.innerHTML = `

        <h3>${repo.name}</h3>

        <p>
          ${repo.description || "No description"}
        </p>

        <div class="buttons">

          <a href="${repo.html_url}"
             target="_blank"
             class="github-btn">
             GitHub
          </a>

        </div>

      `;

      projectGrid.appendChild(card);

    });

  });