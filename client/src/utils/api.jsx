import SerpApi from 'google-search-results';

const SERPA_API_KEY = process.env.REACT_APP_SERPA_API_KEY;
const search = new SerpApi.GoogleSearch(SERPA_API_KEY);

export const getGoogleJobsWithParams = async (query, location = "United States", output = 'json') => {
    return new Promise((resolve, reject) => {
        const params = {
            engine: "google_jobs",
            q: query,
            location: location,
            output: output,
        };

        search.json(params, (data) => {
            if (data.error) {
                reject(data.error);
            } else {
                resolve(data.jobs_results || []);
            }
        });
    });
};
export const getSearchStatus = async (searchId) => {
    return new Promise((resolve, reject) => {
        search.search_metadata(searchId, (data) => {
            if (data.error) {
                reject(data.error);
            } else {
                resolve(data.search_metadata.status);
            }
        });
    });
};