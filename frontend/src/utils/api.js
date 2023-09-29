import СheckResponse from './CheckResponse';

class Api extends СheckResponse {
  constructor(configFetch) {
    super();
    this._checkResponse = super._checkResponse;
    this.url = configFetch.url;
    this.headers = configFetch.headers;
  }
  //получить информацию о пользователн
  getInfoUser() {
    return fetch(`${this.url}users/me`, {
      method: 'GET',
      headers: this.headers,
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
  //получить карточки
  getCard() {
    return fetch(`${this.url}cards`, {
      method: 'GET',
      headers: this.headers,
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
  //установить новые данные о пользователе
  setUserData(userData) {
    return fetch(`${this.url}users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(userData),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
  //установить новую карточку
  setNewCadr({ name, link }) {
    return fetch(`${this.url}cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ name: name, link: link }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
  //удалить карточку
  deleteCard(idCard) {
    return fetch(`${this.url}cards/${idCard}`, {
      method: 'DELETE',
      headers: this.headers,
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
  // обработать клик по лайку (поставить/убрать)
  changeLikeCardStatus(idCard, statusLike) {
    const changeFetch = statusLike ? 'DELETE' : 'PUT';
    return fetch(`${this.url}cards/${idCard}/likes`, {
      method: changeFetch,
      headers: this.headers,
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  //установить новый аватар
  setAvatar(urlAvatar) {
    return fetch(`${this.url}users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({ avatar: urlAvatar }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
}
const api = new Api({
  url: 'http://api.mormolad.nomoredomainsrocks.ru/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.jwt}`,
  },
});

export default api;
