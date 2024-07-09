import { NextFunction, Request, Response } from 'express';

class APIController {
    // [GET] /
    index(req: Request, res: Response, next: NextFunction) {
        res.send('Hello World!');
    }
}

export default new APIController();
