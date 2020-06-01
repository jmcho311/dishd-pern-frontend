const url = `http://localhost:3001/api/v1`

class GameModel {
  static all = () => {
    return fetch(`${url}/games`).then(res => res.json())
  }

  static show = (gameId) => {
    return fetch(`${url}/games/${gameId}`).then(res => res.json())
  }
}

export default GameModel