const url = `http://localhost:3001/api/v1`

class GameModel {
  static all = () => {
    return fetch(`${url}/games`).then(res => res.json())
  }
}

export default GameModel