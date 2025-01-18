export interface Proxy {
    domain: string;
    url: string;  
}

export let proxys: proxy[] = [
    {
        domain: "easy-reverse-proxy.vercel.app",
        url: "http://www.google.com/"
    }
];
