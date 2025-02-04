/**
 * Generates form elements based on the template structure
 * @param {Object} schema - The template structure
 * @param {HTMLElement} container - Parent element to append form to
 * @param {string} [path=''] - Current object path for data binding
 */
export function generateForm(schema, container, path = '') {
    for (const [key, value] of Object.entries(schema)) {
        const fieldPath = path ? `${path}.${key}` : key;
        const group = document.createElement('p');
        group.className = 'form-group';

        if (typeof value === 'object' && !Array.isArray(value)) {
            const legend = document.createElement('legend');
            legend.textContent = key;
            group.appendChild(legend);
            generateForm(value, group, fieldPath);
        } else if (Array.isArray(value)) {
            const arrayContainer = document.createElement('p');
            const addButton = document.createElement('button');
            addButton.type = 'button';
            addButton.textContent = `Add ${key}`;

            addButton.addEventListener('click', () => {
                const newItem = document.createElement('p');
                newItem.className = 'array-group';
                generateForm(value[0], newItem, `${fieldPath}[${arrayContainer.children.length}]`);
                arrayContainer.appendChild(newItem);
            });

            group.appendChild(addButton);
            group.appendChild(arrayContainer);
        } else {
            const label = document.createElement('label');
            label.textContent = key;

            const input = document.createElement('input');
            input.type = 'text';
            input.dataset.path = fieldPath;
            input.value = value; // Set initial value from template

            group.appendChild(label);
            group.appendChild(input);
        }

        container.appendChild(group);
    }
}