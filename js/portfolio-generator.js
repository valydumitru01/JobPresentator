export function generatePortfolio(data) {
    const preview = document.getElementById('preview');
    preview.innerHTML = `
        <h1>${data.personal.name} ${data.personal.surname}</h1>
        <p>${data.personal.email} | ${data.personal.phone}</p>
        <h2>Education</h2>
        <p>${data.education.degree} at ${data.education.university} (${data.education.start} - ${data.education.end})</p>
        <h2>Projects</h2>
        ${data.projects.map(project => `
            <div class="project">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p>${project.start} - ${project.end}</p>
            </div>
        `).join('')}
        <h3>JSON Output</h3>
        <pre>${JSON.stringify(data, null, 2)}</pre>
    `;
}