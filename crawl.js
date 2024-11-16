// using node:url module
function normalizeURL(url) {
    try {
        const myURL = new URL(url);
        let hostname = myURL.hostname.toLowerCase();
        let pathname = myURL.pathname.toLowerCase();

        // remove www. from url hostname
        if (hostname.includes("www.")) {
            hostname = hostname.slice(4);
        }

        let cleanPath = pathname;
        if (cleanPath === "/") {
            cleanPath = "";
        } else {
            // Remove trailing slashes
            while (cleanPath.endsWith("/")) {
                cleanPath = cleanPath.slice(0, -1);
            }
            // Remove leading slash
            if (cleanPath.startsWith("/")) {
                cleanPath = cleanPath.slice(1);
            }
        }
        console.log(cleanPath);
        const normalizedURL = hostname + (cleanPath ? "/" + cleanPath : "");

        console.log({
            originalPathname: pathname,
            cleanPath,
            normalizedURL,
        });

        return normalizedURL;
    } catch (error) {
        return null;
    }
}

// Exports
export { normalizeURL };
