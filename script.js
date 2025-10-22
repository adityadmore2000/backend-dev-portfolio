// Grab containers
const educationContainer = document.getElementById('education-cards');
const experienceContainer = document.getElementById('experience-cards');
const projectsContainer = document.getElementById('projects-cards');
const aboutText = document.getElementById('about-text');

// Modal elements
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-description');
const modalLinks = document.getElementById('modal-links');
const closeModal = document.getElementById('closeModal');

// Close modal
closeModal.addEventListener('click', () => modal.style.display = 'none');
modal.addEventListener('click', e => { if(e.target === modal) modal.style.display='none'; });

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

      // Clear modal
      modalDesc.innerHTML = '';
      modalLinks.innerHTML = '';

      // Handle links (array or single object)
      let links = [];
      if(item.links) links = Array.isArray(item.links) ? item.links : [item.links];

      links.forEach(linkData => {
        // Add external link
        const a = document.createElement('a');
        a.href = linkData.url;
        a.textContent = linkData.text || "External Link";
        a.target = "_blank";
        modalLinks.appendChild(a);

        // Embed YouTube iframe if URL is embed
        if(linkData.url.includes("youtube.com/embed")) {
          const iframe = document.createElement('iframe');
          iframe.src = linkData.url;
          iframe.width = "560";
          iframe.height = "315";
          iframe.title = item.title;
          iframe.frameBorder = "0";
          iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
          iframe.allowFullscreen = true;
          modalDesc.appendChild(iframe);
        }
      });

      // Handle description
      if(Array.isArray(item.description)) {
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
aboutText.textContent = data.about;

[data.education, data.experience, data.projects].forEach((section, i) => {
  const container = [educationContainer, experienceContainer, projectsContainer][i];
  section.forEach(item => container.appendChild(createCard(item)));
});

// Skills
function createSkillTag(name){
  const tag = document.createElement('span');
  tag.className = 'skill-tag';
  tag.textContent = name;
  return tag;
}

['languages','frameworks','tools','concepts','database'].forEach(type=>{
  const container = document.getElementById(`${type}-tags`);
  data.skills[type].forEach(skill => container.appendChild(createSkillTag(skill)));
});
