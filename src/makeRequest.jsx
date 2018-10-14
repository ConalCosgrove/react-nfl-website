require('axios');

export const makeRequest = (url) => {

    axios.get(url)
        .then((response) => {
        if (!this.isCancelled) {
            this.setState({ games: response.data });
            this.populateMatches();
        }
        })
        .catch(() => {
        !this.isCancelled && this.setState({ gameHTML: <span className="Loading"> Error: failed to load match data</span> });
        });
      
}