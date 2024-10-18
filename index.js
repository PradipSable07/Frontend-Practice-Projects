import { projectData } from "./data";
  // Select the projects section
  const projectSection = document.querySelector('.projects');
  
  // Function to create and append cards
  const createCard = (project) => {
    const cardHTML = 	`<div
    class="card">
    
    <img
        class="card-img"
        src=${project.image}
        alt=${project.title} />

    <h2 class="card-heading">${project.title}</h2>
    <p class="card-description">
        ${project.description}
    </p>
    <div class="card-btn-container">
        
        <a href=${project.liveLink} class="button button-live" target="_blank">
            <span class="button__icon-wrapper">
                <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="button__icon-svg"
                    width="10">
                    <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"></path>
                </svg>

                <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    width="10"
                    xmlns="http://www.w3.org/2000/svg"
                    class="button__icon-svg button__icon-svg--copy">
                    <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"></path>
                </svg>
            </span>
            See Live 
        </a>
        <a href=${project.codeLink} class="button" target="_blank" >
            <span class="button__icon-wrapper">
                <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="button__icon-svg"
                    width="10">
                    <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"></path>
                </svg>

                <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    width="10"
                    xmlns="http://www.w3.org/2000/svg"
                    class="button__icon-svg button__icon-svg--copy">
                    <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"></path>
                </svg>
            </span>
            Code
        </a>

        
    </div>
</div>`
  
    // Append card to project section
    projectSection.innerHTML+=(cardHTML);
  };
  
  // Loop through project data and create cards
  projectData.forEach(createCard);