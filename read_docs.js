import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const pdfParse = require('pdf-parse');
const mammoth = require('mammoth');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
    const rootPath = path.join(__dirname, '..');
    const pdfPath = path.join(rootPath, 'Digital Marketing Assignment # 1 – Website Development Project.pdf');
    const docxPath = path.join(rootPath, 'Digital_Business_Report.docx');

    // Read PDF
    try {
        const dataBuffer = fs.readFileSync(pdfPath);
        const pdfData = await pdfParse(dataBuffer);
        fs.writeFileSync(path.join(rootPath, 'assignment.txt'), pdfData.text);
        console.log('PDF saved to assignment.txt');
    } catch(e) { console.error('PDF error:', e); }

    // Read Docx
    try {
        const docxData = await mammoth.extractRawText({path: docxPath});
        fs.writeFileSync(path.join(rootPath, 'report.txt'), docxData.value);
        console.log('Docx saved to report.txt');
    } catch(e) { console.error('Docx error:', e); }
}

main().catch(console.error);
