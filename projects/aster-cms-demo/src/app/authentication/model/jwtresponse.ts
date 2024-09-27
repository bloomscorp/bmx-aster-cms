export class JWTResponse {

    constructor(private _jwtToken: string) {
    }

    get jwt(): string {
        return this._jwtToken;
    }
}