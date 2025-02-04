import {template} from './template-json.js';
import {generateForm} from './js/form-generator.js';
import {generatePortfolio} from './js/portfolio-generator.js';
import {generateCV} from './js/cv-generator.js';

document.addEventListener('DOMContentLoaded', () => {
    const formContainer = document.getElementById('form');

    // Generate form from JS template
    generateForm(template, formContainer);

    // Add generate button
    const generateButton = document.createElement('button');
    generateButton.textContent = 'Generate';
    generateButton.addEventListener('click', handleGenerate);
    formContainer.appendChild(generateButton);
});

function handleGenerate() {
    const formData = parseFormData();
    generatePortfolio(formData);
    generateCV(formData);
}

/**
 * Parses form data into JSON structure matching the template
 * @returns {Object}
 */
function parseFormData() {
    const result = structuredClone(template); // Start with template structure

    document.querySelectorAll('input').forEach(input => {
        const path = input.dataset.path.split('.');
        let current = result;

        for (let i = 0; i < path.length - 1; i++) {
            const part = path[i];
            if (part.includes('[')) {
                const [name, index] = part.split(/\[|\]/);
                current[name] = current[name] || [];
                current = current[name];
                current[index] = current[index] || structuredClone(template.projects[0]);
                current = current[index];
            } else {
                current[part] = current[part] || {};
                current = current[part];
            }
        }

        const lastPart = path[path.length - 1];
        current[lastPart] = input.value;
    });

    return result;
}