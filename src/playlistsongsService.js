const { Pool } = require('pg');

class PlaylistsongsService {
  constructor() {
    this._pool = new Pool();
  }

  async getSongsOfPlaylist(playlistId) {
    const query = {
      text: `SELECT songs.id, songs.title, songs.performer
      FROM playlistsongs
      INNER JOIN songs ON playlistsongs.song_id = songs.id
      WHERE playlistsongs.playlist_id = $1`,
      values: [playlistId],
    };

    const result = await this._pool.query(query);

    return result.rows;
  }
}

module.exports = PlaylistsongsService;
