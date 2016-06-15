// Dummy class to simulate http requests
class HttpRequest {
    internal: InternalHttpRequest;

    constructor(baseUrl: string) {
        this.internal = new InternalHttpRequest(baseUrl);
    }

    get(url: string): string {
        return this.internal.get(url);
    }
}

class InternalHttpRequest {
    constructor(private baseUrl: string) {
    }

    get(url: string): string {
        return `${this.baseUrl}/${url}`;
    }
}

export {HttpRequest};

