import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ConfigurationService} from '../configuration.service';
import {Observable, throwError} from 'rxjs';
import {JWTResponse} from '../authentication/model/jwtresponse';

@Injectable({
    providedIn: 'root'
})
export class HttpErrorHandlerService {

    constructor() { }

    private static prepareErrorMessage(error: HttpErrorResponse): string {
        if (!ConfigurationService.PRODUCTION) console.trace();

        let errorMessage: string;

        if (error.error instanceof ErrorEvent)
            errorMessage = error.error.message;
        else if (error.status === 0)
            errorMessage = 'could not connect to our servers';
        else errorMessage = error.error.message;

        return errorMessage;
    }

    public interceptJWTError(
        error: HttpErrorResponse
    ): Observable<JWTResponse> {
        return throwError(HttpErrorHandlerService.prepareErrorMessage(error));
    }

    public intercept(error: HttpErrorResponse): Observable<any> {
        return throwError(HttpErrorHandlerService.prepareErrorMessage(error));
    }

}
