import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/Users').map((response: Response) => response.json());
    }

    getById(_id: string) {
        return this.http.get('/Users/' + _id).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post('/Users', user);
    }

    update(user: User) {
        return this.http.put('/Users/' + user._id, user);
    }

    delete(_id: string) {
        return this.http.delete('/Users/' + _id);
    }
}
