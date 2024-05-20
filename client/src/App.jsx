import Header from './components/Header';
import SwarmForm from './components/SwarmForm';
import NotificationList from './components/NotificationList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto py-8">
        <SwarmForm />
        <NotificationList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
