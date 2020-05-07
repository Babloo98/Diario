const baseUrl = window.location.origin;
const index = baseUrl.indexOf(".");
const url = index === -1 ? "https://diario1.free.beeceptor.com" : baseUrl;
const apiNetworkInterface = {
  development: url
};

const Diario = {
  API_ROOT:
    apiNetworkInterface[process.env.REACT_APP_ENV] ||
    apiNetworkInterface.development,
  resultDto(statusCode, message, result) {
    return {
      statusCode,
      message,
      result
    };
  },
  getApiUrlFromRoot(url) {
    return this.API_ROOT + url;
  },
  getMockUrl(url) {
    return apiNetworkInterface.mock + url;
  },
  getHeaders(headers) {
    const HEADERS = {
      JSON: {
        "Content-Type": "application/json"
      },
      URL_ENCODED: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      MULTIPART_FORM_DATA: {
        "Content-Type": "multipart/form-data"
      },
      TEXT_HTML: {
        "Content-Type": "text/html"
      },
      OCTET_STREAM: {
        "Content-Type": "application/octet-stream"
      },
      XML: {
        "Content-Type": "application/json, text/plain, */*"
      }
    };
    function getHeaders() {
      let headerObj = [];
      headers.forEach(item => {
        const header = HEADERS[item];
        headerObj = Object.assign(headerObj, header);
      });
      return headerObj;
    }
    return getHeaders();
  }
};

export default Diario;
