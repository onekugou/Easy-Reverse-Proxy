export interface proxy {
    domain: string;
    url: string;
}

export let proxys:Proxy[] = [
    {
        domain: "easy-reverse-proxy.vercel.app",
        url: "http://www.google.com/"
    }     
];
