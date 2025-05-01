export const YT_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${process.env.REACT_APP_YT_API_KEY}`;
export const YT_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

// TODO: need to integrate this API instead of dummy comment data
export const YT_COMMENTS_API = `https://www.googleapis.com/youtube/v3/commentThreads?key=${process.env.REACT_APP_YT_API_KEY}&textFormat=plainText&part=snippet&maxResults=5&videoId=`;

export const YT_SEARCH_VIDEOS = `https://www.googleapis.com/youtube/v3/search?part=snippet,id&maxResults=20&key=${process.env.REACT_APP_YT_API_KEY}&q=`;

export const OFFSET_LIVE_CHAT = 15;
