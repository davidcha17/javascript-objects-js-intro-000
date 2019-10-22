var playlist = {
  'Alison': 'My Bloody Valentine', 'Phil Ochs': 'Here\'s to The State of Mississippi'
}


function updatePlayList(playlist, artistName, songTitle){
  return playlist.assign({}, playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist, artistName, songTitle){
  delete playlist[artistName]
  return playlist
}
