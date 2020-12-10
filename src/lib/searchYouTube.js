var searchYouTube = ({key, query, max = 5}, callback) => {
  // debugger;
  var testValue = query;
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
    .done(({items}) => {
      if (callback) {
        callback(items);
      }
    })
    .fail(({responseJSON}) => {
      testValue;
      debugger;
      console.log(responseJSON);
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
      return;
    });
};

export default searchYouTube;
