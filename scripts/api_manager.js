/**
 * Create an object that allow dev to access to converter API
 * @param {String} apiURL Base URL of the API
 * @param {String} apiKey API key to authenticate with API
 * @param {Object} config API manager configurator
 * @param {String} config.apiKeyVariable name of the API key variable (to customize if the API change)
 * @param {Function} config.fetch fetch api compliant function to get info from API.
 */
export function APIManager(apiURL, apiKey, { apiKeyVariable = 'access_key', fetchAPI = fetch } = {}) {
  this.apiURL = apiURL;
  this.apiKey = apiKey;
  this.apiKeyVariable = apiKeyVariable;
  this.fetch = (url, options) => fetchAPI(url, options);
}

/**
 * Prepare the URL to be requested.
 * @param {String} resource resource path to be requested.
 * @param {Object} query query values pased to the request
 * @returns {String}
 */
APIManager.prototype.getURL = function getURL(resource, query = {}) {
  const more = Object.keys(query).reduce((acc, key) => {
    acc.push(`${key}=${encodeURI(query[key])}`)
    return acc;
  }, []).join('&');
  return `${this.apiURL}${resource}?${this.apiKeyVariable}=${this.apiKey}${more ? `&${more}` : ''}`;
}

/**
 * Do an AJAX request according a resource and query paramenters.
 * @param {String} resource resource path to be requested.
 * @param {Object} query query values pased to the request
 * @returns {Promise<Object>}
 */
APIManager.prototype.getInfo = async function convert(resource, query) {
  const req = await this.fetch(this.getURL(resource, query));
  const json = await req.json();
  return json;
}
