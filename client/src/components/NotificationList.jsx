const NotificationList = () => {
  // Mock notifications for demonstration
  const notifications = [
    { id: 1, message: 'New swarm created: Project X' },
    { id: 2, message: 'You have been invited to join Swarm Y' }
  ];

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Notifications</h2>
      <ul>
        {notifications.map(notification => (
          <li key={notification.id} className="bg-gray-100 p-4 mb-2 rounded shadow">
            {notification.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationList;
