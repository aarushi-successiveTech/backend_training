import app from "./app";
import connectDB from "./config/db";
const PORT: number = 8000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`port running at ${PORT}`);
  });
});
