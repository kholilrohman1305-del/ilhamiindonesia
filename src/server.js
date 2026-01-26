const app = require("./app");
const { startReminderJob } = require("./jobs/reminder.job");

// Di hosting, PORT akan diberikan secara dinamis oleh sistem
const PORT = process.env.PORT || 3000;

// Menambahkan '0.0.0.0' memastikan server menerima koneksi dari network hosting
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is live on port ${PORT}`);
  startReminderJob();
});