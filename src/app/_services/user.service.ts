import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/lokalusers').map((response: Response) => response.json());
    }

    getById(_id: string) {
        return this.http.get('/lokalusers/' + _id).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post('/lokalusers', user);
    }

    update(user: User) {
        return this.http.put('/lokalusers/' + user._id, user);
    }

    delete(_id: string) {
        return this.http.delete('/lokalusers/' + _id);
    }
}
