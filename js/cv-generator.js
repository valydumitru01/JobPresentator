export function generateCV(data) {
    const {jsPDF} = window.jspdf;
    const doc = new jsPDF();

    // Add CV content
    doc.setFontSize(22);
    doc.text(`${data.personal.name} ${data.personal.surname}`, 20, 20);
    doc.setFontSize(12);
    doc.text(`Email: ${data.personal.email} | Phone: ${data.personal.phone}`, 20, 30);

    // Education section
    doc.setFontSize(16);
    doc.text('Education', 20, 45);
    doc.setFontSize(12);
    doc.text(`${data.education.degree} at ${data.education.university}`, 20, 55);
    doc.text(`${data.education.start} - ${data.education.end}`, 20, 60);

    // Projects section
    doc.setFontSize(16);
    doc.text('Projects', 20, 75);
    let yPosition = 85;
    data.projects.forEach(project => {
        doc.setFontSize(12);
        doc.text(`• ${project.title} (${project.start} - ${project.end})`, 20, yPosition);
        doc.text(project.description, 25, yPosition + 5);
        yPosition += 15;
    });

    // Save the PDF
    doc.save('cv.pdf');
}