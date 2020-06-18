var cors = require('cors')

app.use(cors()) // Use this after the variable declaration

app.listen(8000, () => {
    console.log('Server started on PORT 8000');
  });

