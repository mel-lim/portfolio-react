// Exponential backoff delay function
const EXPONENTIAL_BACKOFF_BASE = 1000;
export const delay = retryCount => new Promise(resolve => setTimeout(resolve, EXPONENTIAL_BACKOFF_BASE * retryCount));

const postApiCall = async (url, requestBodyContent) => {
    const req = {
        method: 'POST',
        mode: 'cors',
        cache: 'default',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
    };
    if (requestBodyContent) {
        req.body = JSON.stringify(requestBodyContent)
    }
    try {
        const response = await fetch(url, req);
        const responseBodyText = await response.json();
        return { response, responseBodyText };
    }
    catch (error) {
        console.error("Error in stack at api.js - possible server connection error", error);
    }
}

// Called by handleSubmit in Contact.js
export const sendMessageApi = async requestBodyContent => {
    return postApiCall('/api/contact', requestBodyContent);
}