export const handlePrintPdf = () => {
  // using Java Script method to get PDF file
  fetch("Curriculo.pdf").then((response) => {
    response.blob().then((blob) => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob);
      // Setting various property values
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "Curriculo.pdf";
      alink.click();
    });
  });
};