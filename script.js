// Grab containers
const educationContainer = document.getElementById('education-cards');
const experienceContainer = document.getElementById('experience-cards');
const projectsContainer = document.getElementById('projects-cards');
const aboutText = document.getElementById('about-text');

// Modal elements
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-description');
const closeModal = document.getElementById('closeModal');

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Function to create a card
function createCard(item) {
  const card = document.createElement('div');
  card.className = 'card';
  
  const title = document.createElement('h3');
  title.textContent = item.title;
  card.appendChild(title);

  const duration = document.createElement('p');
  duration.textContent = item.duration;
  card.appendChild(duration);

  const button = document.createElement('button');
  button.textContent = 'View';
  button.addEventListener('click', () => {
      modal.style.display = 'block';
      modalTitle.textContent = item.title;

      // Clear previous content
      modalDesc.innerHTML = '';

      // Check if description is array or string
      if (Array.isArray(item.description)) {
        const ul = document.createElement('ul');
        item.description.forEach(line => {
          const li = document.createElement('li');
          li.textContent = line;
          ul.appendChild(li);
        });
        modalDesc.appendChild(ul);
      } else {
        modalDesc.textContent = item.description || "No further details.";
      }
  });

  card.appendChild(button);

  return card;
}

// Populate sections
aboutText.textContent = data.about; // About Me

data.education.forEach(ed => {
  educationContainer.appendChild(createCard(ed));
});

data.experience.forEach(exp => {
  experienceContainer.appendChild(createCard(exp));
});

data.projects.forEach(proj => {
  projectsContainer.appendChild(createCard(proj));
});


function createSkillTag(name) {
  const tag = document.createElement('span');
  tag.className = 'skill-tag';
  tag.textContent = name;
  return tag;
}

// Populate Skills
const languagesContainer = document.getElementById('languages-tags');
const frameworksContainer = document.getElementById('frameworks-tags');
const toolsContainer = document.getElementById('tools-tags');
const conceptsContainer = document.getElementById('concepts-tags');

data.skills.languages.forEach(lang => {
  languagesContainer.appendChild(createSkillTag(lang));
});

data.skills.frameworks.forEach(fw => {
  frameworksContainer.appendChild(createSkillTag(fw));
});

data.skills.tools.forEach(tool => {
  toolsContainer.appendChild(createSkillTag(tool));
});

data.skills.concepts.forEach(concept => {
  conceptsContainer.appendChild(createSkillTag(concept));
});
