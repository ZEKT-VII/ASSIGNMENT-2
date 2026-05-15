const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');
const mammoth = require('mammoth');

async function main() {
    const rootPath = path.join(__dirname, '..');
    const pdfPath = path.join(rootPath, 'Digital Marketing Assignment # 1 – Website Development Project.pdf');
    const docxPath = path.join(rootPath, 'Digital_Business_Report.docx');

    // Read PDF
    const dataBuffer = fs.readFileSync(pdfPath);
    const pdfData = await pdf(dataBuffer);
    fs.writeFileSync(path.join(rootPath, 'assignment.txt'), pdfData.text);
    console.log('PDF saved to assignment.txt');

    // Read Docx
    const docxData = await mammoth.extractRawText({path: docxPath});
    fs.writeFileSync(path.join(rootPath, 'report.txt'), docxData.value);
    console.log('Docx saved to report.txt');
}

main().catch(console.error);
