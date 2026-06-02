const ExcelJs = require('exceljs');
const {test, expect} = require('@playwright/test');

export class ExcelUtils{
async writeInExcelFile(searchText, newValue, change, filePath) {
    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet('Sheet1');
    const output = await readFromExcelFile(worksheet,searchText);
    const cell = worksheet.getCell(output.row, output.col+change.colChange);
    cell.value = newValue;
    await workbook.xlsx.writeFile(filePath);
    console.log("Excel written successfully");
}

async readFromExcelFile(worksheet, searchText) {
    let output ={row:-1, col:-1};
    worksheet.eachRow((row, rowNumber)=>{
        row.eachCell((cell, colNumber)=>{
            if(cell.value === searchText){
                output.row = rowNumber;
                output.col = colNumber;
            }
        });
    }); 
    return output;
}


async downloadFile(page, element, filePath){
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        await element.click()
    ]);
    await download.saveAs(filePath);
}

async downloadUpdateUploadFile(page, downloadElement, uploadElement, searchText, newValue, change, filePath){
    await downloadFile(page, downloadElement, filePath);
    await writeInExcelFile(searchText, newValue, change, filePath);
    await uploadElement.setInputFiles(filePath);
}

}