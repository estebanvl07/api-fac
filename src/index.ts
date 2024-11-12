import app from './app'; 

const PORT = process.env.PORT || 5000;

// TODO: connect to DB

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});