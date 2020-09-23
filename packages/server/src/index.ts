import * as express from 'express';
import add from '@simple-monorepo/common';

const app: express.Application = express();

app.get('/add/:numberOne/:numberTwo', (req, res) => res.json({
    sum: add(parseInt(req.params.numberOne), parseInt(req.params.numberTwo))
}));

app.listen(8080, () => console.log('Listening on port 8080'));
