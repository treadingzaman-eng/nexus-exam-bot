
function doGet() {
  return HtmlService.createHtmlOutput(
    "NEXUS EXAM BOT BERHASIL TERHUBUNG!"
  );
}

function koneksiNexus() {
  const FORM_ID = "ISI_ID_GOOGLE_FORM_KAMU";

  const form = FormApp.openById(FORM_ID);

  return {
    status: "BERHASIL",
    nama: form.getTitle(),
    jumlahSoal: form.getItems().length
  };
}
