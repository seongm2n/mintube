import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { YoutubeApiProvider } from './context/YoutubeApiContext';

const queryClient = new QueryClient();

function App() {
	return (
		<>
			<Header />
			<YoutubeApiProvider>
				<QueryClientProvider client={queryClient}>
					<Outlet />
				</QueryClientProvider>
			</YoutubeApiProvider>
		</>
	);
}

export default App;
