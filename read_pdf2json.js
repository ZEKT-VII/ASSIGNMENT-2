import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import PDFParser from 'pdf2json';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootPath = path.join(__dirname, '..');
const pdfPath = path.join(rootPath, 'Digital Marketing Assignment # 1 – Website Development Project.pdf');

const pdfParser = new PDFParser(this, 1);

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFileSync(path.join(rootPath, 'assignment.txt'), pdfParser.getRawTextContent());
    console.log("PDF parsed successfully to assignment.txt");
});

pdfParser.loadPDF(pdfPath);
