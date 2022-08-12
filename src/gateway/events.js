const baseUrl = 'https://62f69729612c13062b518ff1.mockapi.io/api/v1/events';

export const fetchEvents = () =>
  fetch(baseUrl).then(res => {
    if (!res.ok) {
      throw Error('Failed data fetch');
    }

    return res.json();
  });

export const uploadEvent = eventData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to create task');
    }
  });

export const removeEvent = id =>
  fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to delete task');
    }
  });

export const updateEvent = (id, eventData) =>
  fetch(`${baseUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to update task');
    }
  });
