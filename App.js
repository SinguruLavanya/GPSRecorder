import { NavigationContainer } from '@react-navigation/native';

import AppStack from './src/Containers/AppStack';
import Layout from './src/Components/Layout';

function App() {
  return (
    <>
      <Layout>
        <NavigationContainer>
          <AppStack />
        </NavigationContainer>
      </Layout>
    </>
  );
}

export default App;
