export interface proxy {
    domain: string;
    url: string;
}

export let proxys:Proxy[] = [
    {
        domain: "www.edgeone.app",
        url: "http://www.google.com/"
    }     
];
