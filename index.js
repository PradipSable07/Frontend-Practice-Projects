import { projectData } from "./data.js"; // Import data

// Select the projects section
const projectSection = document.querySelector(".projects");

// Function to create and append cards
const createCard = (project) => {
    // Create card elements
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.className = "card-img";
    img.src = project.image;
    img.alt = project.title;

    const heading = document.createElement("h2");
    heading.className = "card-heading";
    heading.textContent = project.title;

    const description = document.createElement("p");
    description.className = "card-description";
    description.textContent = project.description;

    const btnContainer = document.createElement("div");
    btnContainer.className = "card-btn-container";

    // Create Live Link button
    const liveLinkBtn = document.createElement("a");
    liveLinkBtn.href = project.liveLink;
    liveLinkBtn.className = "button button-live";
    liveLinkBtn.target = "_blank";

    const liveLinkSVG = `
        <span class="button__icon-wrapper">
    <svg
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="button__icon-svg"
      width="10"
    >
      <path
        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
        fill="currentColor"
      ></path>
    </svg>

    <svg
      viewBox="0 0 14 15"
      fill="none"
      width="10"
      xmlns="http://www.w3.org/2000/svg"
      class="button__icon-svg button__icon-svg--copy"
    >
      <path
        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
        fill="currentColor"
      ></path>
    </svg>
  </span>
        See Live`;

    liveLinkBtn.innerHTML = liveLinkSVG;

    // Create Code button
    const codeBtn = document.createElement("a");
    codeBtn.href = project.codeLink;
    codeBtn.className = "button";
    codeBtn.target = "_blank";

    const codeSVG = `
        <span class="button__icon-wrapper">
    <svg
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="button__icon-svg"
      width="10"
    >
      <path
        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
        fill="currentColor"
      ></path>
    </svg>

    <svg
      viewBox="0 0 14 15"
      fill="none"
      width="10"
      xmlns="http://www.w3.org/2000/svg"
      class="button__icon-svg button__icon-svg--copy"
    >
      <path
        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
        fill="currentColor"
      ></path>
    </svg>
  </span>
        Code`;

    codeBtn.innerHTML = codeSVG;

    // Append buttons to the button container
    btnContainer.appendChild(liveLinkBtn);
    btnContainer.appendChild(codeBtn);

    // Append all elements to the card
    card.appendChild(img);
    card.appendChild(heading);
    card.appendChild(description);
    card.appendChild(btnContainer);

    // Append card to the project section
    projectSection.appendChild(card);
};

// Loop through project data and create cards
projectData.forEach(createCard);