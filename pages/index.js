import { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';

export default function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/api/events')
      .then(response => response.json())
      .then(data => setEvents(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Events</h1>
      <ul className="space-y-4">
        {events.map(event => (
          <li key={event.id} className="border p-4 rounded shadow">
            <h2 className="text-2xl font-semibold">{event.title}</h2>
            <p className="text-gray-700">{event.description}</p>
            <p className="text-gray-500">{new Date(event.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
