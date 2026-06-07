import ExcelJs from 'exceljs';

export class ExcelUtils{



async readFromExcelFile(worksheet, searchText) {
    let output = { row: -1, col: -1 };
    worksheet.eachRow((row, rowNumber) => {
      row.eachCell((cell, colNumber) => {
        if (cell.value === searchText) {
          output.row = rowNumber;
          output.col = colNumber;
        }
      });
    });
    return output;
  }


async writeInExcelFile(searchText, newValue, change, filePath) {
    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet('Sheet1');
    const output = await this.readFromExcelFile(worksheet,searchText);
    const cell = worksheet.getCell(output.row, output.col+change.colChange);
    cell.value = newValue;
    await workbook.xlsx.writeFile(filePath);
}



async downloadFile(page, element, filePath){
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        await element.click()
    ]);
    await download.saveAs(filePath);
}

async downloadUpdateUploadFile(page, downloadElement, uploadElement, searchText, newValue, change, filePath){
    await this.downloadFile(page, downloadElement, filePath);
    await this.writeInExcelFile(searchText, newValue, change, filePath);
    await uploadElement.setInputFiles(filePath);
}

}